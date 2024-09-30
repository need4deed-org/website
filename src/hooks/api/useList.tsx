import { useEffect, useState } from "react";
import {
  Activity,
  District,
  Lead,
  Skill,
  VolunteerDataKeysArrays,
} from "../../components/BecomeVolunteer/dataStructure";
import { ListsOptions } from "../../config/types";
import useListsOptions from "./useListsOptions";

export default function useList<T>(listType: VolunteerDataKeysArrays) {
  const [list, setList] = useState<T[]>([]);
  const listsOptions = useListsOptions();

  useEffect(() => {
    async function getList(listType: VolunteerDataKeysArrays) {
      switch (listType) {
        case VolunteerDataKeysArrays.ACTIVITIES:
          setList(Object.values(Activity) as T[]);
          break;
        case VolunteerDataKeysArrays.LANGUAGESFLUENT:
        case VolunteerDataKeysArrays.LANGUAGESINTERMEDIATE:
          setList(listsOptions[ListsOptions.LANGUAGES] as T[]);
          break;
        case VolunteerDataKeysArrays.LOCATIONS:
          setList(Object.values(District) as T[]);
          break;
        case VolunteerDataKeysArrays.SKILLS:
          setList(Object.values(Skill) as T[]);
          break;
        case VolunteerDataKeysArrays.LEADFROM:
          setList(Object.values(Lead) as T[]);
          break;
      }
    }

    getList(listType);
  }, [listType, listsOptions]);

  return list;
}
