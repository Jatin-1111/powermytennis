export interface SiteConfig {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  sessionsBeginDate: string;
  address: {
    city: string;
    accessibleFrom: string[];
    coordinates: {
      lat: number;
      lng: number;
    };
  };
}

export const siteConfig: SiteConfig = {
  name: "PowerMyTennis High Performance Academy",
  tagline:
    "is thrilled to announce the launch of its Comprehensive Tennis Coaching Modules",
  phone: "86992 12962",
  email: "rahul@powermysport.com",
  sessionsBeginDate: "05 JUN",
  address: {
    city: "New Chandigarh",
    accessibleFrom: ["Chandigarh", "Kharar", "Ropar", "SAS Nagar"],
    coordinates: {
      lat: 30.8165849,
      lng: 76.7266800,
    },
  },
};
