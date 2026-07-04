import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'PowerMyTennis Academy';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#22261B', // brand-primary
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 80,
        }}
      >
        {/* Subtle grid pattern for texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            backgroundImage: 'linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
          }}
        />
        
        {/* Glowing Orb */}
        <div
          style={{
            position: 'absolute',
            width: 800,
            height: 800,
            background: 'radial-gradient(circle, rgba(198,217,43,0.15) 0%, rgba(34,38,27,0) 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
          {/* Logo Typography */}
          <div
            style={{
              fontSize: 120,
              fontWeight: 900,
              color: '#FFFFFF',
              letterSpacing: '-0.05em',
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              textTransform: 'uppercase',
              fontFamily: 'sans-serif',
            }}
          >
            PowerMy<span style={{ color: '#C6D92B' }}>Tennis</span>
          </div>
          
          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 600,
              color: '#C6ACA2', // brand-neutral
              marginTop: 32,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontFamily: 'sans-serif',
            }}
          >
            High-Performance Academy
          </div>

          {/* Accent Line */}
          <div
            style={{
              width: 120,
              height: 6,
              background: '#C6D92B',
              marginTop: 48,
              borderRadius: 4,
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
