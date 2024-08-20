export interface PagefindSearchResultData {
  url: string;
  excerpt: string;
  meta?: PagefindMetadata;
  sub_results?: PagefindSearchResultData[];
}

export interface PagefindSearchResultRow {
  id: string;
  data?: () => Promise<PagefindSearchResultData>;
}

export interface PagefindMetadata {
  title: string;
  image?: string;
}