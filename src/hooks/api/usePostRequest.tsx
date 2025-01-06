import { useState } from "react";

interface Props {
  url: string;
}

export default function usePostRequest<D, R>({ url }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [success, setSuccess] = useState(false);

  async function postRequest(data: D): Promise<{ success: boolean; data?: R }> {
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData: R = await response.json();
        setSuccess(true);
        return { success: true, data: responseData };
      }
      throw new Error(response.statusText);
    } catch (functionError: unknown) {
      if (functionError instanceof Error) {
        setError(functionError);
      } else {
        setError(new Error(String(functionError)));
      }
      return { success: false };
    } finally {
      setLoading(false);
    }
  }

  return { postRequest, loading, error, success };
}
