export interface Detail {
  label: string;
  value: string;
}

export interface FamilyMember {
  relation: string;
  name: string;
  detail: string;
}

// This is the single editable source for every fact shown on screen and in print.
export const profile = {
  name: 'Shubham Kumar',
  photo: {
    src: './images/shubham.jpg',
    alt: 'Portrait of Shubham Kumar',
  },
  personal: [
    { label: 'Date of Birth', value: '18 August 1998' },
    { label: 'Height', value: `5'9"` },
    { label: 'Complexion', value: 'Fair' },
    { label: 'Caste', value: 'Bhumihar (Pilichbar)' },
    { label: 'Gotra', value: 'Kashyap' },
    { label: 'Rashi', value: 'Kanya (Virgo)' },
    { label: 'Current Location', value: 'Gurugram, Haryana' },
    { label: 'Native Place', value: 'Ranchi, Jharkhand' },
  ] satisfies Detail[],
  education: [
    { label: 'College', value: 'BITS Pilani, Goa Campus' },
    { label: 'Degrees', value: 'B.E. (Honours) in Electrical & Electronics Engineering\nM.Sc. (Honours) in Mathematics' },
    { label: 'School', value: 'Jawahar Vidya Mandir, Shyamali, Ranchi' },
    { label: 'Class 10 & 12', value: 'CBSE' },
  ] satisfies Detail[],
  profession: [
    { label: 'Designation', value: 'Software Development Engineer 3 (SDE3)' },
    { label: 'Company', value: 'GreyOrange Robotics' },
    { label: 'Location', value: 'Gurugram' },
    { label: 'Work Area', value: 'Robotics, Artificial Intelligence & Software Engineering' },
  ] satisfies Detail[],
  family: [
    { relation: 'Father', name: 'Sanjay Kumar', detail: 'Retired Government Bank Officer (Indian Bank) · Enjoys gardening, spirituality, and a healthy lifestyle' },
    { relation: 'Mother', name: 'Reena Sharma', detail: 'M.A. in Psychology, Homemaker · Understanding, caring, insightful, and a patient listener' },
    { relation: 'Younger Brother', name: 'Shivam Kumar', detail: 'Pursuing higher studies in Ghaziabad · Enjoys the gym and values management, personal freedom, and a healthy lifestyle' },
  ] satisfies FamilyMember[],
  about: 'A software engineer who enjoys technology, exploring new ideas, and understanding how things work. Beyond work, I enjoy gaming, anime, travelling, psychology, and learning new things. I value independence, honesty, and meaningful relationships.',
  partnerPreference: "Looking for someone kind, independent, emotionally mature, and open-minded. I value friendship, trust, mutual respect, and supporting each other's aspirations. I look forward to building a meaningful relationship where we can learn, explore, and grow together.",
  contact: [
    { label: "Mother's Contact", value: '+91 9905580183' },
    { label: "Father's Contact", value: '+91 8986777459' },
    { label: 'Address', value: 'Makchund Toli, Pragati Path, Chutia, Ranchi - 834001' },
  ] satisfies Detail[],
  webPresence: [
    { label: 'Website', value: 'shubham.codes', href: 'https://shubham.codes' },
    { label: 'LinkedIn', value: 'linkedin.com/in/schwiftycold', href: 'https://www.linkedin.com/in/schwiftycold' },
    { label: 'Instagram', value: 'instagram.com/schwiftycold', href: 'https://www.instagram.com/schwiftycold' },
  ],
};
