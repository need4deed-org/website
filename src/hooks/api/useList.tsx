import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import fallbackLists from "../../components/forms/fallbackLists";
import {
  ListsOfOptions,
  ListsOfOptionsType,
  Option,
} from "../../components/forms/types";
import { urlApiVolunteer } from "../../config/constants";
import { HttpMethod } from "../../config/types";
import { fetchFn } from "./utils";

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
        : ([] as unknown as ListsOfOptionsType);
    },
    staleTime: Infinity,
  });
  return [listData];
}

export default function useList(listType: ListsOfOptions) {
  const [list, setList] = useState<Option[]>([]);
  const [listsOptions] = useListQuery();

  useEffect(() => {
    const listTmp = listsOptions
      ? (listsOptions as ListsOfOptionsType)[listType]
      : [];

    setList(listTmp?.length ? listTmp : fallbackLists[listType]);
  }, [listType, listsOptions]);

  return list;
}
