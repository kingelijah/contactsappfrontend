import React from 'react';
import {Routes,Route,} from "react-router-dom";
import Home from './home';
import Contact from './contact';
import Createcontact from './createcontact';
import Editcontact from './editcontact';
import Edithistory from './edithistory';

const Webpages = () => {
    return(
         <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="contact/:id" element={ <Contact/> } />
            <Route path="createcontact" element={ <Createcontact/> } />
            <Route path="editcontact/:id" element={ <Editcontact/> } />
            <Route path="edithistory/:id" element={ <Edithistory/> } />
            </Routes>
    );
};
export default Webpages;