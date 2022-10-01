import { toast } from "react-toastify";
import copy from "copy-to-clipboard";
import style from "./styles.module.scss";

export default function KeyValueRow({ alias, id, value }) {
  const handleCopy = () => {
    copy(value);
    toast(`Copied ${alias} ${id}`);
  };

  return (
    <div className={style.row}>
      <div className={style.key}>
        {alias} {id}:
      </div>
      <button onClick={handleCopy} className={style.value}>
        {value}
      </button>
    </div>
  );
}
