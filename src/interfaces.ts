export interface INote {
  title: string;
  id: number;
  important: boolean;
  section: string;
}

export enum sections {
  EDUCATION,
  SPORT,
  ART,
  NONE,
}
