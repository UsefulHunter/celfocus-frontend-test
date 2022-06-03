import { useEffect, useState } from "react";
import IphoneNumbers from "./interface";
import axios from "axios";
import { useParams } from "react-router-dom";

const Companies: () => JSX.Element = () => {
  const [phone_numbers, setPhoneNumbers] = useState<IphoneNumbers[]>([]);
  const back = () => {
    window.history.back();
  };
  useEffect(() => {
    axios.get("http://localhost:3000/phone_numbers").then((res) => {
      setPhoneNumbers(res.data);
    });
  }, []);

  const { id } = useParams();

  const filteredNumbers = phone_numbers.filter(
    (number) => number.company_id === Number(id)
  );
  return (
    <section>
      <button onClick={() => back()}>Go Back</button>
      <h2>Local Public Office</h2>
      <table>
        <thead>
          <tr>
            <td>Number</td>
            <td>Type</td>
          </tr>
        </thead>
        <tbody>
          {filteredNumbers.map((number) => {
            return (
              <tr key={number.id}>
                <td>
                  <a href={`/numbers/${number.id}`}>{number.id}</a>
                </td>
                <td>{number.type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Companies;
