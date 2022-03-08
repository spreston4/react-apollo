import styles from "./LinkDisplay.module.css";
import { useEffect, useState } from "react";
import { defaultDataIdFromObject, useQuery } from "@apollo/client";
import { GET_ALL_LINKS } from "../../GraphQL/queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

// This function is very tempermental, if the backend sits untouched for a few minutes it stops responding, then this component stops working.
const LinkDisplay = () => {
  const { loading, error, data } = useQuery(GET_ALL_LINKS);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (!loading) {
      setLinks(data.getAllLinks);
    }
  }, [data]);

  const copySlugHandler = async (event) => {
    console.log(event.target);
    console.log(event.target.value);
    navigator.clipboard.writeText(event.target.value);
  };

  if (error) return <p>Error loading links</p>;
  if (loading) return <p>Loading </p>;

  return (
    <div className={styles.container}>
      {links &&
        links.map((link) => (
          <div key={link.id} className={styles.linkDiv}>
            <div className={styles.link}>{link.url}</div>
            <div>{">>>"}</div>
            <div className={styles.slug}>{link.slug}</div>
            <div className={styles.controls}>
              <button
                className={styles.copyButton}
                onClick={copySlugHandler}
                value={link.slug}
              >
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faArrowUpRightFromSquare}
                />
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default LinkDisplay;
