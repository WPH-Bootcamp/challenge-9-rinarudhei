interface IResponse {
  success: boolean;
  message: string;
}

export interface ISuccessResponse<T> extends IResponse {
  data: T;
}

export interface IErrorResponse extends IResponse {
  error: string[];
}

export interface ISuccessPaginationResponse<T> {
  data: T & { pagination: Pagination };
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
