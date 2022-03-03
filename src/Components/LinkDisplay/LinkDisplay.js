import styles from "./LinkDisplay.module.css";
import { useQuery } from "@apollo/client";
import { GET_ALL_LINKS } from "../../GraphQL/queries";

// This function is very tempermental, If the backend sits untouched for a few minutes it stops responding, then this component stops working.
const LinkDisplay = () => {
  const { loading, error, data } = useQuery(GET_ALL_LINKS);

  // console.log(data);
  // console.log(data.getAllLinks);

  return (
    <div className={styles.container}>
      {data.getAllLinks.map((link) => (
        <p key={link.id}>
          {link.url} {"   =>   "} {link.slug}
        </p>
      ))}
    </div>
  );
};

export default LinkDisplay;
