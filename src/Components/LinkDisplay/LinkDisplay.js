import styles from "./LinkDisplay.module.css";
import { useEffect, useState } from "react";
import { defaultDataIdFromObject, useQuery } from "@apollo/client";
import { GET_ALL_LINKS } from "../../GraphQL/queries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

// This function is very tempermental, if the backend sits untouched for a few minutes it stops responding, then this component stops working.
const LinkDisplay = (props) => {
  const { loading, error, data, refetch } = useQuery(GET_ALL_LINKS, {
    fetchPolicy: "no-cache"
  });
  const [links, setLinks] = useState([]);

  useEffect(() => {
    if (!loading) {
      setLinks(data.getAllLinks);
    }
  }, [data, loading, error]);

  const copySlugHandler = async (event) => {
    navigator.clipboard.writeText(event.target.value);
  };

  if (error) return <p className={styles.error}>Oops, something went wrong!</p>;
  if (loading) return <p>Loading </p>;

  refetch();

  return (
    <div className={styles.container}>
      {links &&
        links.map((link) => (
          <div key={link.id} className={styles.linkDiv}>
            <div className={styles.link}>{link.url}</div>
            <div>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faArrowRightLong}
              />
            </div>
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
