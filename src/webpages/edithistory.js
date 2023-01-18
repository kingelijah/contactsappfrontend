import axios from "axios";
import React, { useEffect, useState } from "react";
import {useParams,Link} from 'react-router-dom'
import { URL_ADDRESS } from './urlconstant';


function Edithistory() {
    const { id } = useParams();
    const [history, sethistory] = useState(null);
    const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${URL_ADDRESS}/GetEditHistory/${id}`)
      .then((response) => {
        sethistory(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error?.message}`;
  if (!history) return "No Edit History for contact!";

  return (
    <div>
    <h2>Edit History</h2>
            <ul>
                {history.map(hist => (
                <li key={hist.id}>
                    <h3> {hist.modifiedDate}</h3>
                </li>
                ))}
            </ul>
            <Link to={`/`}><b>Home</b></Link>

</div>
  );
}

export default Edithistory;