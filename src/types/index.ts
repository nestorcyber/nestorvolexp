export interface VolunteerEvent {
  id: string;
  title: string;
  organization: string;
  date: string;
  role: string;
  story: string;
  impact: string;
  images: string[];
  category?: string;
}
