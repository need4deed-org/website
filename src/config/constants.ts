export const urlApi =
  import.meta.env.VITE_API_URL ?? "http://localhost:8000/api";

export const urlApiVolunteer = urlApi + "/volunteer/";
export const urlApiOpportunity = urlApi + "/opportunity/";
