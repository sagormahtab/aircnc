import React from 'react';
import './Experience.scss';
import { MDBCol, MDBIcon } from 'mdbreact';

const Experience = (props) => {
    const {img, imgTag, title, price, ratings} = props.exp;
    return (
        <MDBCol md={3}>
            <img src={img} className="img-fluid" alt=""/>
            <small className="d-block font-weight-bold my-2" style={{color: '#002B37', fontSize: '0.6rem'}}>{imgTag}</small>
            <strong className="d-block">{title}</strong>
            <small className="text-muted">${price} per person</small>
            <small className="d-block">
                <MDBIcon icon="star" className="p-color" />
                <MDBIcon icon="star" className="p-color" />
                <MDBIcon icon="star" className="p-color" />
                <MDBIcon icon="star" className="p-color" />
                <MDBIcon icon="star" className="p-color mr-2" />
                {ratings}
            </small>
        </MDBCol>
    );
};

export default Experience;