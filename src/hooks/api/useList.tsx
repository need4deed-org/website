import { useEffect, useState } from "react";
import {
  Activity,
  District,
  Lead,
  Skill,
  VolunteerDataKeysArrays,
} from "../../components/BecomeVolunteer/dataStructure";
import { urlApi } from "../../config/constants";

export default function useList<T>(listType: VolunteerDataKeysArrays) {
  const [list, setList] = useState<T[]>([]);

  async function fetchList(url: string) {
    return fetch(url).then(response => {
      if (response.ok) return response.json();
      throw new Error(response.statusText);
    });
  }

  useEffect(() => {
    async function getList(listType: VolunteerDataKeysArrays) {
      let items: T[];
      switch (listType) {
        case VolunteerDataKeysArrays.ACTIVITIES:
          setList(Object.values(Activity) as T[]);
          break;
        case VolunteerDataKeysArrays.LANGUAGESFLUENT:
        case VolunteerDataKeysArrays.LANGUAGESINTERMEDIATE:
          items = await fetchList(`${urlApi}language/`);
          setList(items);
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
  }, [listType]);

  return list;
}
