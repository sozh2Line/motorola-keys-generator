import KeyValueList from "../KeyValueList";
import styles from "./styles.module.scss";

export default function KeyValueBlock({ alias, title, list }) {
  return (
    <div className={styles.wrap}>
      <h2>{title}: </h2>
      <KeyValueList alias={alias} list={list} />
    </div>
  );
}
