import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import fallBackListsEN from "../../components/forms/fallbackLists";
import fallBackListsDE from "../../components/forms/fallbackListsDE";
import { urlApiVolunteer } from "../../config/constants";
import {
  HttpMethod,
  Lang,
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
        : ([] as unknown as ListsOfOptionsType);
    },
    staleTime: Infinity,
  });
  return [listData];
}

export function getFallbackLists(lang: Lang) {
  if (lang === Lang.DE) return { ...fallBackListsEN, ...fallBackListsDE };

  return fallBackListsEN;
}

export default function useList(
  listType: ListsOfOptions,
  lang: Lang = Lang.EN,
) {
  const [list, setList] = useState<string[]>([]);
  const [listsOptions] = useListQuery();
  const fallbackLists = getFallbackLists(lang);

  useEffect(() => {
    const listTmp = listsOptions
      ? (listsOptions as ListsOfOptionsType)[listType]
      : [];

    setList(listTmp?.length ? listTmp : fallbackLists[listType]);
  }, [fallbackLists, listType, listsOptions]);

  return list;
}
