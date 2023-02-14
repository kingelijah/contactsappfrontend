import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getRequest } from './axiosclient';
import { deleteRequest } from './axiosclient';


function Home() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
   fetchUsers();
  },[deleteUsers]);

  
  async function fetchUsers() {
    try {
      const data = await getRequest("");
      setPost(data?.data);
    } catch(error) {
      setError(error);
      }
    }
    async function deleteUsers(id) {
      try {
        await deleteRequest(id);
      } catch(error) {
        setError(error);
        }
      }

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
                    <button onClick={() => deleteUsers(contact.id)} type="submit">Delete</button>
                </li>
                ))}
            </ul>
            <Link to={`createcontact/`}><b>Create Contact</b></Link>
    </div>
  );
}

export default Home;