export function fetchFn<R, D = R>({
  url,
  options,
  fnDTO,
}: {
  url: string;
  options?: RequestInit;
  fnDTO?: (data: R) => D;
}): Promise<D> {
  return fetch(url, options)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error(response.statusText);
    })
    .then(data => {
      return fnDTO ? fnDTO(data) : data;
    });
}
