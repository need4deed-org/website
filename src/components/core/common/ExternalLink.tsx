import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  to: string;
}

export function ExternalLink({ to }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    window.open(to, "_blank");
    navigate("/");
  }, [navigate, to]);

  return null;
}

export default {};
