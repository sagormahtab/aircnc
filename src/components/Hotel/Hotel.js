import React from 'react';
import './Hotel.scss';
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';

const Hotel = (props) => {
  const {id, name, images, guests, bedrooms, baths, shortDescription, flexibility, ratings, price} = props.hotel;
  return (
    <div>
      <MDBRow className="align-items-center">
        <MDBCol md={4}>
          <Link className="black-Link" to={"/hotel/"+id}><img className="hotel-img img-fluid rounded" src={images.img1} alt=""/></Link>
        </MDBCol>
        <MDBCol md={8}>
        <Link className="black-Link" to={"/hotel/"+id}><strong>{name}</strong></Link>
          <span className="text-muted d-block">{guests} guests {bedrooms} bedrooms 2 beds {baths} baths</span>
          <p className="text-muted">{shortDescription}</p>
          <p className="text-muted">{flexibility}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <MDBIcon icon="star" className="p-color mr-1"/>
              <strong>{ratings}</strong>
            </div>
            <div>
              <span className="d-block"><strong>${price}/</strong> night</span>
              <small className="text-muted">$167 total</small>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
      <hr className={`gray-brd ${id === 3 ? "d-none" : "d-block"}`}/>
    </div>
  );
};

export default Hotel;