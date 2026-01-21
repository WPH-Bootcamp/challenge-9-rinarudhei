import { Status } from "./order";

export interface IPaginationParams {
  page: number;
  limit: number;
}

export interface IPaginationQueryParams extends IPaginationParams {
  q: string;
}

export interface IPaginationStatusParams extends IPaginationParams {
  status: Status;
}
