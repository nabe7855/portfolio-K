
export type Language = 'en' | 'ja';

export interface BilingualString {
  en: string;
  ja: string;
}

export interface Work {
  id: string;
  title: BilingualString;
  category: BilingualString;
  year: string;
  thumbnail: string;
  summary: BilingualString;
  background: BilingualString;
  challenge: BilingualString;
  solution: BilingualString;
  result: BilingualString;
  tech: string[];
}

export interface JournalEntry {
  id: string;
  title: BilingualString;
  date: string;
  excerpt: BilingualString;
  content: BilingualString;
  tags: string[];
}

export type Concept = 'logical' | 'creative' | 'impactful';
