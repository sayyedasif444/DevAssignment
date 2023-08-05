import React, { useEffect, useState } from 'react';
import './style.css';
import { Card } from 'react-bootstrap';
import axios from 'axios';

const Index = () => {
  const [dataList, setdataList] = useState([]);
  useEffect(() => {
    console.log('executing');
    axios({
      method: 'GET',
      url: 'http://localhost:5000/movies',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        setdataList(response.data.data);
      })
      .catch((err) => {
        if (err.hasOwnProperty('response')) {
          alert(err.response.data.message);
        }
      });
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 mt-5 mb-5 '>
          <h2 className='text-left mb-3'>Movies List</h2>
          <div className='row'>
            {dataList.map((ele) => (
              <div className='col-lg-3 p-2'>
                <Card className='text-center'>
                  <div className='imgHeight'>
                    <img src='/logo192.png' alt='' />
                  </div>
                  <h6 className='text-center mb-0 pb-0'>{ele.name}</h6>
                  <p className='mt-0 text-black-50 mb-0'>
                    <small>Rating: {ele.rating}/10</small>
                  </p>
                  <p className='text-black-50 fontSmall'>
                    Release Date: {ele.release}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
