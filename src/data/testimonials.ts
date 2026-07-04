export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorRole: string;
  highlight?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "The personalized attention and high-performance methodology completely transformed my game. The coaching team's dedication is unparalleled.",
    authorName: "Arjun M.",
    authorRole: "ITF Junior Player",
    highlight: "completely transformed my game",
  },
  {
    id: "t2",
    quote: "We've seen incredible improvement in just six months. The structured pathway and focus on biomechanics have given our daughter a massive competitive edge.",
    authorName: "Sarah K.",
    authorRole: "Parent of Academy Player",
    highlight: "massive competitive edge",
  },
  {
    id: "t3",
    quote: "PowerMyTennis isn't just about hitting balls; it's about building athletes. The sports science approach is exactly what I needed to reach the next level.",
    authorName: "Rohan D.",
    authorRole: "Tournament Professional",
    highlight: "sports science approach",
  },
  {
    id: "t4",
    quote: "An elite facility with world-class coaches. The attention to detail in tactical analysis and mental conditioning is what separates them from the rest.",
    authorName: "Priya S.",
    authorRole: "Collegiate Athlete",
    highlight: "world-class coaches",
  },
  {
    id: "t5",
    quote: "The foundation program gave my son the perfect start. Now he's competing at state levels thanks to their meticulous development pathway.",
    authorName: "Amit V.",
    authorRole: "Parent of Development Player",
    highlight: "meticulous development pathway",
  },
];
