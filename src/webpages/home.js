import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { URL_ADDRESS } from './urlconstant';


function Home() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(URL_ADDRESS).then((data) => {
      setPost(data?.data);
    }).catch((error) => {
      setError(error);
    });;
  },[handleRemove]);

  function handleRemove(id) {
    axios
      .delete(`${URL_ADDRESS}/${id}`)
      .then((response) => {
      }).catch((error) => {
        setError(error);
      });;
  };

  if (error) return `Error: ${error?.message}`;
  if (!post) return "No Contacts found!";

  return (
    <div>
      <h2>Contacts</h2>
      <ul>
                {post.map(contact => (
                <li key={contact.id}>
                    <h3> {contact.firstName} {contact.lastName}</h3>
                    <Link to={`contact/${contact.id}`}>Details/</Link>
                    <Link to={`editcontact/${contact.id}`}>Edit/ </Link>
                    <Link to={`edithistory/${contact.id}`}>History/ </Link>
                    <button onClick={() => handleRemove(contact.id)} type="submit">Delete</button>
                </li>
                ))}
            </ul>
            <Link to={`createcontact/`}><b>Create Contact</b></Link>
    </div>
  );
}

export default Home;