export interface Testimonial {
  name: string;
  pic: string; // base64 encoded thumb most probably
  translated_text: string;
  activities: string[];
}

export interface N4DEvent {
  id: string;
  active: boolean;
  menuTitle: string;
  title: string;
  subtitle?: string;
  host?: string;
  description: string;
  date: Date;
  dateEnd?: Date;
  locationAddress: string;
  locationComment?: string;
  locationLink?: string;
  registrationLink?: string;
  picLink?: string; // file name in S3 bucket
}
