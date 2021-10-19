import { useEffect, useState } from "react";

const useData = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (data[3]) {
    return data;
  } else {
    return {};
  }
};

export default useData;
