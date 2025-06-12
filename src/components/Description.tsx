import styles from "./Description.module.scss";

type DescriptionType = {
  text: React.ReactNode; // or JSX.Element if you want to be stricter
};

export const Description = ({ text }: DescriptionType) => {
  return (
    <>
      <div className={styles.border}>
        <strong>Description</strong>
        <div className={styles.description}>{text}</div>
      </div>
    </>
  );
};
