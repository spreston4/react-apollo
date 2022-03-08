import React, { useState, useEffect } from "react";
import { useMutation, useQuery, defaultDataIdFromObject } from "@apollo/client";
import styles from "./ShortenLink.module.css";
import Button from "../UI/Button/Button";
import TextInput from "../UI/TextInput/TextInput";
import LinkDisplay from "../LinkDisplay/LinkDisplay";
import { CREATE_LINK } from "../../GraphQL/mutations";
import { GET_ALL_LINKS } from "../../GraphQL/queries";

const initialState = {
  link: "",
  slug: ""
};

const ShortenLink = () => {
  const [linkValue, setLinkValue] = useState(initialState.link);
  const [slugValue, setSlugValue] = useState(initialState.slug);
  const [createLink, { data, loading, error }] = useMutation(CREATE_LINK);

  const linkChangeHandler = (event) => {
    setLinkValue(event.target.value);
  };

  const slugChangeHandler = (event) => {
    setSlugValue(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    createLink({
      variables: {
        url: linkValue,
        slug: slugValue
      }
    });

    setLinkValue(initialState.link);
    setSlugValue(initialState.slug);
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
        <form className={styles.container} onSubmit={submitFormHandler}>
          <TextInput
            onChange={linkChangeHandler}
            value={linkValue}
            placeholder="Make your links shorter"
          />
          <TextInput
            onChange={slugChangeHandler}
            value={slugValue}
            placeholder="Custom slug"
          />
          <Button type="submit">Shorten URL</Button>{" "}
        </form>
      </div>
      <LinkDisplay linkUpdate={linkValue} />
    </React.Fragment>
  );
};

export default ShortenLink;
