import styles from "./LinkDisplay.module.css";
import { useEffect, useState } from "react";
import { defaultDataIdFromObject, useQuery } from "@apollo/client";
import { GET_ALL_LINKS } from "../../GraphQL/queries";

// This function is very tempermental, if the backend sits untouched for a few minutes it stops responding, then this component stops working.
const LinkDisplay = () => {
  const { loading, error, data } = useQuery(GET_ALL_LINKS);
  const [links, setLinks] = useState([]);

  // Not sure why, but accessing the 'getAllLinks' object returned with data works for about 5 minutes at a time, then starts throwing errors when unrelated parts of code are touched.
  useEffect(() => {
    if (!loading) {
      setLinks(data.getAllLinks);
    }
  }, [data]);

  if (error) return <p>Error loading links</p>;
  if (loading) return <p>Loading </p>;

  return (
    <div className={styles.container}>
      {links.map((link) => (
        <div key={link.id} className={styles.linkDiv}>
          {link.url} {"   >>>   "} {link.slug}
        </div>
      ))}
    </div>
  );
};

export default LinkDisplay;
