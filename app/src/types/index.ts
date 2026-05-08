export interface Testimonial {
  id: number;
  name: string;
  age: number;
  quote: string;
  rating: number;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  featured?: boolean;
}

export interface Pillar {
  id: number;
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface Symptom {
  id: number;
  title: string;
  description: string;
  icon: string;
}
