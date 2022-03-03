import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import styles from "./ShortenLink.module.css";
import Button from "../UI/Button/Button";
import TextInput from "../UI/TextInput/TextInput";
import { CREATE_LINK } from "../../GraphQL/mutations";

const ShortenLink = () => {
  const [linkValue, setLinkValue] = useState("");
  const [slugValue, setSlugValue] = useState("");
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

    setLinkValue("");
    setSlugValue("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitFormHandler}>
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
  );
};

export default ShortenLink;
