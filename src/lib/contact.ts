export const contact = {
  whatsappDisplay: "+91 7293482115",
  whatsappUrl: "https://wa.me/917293482115",
  email: "nikhilravindranc@gmail.com",
  linkedinDisplay: "in/nikhilravindranc",
  linkedinUrl: "https://www.linkedin.com/in/nikhilravindranc",
  instagramDisplay: "@nikhilravindranc",
  instagramUrl: "https://www.instagram.com/nikhilravindranc",
  location: "Based in India · Working internationally",
};

export const mailto = (subject?: string) =>
  `mailto:${contact.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
