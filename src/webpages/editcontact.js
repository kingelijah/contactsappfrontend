import React, { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';
import  { useNavigate } from 'react-router-dom'


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
    axios
      .get(`https://localhost:44337/api/Contact/${id}`)
      .then((response) => {
        setState(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .put(`https://localhost:44337/api/contact`,state)
      .then((res) => {
        console.log(res.data);
        navigate("/", { replace: true });
      });
  };
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