import { useQuery } from "@apollo/client";
import { GET_ALL_LINKS } from "../../GraphQL/queries";

const LinkDisplay = () => {
  const { loading, error, data } = useQuery(GET_ALL_LINKS);

  // console.log(data.getAllLinks);

  return (
    <div>
      <p>Link Display </p>
    </div>
  );
};

export default LinkDisplay;
