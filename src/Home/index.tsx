import axios from "axios";
import { useEffect, useState } from "react";
import ICompanies from "./interface";
const App: () => JSX.Element = () => {
  const [companies, setCompanies] = useState<ICompanies[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/companies").then((res) => {
      setCompanies(res.data);
    });
  }, []);

  return (
    <section>
      <h1>Companies</h1>
      <table>
        <thead>
          <tr>
            <td>Company name</td>
            <td>vatin</td>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => {
            return (
              <tr key={company.vatin}>
                <td>
                  <a href={`/companies/${company.id}`}>{company.name}</a>
                </td>
                <td>{company.vatin}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default App;
