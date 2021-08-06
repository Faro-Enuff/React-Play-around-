import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const [avatar, setAvatar] = useState("");
  const [url, setUrl] = useState(
    `https://rickandmortyapi.com/api/character?name=`
  );

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw Error("Could not fetch the data for that resource");
      }
      const list = await response.json();
      setData(list.results);
      setNext(list.info.next);
      setPrev(list.info.prev);
      console.log(list.info.next);
      setIsPending(false);
    };
    getData().catch((err) => {
      setIsPending(false);
      setError(err.message);
    });
  }, [url]);
  return { data, isPending, error, next, prev, url, setUrl, setAvatar, avatar };
};

export default useFetch;
