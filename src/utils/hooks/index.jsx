import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function useFetch() {
  const [tousLogementsData, setTousLogementsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/logements.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const tousLogementsData = await response.json();

      setTousLogementsData(tousLogementsData);
    }
    fetchData();
  }, []);

  return { tousLogementsData };
}

export function useFetchById() {
  const [dataLogement, setDataLogement] = useState([]);
  const navigate = useNavigate();
  const paramUrl = useParams();
  const id = paramUrl.logementId;
  useEffect(() => {
    async function fetchDataById(id) {
      const response = await fetch("/logements.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const tousLogements = await response.json();
      const dataCorrespondante = tousLogements.find(
        (element) => element.id === id
      );
      dataCorrespondante
        ? setDataLogement(dataCorrespondante)
        : navigate("/erreurid");
    }
    fetchDataById(id);
  }, [id]);
  return { dataLogement };
}
