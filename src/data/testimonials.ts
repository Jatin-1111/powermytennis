export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  program?: string;
  highlight?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "The personalized attention and high-performance methodology completely transformed my game. The coaching team's dedication is unparalleled.",
    authorName: "Arjun M.",
    authorRole: "Junior Athlete",
    program: "High Performance Program",
    highlight: "completely transformed my game",
  },
  {
    id: "t2",
    quote: "We've seen incredible improvement in just six months. The structured pathway and focus on biomechanics have given our daughter a massive competitive edge.",
    authorName: "Sarah K.",
    authorRole: "Parent",
    program: "Tournament Program",
    highlight: "massive competitive edge",
  },
  {
    id: "t3",
    quote: "PowerMyTennis isn't just about hitting balls; it's about building athletes. The sports science approach is exactly what I needed to reach the next level.",
    authorName: "Rohan D.",
    authorRole: "Tournament Player",
    program: "Pro Program",
    highlight: "sports science approach",
  },
  {
    id: "t4",
    quote: "An elite facility with world-class coaches. The attention to detail in tactical analysis and mental conditioning is what separates them from the rest.",
    authorName: "Priya S.",
    authorRole: "Collegiate Athlete",
    program: "High Performance Program",
    highlight: "world-class coaches",
  },
  {
    id: "t5",
    quote: "The foundation program gave my son the perfect start. Now he's competing at state level thanks to their meticulous development pathway.",
    authorName: "Amit V.",
    authorRole: "Parent",
    program: "Beginner Program",
    highlight: "competing at state level",
  },
  {
    id: "t6",
    quote: "Enrolling in the beginner program was the best decision for our family. My son learned to love the sport in three months, and the coaches are incredibly patient and encouraging.",
    authorName: "Naveen P.",
    authorRole: "Parent",
    program: "Beginner Program",
    highlight: "learned to love the sport",
  },
  {
    id: "t7",
    quote: "Romen sir's technical analysis and the conditioning program have taken my game to a completely different level. This is serious coaching for serious players.",
    authorName: "Ananya T.",
    authorRole: "Junior Athlete",
    program: "High Performance Program",
    highlight: "completely different level",
  },
  {
    id: "t8",
    quote: "The quarterly performance reports are a game-changer. I get complete visibility into my daughter's progress — technique scores, fitness metrics, match stats. No other academy does this.",
    authorName: "Kiran S.",
    authorRole: "Parent",
    program: "High Performance Program",
    highlight: "complete visibility",
  },
  {
    id: "t9",
    quote: "I was skeptical about switching academies, but PowerMyTennis is on another level entirely. The clay court training and tactical sessions have sharpened my match game immensely.",
    authorName: "Dev M.",
    authorRole: "Tournament Player",
    program: "Tournament Program",
    highlight: "on another level",
  },
  {
    id: "t10",
    quote: "The private lessons with the chief coach are worth every rupee. In eight sessions, my footwork and serve mechanics improved more than in two years elsewhere. Highly recommend.",
    authorName: "Suhail K.",
    authorRole: "Weekend Player",
    program: "Private Lessons",
    highlight: "improved more than in two years elsewhere",
  },
];
