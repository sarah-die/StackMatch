import { useParams } from "react-router-dom";
import { MatchResultContent } from "../components/MatchResultContent";

export const ConnectionMatchPage = () => {
  const { id } = useParams<{ id: string }>();

  return <MatchResultContent id={id} />;
};
