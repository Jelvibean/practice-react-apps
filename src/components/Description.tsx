import { JSX } from "react";
import styles from "./Description.module.scss";

type DescriptionType = {
  callback: (
    pageDescription: JSX.Element,
    pageLink?: JSX.Element
  ) => JSX.Element;
  PageDetails: {
    pageDescription: JSX.Element;
    pageLink?: JSX.Element;
  };
};

export const Description = ({
  callback,
  PageDetails: { pageDescription, pageLink },
}: DescriptionType) => {
  return (
    <>
      <div className={styles.border}>
        <strong>Description</strong>
        <div className={styles.description}>
          {callback(pageDescription, pageLink)}
        </div>
      </div>
    </>
  );
};
