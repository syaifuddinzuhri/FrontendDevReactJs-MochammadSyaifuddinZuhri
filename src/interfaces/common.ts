export interface Response<T> {
  data: T;
  message: string;
  status: boolean;
}

export type PaginatedDataResponse<T> = T & {
  pagination: Pagination;
};

export interface PaginatedData<T> {
  data: PaginatedDataResponse<T>;
}

export interface Pagination {
  page: number;
  size: number;
  total_data: number;
  total_pages: number;
}

export interface PageProps {
  browserTimingHeader: string;
}

export interface MutationProps<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
> {
  onSuccess?: (
    data: TData,
    variables: TVariables,
    context: TContext | undefined
  ) => Promise<unknown> | unknown;
  onError?: (
    error: TError,
    variables: TVariables,
    context: TContext | undefined
  ) => Promise<unknown> | unknown;
}

export interface QueryPropsList<T> {
  status: boolean;
  message: string;
  data: {
    data: T[];
    current_page: number;
    next_page_url: string;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
  };
}

export interface QueryPropsSimpleList<T> {
  data: T;
  status: boolean;
  message: string;
}

export interface QueryPropsSimpleArrayList<T> {
  data: T[];
  status: boolean;
  message: string;
}

export interface QueryPropsSimpleWithMetaList<T> {
  data: T[];
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
}

export interface QueryPropsDetail<T> {
  status: boolean;
  message: string;
  data: T;
}

export interface FormError {
  error: boolean;
  message: string;
}

export interface PaginationParams {
  orderby?: string;
  sortby?: string;
  page?: number;
  perPage?: number;
}
