import { useState } from "react";

interface Props {
  url: string;
}

export default function usePostRequest<D, R>({ url }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);

  function postRequest(data: D): Promise<R> {
    setLoading(true);
    setSuccess(false);
    setError(null);
    return fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          setSuccess(true);
          return response.json();
        }
        throw new Error(response.statusText);
      })
      .catch((functionError) => setError(functionError.message))
      .finally(() => {
        setLoading(false);
      });
  }

  return { postRequest, loading, error, success };
}
