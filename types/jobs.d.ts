export interface JobDataType {
  hits: Hit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  exhaustive: Exhaustive;
  query: string;
  params: string;
  renderingContent: RenderingContent;
  processingTimeMS: number;
  processingTimingsMS: ProcessingTimingsMS;
}

export interface Exhaustive {
  nbHits: boolean;
  typo: boolean;
}

export interface Hit {
  id: number;
  company_id: number;
  company_name: string;
  company_logo: string;
  industry: null;
  industry_normalised: null;
  status: string;
  employment_type: string;
  location_type: string;
  pay_type: string;
  pay_currency: string;
  pay_mask: boolean;
  pay: null;
  pay_min: null;
  pay_max: null;
  description: string;
  title: string;
  title_normalised: null;
  category: string;
  category_normalised: null;
  skills: null;
  skills_normalised: null;
  address_1: string;
  address_2: string;
  town: string;
  city: string;
  postcode: string;
  country: string;
  coordinates: Geoloc;
  apply_url: string;
  flow: null;
  vacancies: number;
  source: null;
  internal_id: string;
  external_id: string;
  external_ref: string;
  expires_at: null;
  published_at: Date;
  expired_at: null;
  deleted_at: null;
  created_at: Date;
  updated_at: Date;
  company: Company;
  _geoloc: Geoloc;
  _tags: string[];
  objectID: string;
  _highlightResult: HighlightResult;
}

export interface Geoloc {
  lat: number;
  lng: number;
}

export interface HighlightResult {
  company_name: CompanyName;
  title: CompanyName;
}

export interface CompanyName {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}

export interface Company {
  id: number;
  user_id: number;
  name: string;
  slug: string;
  logo: string;
  cms_endpoint: string;
  created_at: Date;
  updated_at: Date;
}

export interface ProcessingTimingsMS {
  getIdx: GetIdx;
  total: number;
}

export interface GetIdx {
  load: Load;
  total: number;
}

export interface Load {
  total: number;
}

export interface RenderingContent {}
