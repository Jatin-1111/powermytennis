import puppeteer from 'puppeteer';
import lighthouse from 'lighthouse';

const pages = [
  '/',
  '/about',
  '/pathway',
  '/programs-and-fees',
  '/coaches',
  '/facilities',
  '/contact',
  '/policies'
];

const baseUrl = 'http://localhost:3002';

async function run() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ 
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
  });
  
  const endpointUrl = new URL(browser.wsEndpoint());
  
  for (const page of pages) {
    const url = `${baseUrl}${page}`;
    console.log(`\nTesting ${url}...`);
    
    const options = {
      logLevel: 'error',
      output: 'json',
      onlyCategories: ['accessibility'],
      port: endpointUrl.port
    };
    
    try {
      const runnerResult = await lighthouse(url, options);
      const report = JSON.parse(runnerResult.report);
      const audits = report.audits;
      
      let issuesFound = false;
      for (const [key, audit] of Object.entries(audits)) {
        if (audit.score !== null && audit.score < 1) {
          issuesFound = true;
          console.log(`  ❌ ${audit.title} (${audit.id})`);
          if (audit.details && audit.details.items) {
            audit.details.items.forEach(item => {
              console.log(`     - Node: ${item.node?.snippet || 'unknown'}`);
            });
          }
        }
      }
      
      if (!issuesFound) {
        console.log(`  ✅ Perfect Accessibility Score!`);
      }
    } catch (e) {
      console.error(`  Error running lighthouse on ${url}: ${e.message}`);
    }
  }
  
  await browser.close();
  console.log('\nFinished all tests.');
}

run().catch(console.error);
