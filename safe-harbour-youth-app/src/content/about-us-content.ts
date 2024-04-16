export type Section = 'About Us' | 'Our Mission' | 'Our Vision' | 'Core Values That Guide Us';

export type SectionContent = {
  text: string;
  img?: string; // img is now optional
};

export const content: Record<Section, SectionContent>  = {
  'About Us': {
    text: `Welcome to Safe Harbour Youth, where we stand at the forefront of combating youth violence through technology and community collaboration. Our platform serves as a vital bridge connecting young individuals to local support networks and NGOs, empowering them to report incidents of violence securely and anonymously.`
  },
  'Our Mission': {
    text: `To provide a secure, responsive, and accessible platform that empowers youth to report violence and access immediate support. We are committed to fostering a culture of safety, support, and proactive intervention.`,
    img: 'images/mission.png',
  },
  'Our Vision': {
    text: `We envision a world where every young person has the right and ability to live free from fear and violence. Through our efforts, we aim to inspire societal change, influencing policies and practices that protect and empower the most vulnerable among us.`,
    img: 'images/vision.png',
  },
  'Core Values That Guide Us': {
    text: `Our core values — compassion, integrity, innovation, and collaboration — are the foundation of our work. We empathize deeply, maintain confidentiality, innovate for better solutions, and partner effectively to create a safer future for youth.`,
    img: 'images/core-value.png',
  },
};
