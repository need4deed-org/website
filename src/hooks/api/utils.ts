/**
 * Asynchronously fetches data from a specified URL, optionally applying transformations.
 *
 * @template R The type of the raw response data (defaults to `any`).
 * @template D The type of the transformed data (defaults to `R`).
 *
 * @param {object} params - An object containing the fetch parameters.
 * @param {string} params.url - The URL to fetch data from.
 * @param {RequestInit} [params.options] - Optional fetch API options to customize the request.
 * @param {(data: R) => D} [params.fnDTO] - An optional function to transform the raw response data.
 * If provided, this function will be applied to the JSON-parsed
 * response before resolving the Promise.
 *
 * @returns {Promise<D>} A Promise that resolves to the fetched and potentially transformed data.
 * If `fnDTO` is not provided, the Promise resolves to the raw JSON-parsed data.
 */
export function fetchFn<R, D = R>({
  url,
  options,
  fnDTO,
}: {
  url: string;
  options?: RequestInit;
  fnDTO?: (data: R) => D;
}): Promise<D> {
  const defaultOptions: RequestInit = {
    headers: { "Content-Type": "application/json" },
  };

  return fetch(url, { ...defaultOptions, ...options })
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error(response.statusText);
    })
    .then((data) => {
      return fnDTO ? fnDTO(data) : data;
    });
}

/**
 * Converts the keys of an object from snake_case to camelCase.
 * Handles nested objects and arrays recursively.
 *
 * @param snakeCaseObject The object with keys in snake_case.
 * @returns A new object with keys converted to camelCase.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function snakeToCamelCase(snakeCaseObject: any): any {
  if (snakeCaseObject === null || typeof snakeCaseObject !== "object") {
    return snakeCaseObject;
  }

  // Handle arrays
  if (Array.isArray(snakeCaseObject)) {
    return snakeCaseObject.map((item) => snakeToCamelCase(item));
  }

  // Handle objects
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const camelCaseObject: any = {};
  Object.keys(snakeCaseObject).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(snakeCaseObject, key)) {
      let camelCaseKey: string;
      // skip if all caps
      if (key.match(/^[A-Z0-9_]+$/)) {
        camelCaseKey = key;
      } else {
        // Convert snake_case key to camelCase
        const parts = key.split("_");
        camelCaseKey =
          parts[0] +
          parts
            .slice(1)
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join("");
      }

      // Recursively convert nested values
      camelCaseObject[camelCaseKey] = snakeToCamelCase(snakeCaseObject[key]);
    }
  });
  return camelCaseObject;
}
