import { useEffect, useState } from "react";

import { urlApiVolunteer } from "../../config/constants";
import { ListsOptions, ListsOptionsType } from "../../config/types";

function fetchLists() {
  return fetch(urlApiVolunteer, { method: "OPTIONS" })
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(response.statusText);
    })
    .then(data => {
      return data.lists;
    });
}

const initial = (Object.values(ListsOptions) as ListsOptionsType[]).reduce(
  (res: Record<ListsOptionsType, unknown[]>, key) => {
    res[key] = [];
    return res;
  },
  {} as Record<ListsOptionsType, unknown[]>,
);

export default function useListsOptions() {
  const [lists, setLists] = useState(initial);

  useEffect(() => {
    fetchLists().then(data => setLists(data));
  }, []);
  return lists;
}
