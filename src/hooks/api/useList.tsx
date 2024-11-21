import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fallbackLists } from "../../components/BecomeVolunteer/dataStructure";
import { urlApiVolunteer } from "../../config/constants";
import {
  HttpMethod,
  ListsOfOptions,
  ListsOfOptionsType,
} from "../../config/types";
import { fetchFn } from "./utils";

const FF_USE_OPTIONS_LISTS = false;

export default function useList(listType: ListsOfOptions) {
  const [list, setList] = useState<string[]>([]);
  const [listsOptions] = useListQuery();

  useEffect(() => {
    const list = listsOptions
      ? (listsOptions as ListsOfOptionsType)[listType]
      : [];

    setList(list?.length ? list : fallbackLists[listType]);
  }, [listType, listsOptions]);

  return list;
}

export function useListQuery() {
  const { data } = useQuery<
    ListsOfOptionsType,
    Error,
    ListsOfOptionsType,
    string[]
  >({
    queryKey: ["lists"],
    queryFn: () => {
      return FF_USE_OPTIONS_LISTS
        ? fetchFn<{ lists: ListsOfOptionsType }, ListsOfOptionsType>({
            url: urlApiVolunteer,
            options: {
              method: HttpMethod.OPTIONS,
            },
            fnDTO: data => data.lists,
          })
        : fallbackLists;
    },
    staleTime: Infinity,
  });
  return [data];
}
