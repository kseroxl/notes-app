export interface INote {
  title: string;
  id: number;
  important: boolean;
  section: number;
}

export enum sections {
  EDUCATION,
  SPORT,
  ART,
  NONE,
}
