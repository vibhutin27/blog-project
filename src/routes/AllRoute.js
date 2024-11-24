import React from 'react'
import { CreatePost, Home, PageNotFound} from '../pages/index';
import {Routes, Route} from 'react-router-dom'
import ProtactedRoute from './ProtactedRoute';

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="addblog" element={ <ProtactedRoute><CreatePost /></ProtactedRoute> }></Route>

            
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
        
       
    </div>
  )
}

export default AllRoute