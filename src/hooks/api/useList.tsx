import { useEffect, useState } from "react";
import {
  Activity,
  District,
  Language,
  Lead,
  Skill,
  VolunteerDataKeysArrays,
} from "../../components/BecomeVolunteer/dataStructure";

export default function useList<T>(listType: VolunteerDataKeysArrays) {
  const [list, setList] = useState<T[]>([]);

  useEffect(() => {
    switch (listType) {
      case VolunteerDataKeysArrays.ACTIVITIES:
        setList(Object.values(Activity) as T[]);
        break;
      case VolunteerDataKeysArrays.LANGUAGESFLUENT:
      case VolunteerDataKeysArrays.LANGUAGESINTERMEDIATE:
        setList(Object.values(Language) as T[]);
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
  }, [listType]);

  return list;
}
