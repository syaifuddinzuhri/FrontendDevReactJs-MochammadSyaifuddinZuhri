import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "@/utils/api/callApi";
import { CategoryParams, CategoryResponse } from "../interfaces/category";
import { QueryPropsSimpleArrayList } from "../interfaces/common";

export const useCategoriesQuery = (params?: CategoryParams, enabled?: boolean) =>
  useQuery<QueryPropsSimpleArrayList<CategoryResponse>, Error>({
    queryKey: ["categories"],
    queryFn: () =>
      axios<QueryPropsSimpleArrayList<CategoryResponse>>({
        method: "get",
        url: `/category`,
        params,
      }),
    enabled,
  });