import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Service from './Service';

const SingelService = () => {
    const { ServiceId } = useParams();
    const [Details , setDetails] = useState([]);
    useEffect(() => {
        fetch('/Service.json')
            .then(res => res.json())
            .then(data => setDetails(data[0]))
    }, []);
    
    return (
        <div className='mt-5 pt-5 container'>
            
            <h1>{Details.name}</h1>
            <img src={Details.img} alt="" />
            <p>{Details.details}</p>
            </div>
             
    
    );
};

export default SingelService;