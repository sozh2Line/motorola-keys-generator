import { toast } from "react-toastify";
import copy from "copy-to-clipboard";
import style from "./styles.module.scss";

export default function KeyValueRow({ alias, keyId, id, value }) {
  const handleCopy = () => {
    copy(value);
    const copyText = keyId ? `Key ID ${keyId}` : `${alias} ${id}`;
    toast(`Copied ${copyText}`);
  };

  return (
    <div className={style.row}>
      {keyId ? (
        <div className={style.key}>Key ID {keyId}:</div>
      ) : (
        <div className={style.key}>
          {alias} {id}:
        </div>
      )}

      <button onClick={handleCopy} className={style.value}>
        {value}
      </button>
    </div>
  );
}
