import React, { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';
import  { useNavigate } from 'react-router-dom'
import { URL_ADDRESS } from './urlconstant';
import { getRequest } from './axiosclient';


function Editcontact() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [error, setError] = useState(null);
    const [state, setState] = useState({
    Id : id,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;

    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .put(URL_ADDRESS,state)
      .then((res) => {
        navigate("/", { replace: true });
      });
  };

  async function fetchUser() {
    try {
      const user = await getRequest(id);
      setState(user.data);
    } catch(error) {
      setError(error);
      }
    }
   
  if (error) return `Error: ${error?.message}`;
  if (!state) return "No contact found!";

  return (
    <div>
      <h2>Edit Contact</h2>
      <div>
        <form onSubmit={submitForm}>
            <label>
            First Name:
            <input type="text" name="firstName" value={state.firstName} onChange={handleChange} required/>
          </label> 
            <label>
            Last Name:
            <input type="text" name="lastName" value={state.lastName} onChange={handleChange} required/>
          </label>
            <label>
            Email:
            <input type="text" name="email" value={state.email} onChange={handleChange} required/>
          </label>
            <label>
           Phone Number:
            <input type="text" name="phoneNumber" value={state.phoneNumber} onChange={handleChange} required/>
          </label>
            <button type="submit">Edit</button>
        </form>
      </div>
    </div>
  );
}

export default Editcontact;