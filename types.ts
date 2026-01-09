
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
