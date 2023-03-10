import React, { useState } from "react";
import  { useNavigate } from 'react-router-dom'
import { postRequest } from './axiosclient';

function Createcontact() {

    const navigate = useNavigate();
    const [firstname, setfirstname] = useState();
    const [lastname, setlastname] = useState();
    const [phonenumber, setphonenumber] = useState();
    const [email, setemail] = useState();
    const [error, setError] = useState(null);

  const submitForm = (e) => {
    e.preventDefault();
    createuser();
  };

  async function createuser() {
    try {
     await postRequest("", { firstname,lastname,phonenumber,email });
      navigate("/", { replace: true });
    } catch(error) {
      setError(error);
      }
    }

  if (error) return `Error: ${error?.response.data}`;

  return (
    <div>
      <h2>Add Contact</h2>
      <div>
        <form onSubmit={submitForm}>
          <label>
            First Name:
            <input type="text" name="firstname" onChange={(e) => setfirstname(e.target.value)} required placeholder="Your first name.."/>
            </label>
          <label>
            Last Name:
            <input type="text" name="lastname" onChange={(e) => setlastname(e.target.value)} required placeholder="Your last name.."/>
          </label>
          <label>
            Email:
            <input type="Email" name="email" onChange={(e) => setemail(e.target.value)} required placeholder="Your email.."/>
          </label>
          <label>
           Phone Number:
            <input type="text" name="phonenumber" onChange={(e) => setphonenumber(e.target.value)} required placeholder="Your phone number.."/>
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}

export default Createcontact;