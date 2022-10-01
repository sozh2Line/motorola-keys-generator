import { useState, useEffect } from "react";

const useStorageList = (title, data) => {
  const [list, setList] = useState(null);

  useEffect(() => {
    const storageList = JSON.parse(localStorage.getItem(title));

    if (storageList) {
      setList(storageList);
      return;
    }

    localStorage.setItem(title, JSON.stringify(data));
  }, []);

  const updateList = () => {
    setList(data);
    localStorage.setItem(title, JSON.stringify(data));
  };

  return [list, updateList];
};

export default useStorageList;
