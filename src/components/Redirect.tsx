import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  path: string;
}

function Redirect({ path }: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(path);
  }, [path, navigate]);
  return null;
}

export default Redirect;
