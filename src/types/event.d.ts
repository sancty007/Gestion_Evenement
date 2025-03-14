export type Event = {
  id: number;
  title: string;
  description: string;
  date: Date;
  location: string;
  organizer_id: number;
  created_at: Date;
  updated_at: Date;
};
export type CreateEventDTO = {
  title: string;
  description: string;
  date: Date;
  location: string;
};
