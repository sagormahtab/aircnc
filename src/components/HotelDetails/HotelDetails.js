import React, { useState, useEffect } from 'react';
import './HotelDetails.scss';
import { useParams, Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import BookHotel from '../BookHotel/BookHotel'

const HotelDetails = () => {
    const {id} = useParams();
    const [hotel, setHotel] = useState(null);

    useEffect(()=>{
        fetch('https://mighty-lake-25522.herokuapp.com/houses/'+id)
        .then(res => res.json())
        .then(data => setHotel(data))
    }, [id]);
    
    return (
        hotel && 
        <div>
            <MDBContainer>
                <div className="d-flex mb-4">
                    <div style={{widht: '50%', height: '50vh', overflow: 'hidden'}} className="d-flex align-items-center"><img src={hotel.images.img1} alt="" className="img-fluid"/></div>
                    <div style={{widht: '50%', height: '50vh', overflow: 'hidden'}} className="d-flex align-items-center"><img src={hotel.images.img2} alt="" className="img-fluid"/></div>
                </div>
                <MDBRow>
                    <MDBCol md="7">
                        <MDBRow className="align-items-center">
                            <MDBCol md="9">
                                <h3><strong>{hotel.name}</strong></h3>
                            </MDBCol>
                            <MDBCol md="3" className="d-flex flex-column align-items-center">
                                <img src={hotel.owner.img} className="img-fluid rounded-circle" alt=""/>
                                <p>{hotel.owner.name}</p>
                            </MDBCol>
                        </MDBRow>
                        <div className="text-muted">
                            <p>{hotel.location}</p>
                            <p>4 guests 2 bedrooms 2 beds 2 baths</p>
                            <hr/>
                            <div className="d-flex">
                                <div>
                                    <MDBIcon icon="home" className="mr-3" />
                                </div>
                                <div>
                                    <span className="d-block">{hotel.features[0]}</span>
                                    <p>You'll have the condominium to yourself.</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <MDBIcon icon="check-square" className="mr-3" />
                                </div>
                                <div>
                                    <span className="d-block">{hotel.features[1]}</span>
                                    <p>You can check in with the doorman.</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <MDBIcon icon="spray-can" className="mr-3" />
                                </div>
                                <div>
                                    <span className="d-block">{hotel.features[2]}</span>
                                    <p>10 recent guests said this place was sparkling clean</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <MDBIcon icon="user" className="mr-3" />
                                </div>
                                <div>
                                    <span className="d-block">{hotel.features[3]}</span>
                                    <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests</p>
                                </div>
                            </div>
                            <hr/>

                            <p>{hotel.description}</p>
                        </div>
                        <Link to="/searchresult"><span>Read more about the space </span><MDBIcon icon="angle-down" size="2x" style={{position: "relative", top: "0.4rem", left: "0.5rem"}} /></Link>
                        <div className="my-4">
                            <strong className="d-block">Reviews</strong>
                            <MDBIcon icon="star" className="p-color mr-1"/>
                            <strong>{hotel.reviews}</strong>
                        </div>
                    </MDBCol>
                    <MDBCol md="5">
                        <BookHotel price={hotel.price} review={hotel.reviews}/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default HotelDetails;