import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { fallbackLists } from "../../components/BecomeVolunteer/dataStructure";
import { urlApiVolunteer } from "../../config/constants";
import {
  HttpMethod,
  ListsOfOptions,
  ListsOfOptionsType,
} from "../../config/types";
import fetchFn from "./utils";

const FF_USE_OPTIONS_LISTS = false;

export function useListQuery() {
  const { data: listData } = useQuery<
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
            fnDTO: ({ lists }: { lists: ListsOfOptionsType }) => lists,
          })
        : fallbackLists;
    },
    staleTime: Infinity,
  });
  return [listData];
}

export default function useList(listType: ListsOfOptions) {
  const [list, setList] = useState<string[]>([]);
  const [listsOptions] = useListQuery();

  useEffect(() => {
    const listTmp = listsOptions
      ? (listsOptions as ListsOfOptionsType)[listType]
      : [];

    setList(listTmp?.length ? listTmp : fallbackLists[listType]);
  }, [listType, listsOptions]);

  return list;
}
