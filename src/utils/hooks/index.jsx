import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function useFetch() {
  const [logementsData, setLogementsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/logements.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const logementsData = await response.json();

      setLogementsData(logementsData);
    }
    fetchData();
  }, []);

  return { logementsData };
}

export function useFetchById() {
  const [dataFicheLogement, setDataFicheLogement] = useState([]);
  const paramUrl = useParams();
  const id = paramUrl.logementId;
  const { logementsData } = useFetch();
  useEffect(() => {
    setDataFicheLogement(logementsData.find((element) => element.id === id));
  }, [logementsData, id]);
  return { dataFicheLogement };
}
