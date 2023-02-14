import React, { useEffect, useState } from "react";
import {useParams,Link} from 'react-router-dom'
import { getRequest } from './axiosclient';

function Contact() {
    const { id } = useParams();
    const [contact, setContact] = useState(null);
    const [error, setError] = useState(null);
    
  useEffect(() => {

      fetchUser();     
  }, []);

  async function fetchUser() {
    try {
      const user = await getRequest(id);
      setContact(user.data);
    } catch(error) {
      setError(error);
      }
    }

  if (error) return `Error: ${error?.message}`;
  if (!contact) return "No contact found!";

  return (
    <div>
    <div>
      <b>First Name: {contact.firstName}</b>  
    </div>
    <div>
        <b>Last Name: {contact.lastName}</b>
    </div>
    <div>
       <b>Phone: {contact.phoneNumber}</b> 
    </div>
    <div>
       <b>Email: {contact.email}</b> 
    </div>
    <Link to={`/`}><b>Home</b></Link>
</div>
  );
}

export default Contact;