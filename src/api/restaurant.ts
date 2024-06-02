import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "@/utils/api/callApi";
import { QueryPropsDetail, QueryPropsList } from "../interfaces/common";
import { RestaurantParams, RestaurantResponse } from "../interfaces/restaurant";

export const useRestaurantQuery = (params?: RestaurantParams, enabled?: boolean) =>
  useQuery<QueryPropsList<RestaurantResponse>, Error>({
    queryKey: ["restaurants"],
    queryFn: () =>
      axios<QueryPropsList<RestaurantResponse>>({
        method: "get",
        url: `/restaurant`,
        params,
      }),
    enabled,
  });

export const useRestaurantDetailQuery = (id: string, enabled?: boolean) =>
  useQuery<QueryPropsDetail<RestaurantResponse>, Error>({
    queryKey: [`restaurant-detail-${id}`],
    queryFn: () =>
      axios<QueryPropsDetail<RestaurantResponse>>({
        method: "get",
        url: `/restaurant/${id}`,
      }),
    enabled,
  });
