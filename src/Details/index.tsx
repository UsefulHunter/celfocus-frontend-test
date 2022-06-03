import { useState, useEffect } from "react";
import IphoneNumbers from "../Companies/interface";
import axios from "axios";
import { useParams } from "react-router-dom";
const Details: () => JSX.Element = () => {
  const [phone_numbers, setPhoneNumbers] = useState<IphoneNumbers>();

  const back = () => {
    window.history.back();
  };

  const { id } = useParams();
  useEffect(() => {
    axios.get("http://localhost:3000/phone_numbers").then((res) => {
      res.data.filter((number: IphoneNumbers) => {
        if (number.id === id) {
          setPhoneNumbers(number);
        }
      });
    });
  }, []);

  return (
    <section>
      <button onClick={() => back()}>Go Back</button>
      <p>{phone_numbers?.id}</p>
      <p>{phone_numbers?.type}</p>
    </section>
  );
};

export default Details;
