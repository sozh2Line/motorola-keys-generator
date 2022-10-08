import KeyValueRow from "../KeyValueRow";
import styles from "./styles.module.scss";

export default function KeyValueList({ alias, list }) {
  return (
    <div className={styles.row}>
      {list.map(({ id, keyId, value }) => (
        <KeyValueRow
          keyId={keyId}
          alias={alias}
          id={id + 1}
          key={id}
          value={value}
        />
      ))}
    </div>
  );
}
