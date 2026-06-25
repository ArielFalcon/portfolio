export interface CV {
  analyticsCode: string;
  basics: Basics;
  skills: Array<Skill>;
  work?: Array<Work>;
  education?: Array<Education>;
  Certificates?: Array<Certificate>;
  publications?: Array<Publication>;
  languages: Array<Language>;
  interests?: Array<Interests>;
  references?: Array<Reference>;
  projects?: Array<Project>;
}

interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone?: string;
  url: URL;
  summary: string;
  location: Location;
  profiles: Array<Profiles>;
}

interface Location {
  address: string;
  city: string;
  postalCode?: string;
  countryCode: string;
  region: string;
}

interface Profiles {
  icon: string,
  network: string;
  username: string;
  url: URL;
}

interface Work {
  name: string;
  position: string;
  url: URL;
  startDate: DateStr;
  endDate: DateStr | null;
  summary: string;
  highlights: Highlight;
}

type DateStr = `${string}-${string}-${string}`;

interface Skill {
  icon: string,
  name: string;
  level: string;
  keywords: Array<string>;
}

interface Certificate {
  name: string;
  date: DateStr;
  issuer: string;
  url: URL;
}

interface Publication {
  name: string;
  publisher: string;
  releaseDate: DateStr;
  url: URL;
  summary: string;
}

interface Education {
  institution: string;
  url: URL;
  area: string;
  studyType: string;
  startDate: DateStr;
  endDate: DateStr;
  score?: string;
  courses?: Array<string>;
}

interface Language {
  language: string;
  fluency: string;
}

interface Project {
  name: string;
  isActive: boolean;
  description: string;
  highlights: Highlights;
  url?: URL;
  github?: URL;
}

interface Interests {
  name: string;
  keywords: Array<string>;
}

interface Reference {
  name: string;
  reference: string;
}

interface HighlightItem {
  icon: string;
  text: string;
}

type Highlights = Array<HighlightItem>;
