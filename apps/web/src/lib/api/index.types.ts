export type RequestData = {
  [key: string]: unknown;
};

export type DeletedResponse = {
  message: string;
  timestamp: string;
  path: string;
};

export interface QueryParams {
  [key: string]: unknown;
  limit?: number;
  offset?: number;
}

export type PaginationMeta = {
  totalCount: number;
  currentPage: number;
  totalPages: number;
  nextPage: number | null;
  prevPage: number | null;
  currentPageCount: number;
  limit: number;
  offset: number;
};

export type PaginatedResponse<T> = {
  data: T[];
  meta: PaginationMeta;
};
