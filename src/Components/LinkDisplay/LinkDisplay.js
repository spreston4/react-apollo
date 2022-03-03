import { useQuery } from "@apollo/client";
import { GET_ALL_LINKS } from "../../GraphQL/queries";

// This stopped working halfway through. Not sure why.
const LinkDisplay = () => {
  const { loading, error, data } = useQuery(GET_ALL_LINKS);

  console.log(data);

  return (
    <div>
      <p>Link Display </p>
      {/* {data.getAllLinks.map((link) => (
        <p key={link.id}>
          {link.url} {"=>"} {link.slug}
        </p>
      ))} */}
    </div>
  );
};

export default LinkDisplay;
