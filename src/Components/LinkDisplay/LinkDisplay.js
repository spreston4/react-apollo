import { useQuery } from "@apollo/client";
import { GET_ALL_LINKS } from "../../GraphQL/queries";

const LinkDisplay = () => {
  const { loading, error, data } = useQuery(GET_ALL_LINKS);

  return (
    <div>
      {data.getAllLinks.map((link) => (
        <p key={link.id}>
          {link.url} {"=>"} {link.slug}{" "}
        </p>
      ))}
    </div>
  );
};

export default LinkDisplay;
