export interface Coach {
  id: string;
  name: string;
  role: string;
  credentials?: string;
  experience?: string;
  photoUrl?: string; // placeholder until provided
}

export const coaches: Coach[] = [
  {
    id: "yengkhom-romen-singh",
    name: "Yengkhom Romen Singh",
    role: "Director (Academy)",
    credentials:
      "ITF Level 2, NIS Coach, Ex-Director, Coaching and Development (CLTA)",
    experience: "28+ years of experience",
    photoUrl: "/coach-romen.jpeg",
  },
  {
    id: "mayank-valecha",
    name: "Mayank Valecha",
    role: "Senior Coach",
    credentials: "AITA Level 4 Coach",
    experience: "15+ years of experience",
    photoUrl: "/coach-mayank.jpeg",
  },
  {
    id: "navneet-chahal",
    name: "Navneet Chahal",
    role: "Coach",
    credentials: "Ex-Founder & Coach, Prime Tennis Academy, Bathinda",
    experience: "",
    photoUrl: "/coach-navmeet.jpg",
  },
  {
    id: "shiv-bahadur",
    name: "Shiv Bahadur",
    role: "Assistant Coach",
    credentials: "",
    experience: "25+ years of experience",
    photoUrl: "/coach-shiv.jpeg",
  },
  {
    id: "rahul-waikhom",
    name: "Rahul Waikhom",
    role: "Fitness Coach",
    credentials: "Master in Physical Education.",
    experience: "",
    photoUrl: "/coach-rahul.jpeg",
  },
];
