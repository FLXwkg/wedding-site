// Types for the wedding site

export interface RSVP {
  id: number;
  name: string;
  email: string;
  guests: number;
  status: 'attending' | 'not_attending' | 'pending';
  dietaryNeeds: string;
  message?: string;
  createdAt: string;
}

export interface GalleryImage {
  id: number;
  title: string;
  description: string;
  url: string;
  uploadedAt: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface WeddingDetails {
  date: string;
  ceremonyTime: string;
  ceremonyLocation: string;
  receptionTime: string;
  receptionLocation: string;
}
