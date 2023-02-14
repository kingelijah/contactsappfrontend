import React, { useEffect, useState } from "react";
import {useParams,Link} from 'react-router-dom'
import { getRequest } from './axiosclient';


function Edithistory() {
    const { id } = useParams();
    const [history, sethistory] = useState(null);
    const [error, setError] = useState(null);

  useEffect(() => {
    fetchHistory();
  }, []);

  async function fetchHistory() {
    try {
      const userhistory = await getRequest(`GetEditHistory/${id}`);
      sethistory(userhistory.data);
    } catch(error) {
      setError(error);
      }
    }

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