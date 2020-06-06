import React from 'react';
import './ReviewHouse.scss';
import { MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';
import OrderDetails from '../OrderDetails/OrderDetails';

const ReviewHouse = () => {
    return (
        <div>
            <MDBRow>
                <MDBCol md="6">
            
                    <h2><strong>Review house rules</strong></h2>
                    <h5 className="mb-4"><strong>3 nights in Dhaka</strong></h5>

                    <MDBRow>

                        <MDBCol md="6" className="d-flex align-items-center">
                            <div className="d-flex flex-column mr-3 mini-cal font-weight-bold">
                                <small className="d-block"><strong>Apr</strong></small>
                                <small className="d-block"><strong>13</strong></small>
                            </div>
                            <div className="text-muted">
                                <span className="d-block">Monday check-in</span>
                                <span className="d-block">After 12:00 PM</span>
                            </div>
                        </MDBCol>

                        <MDBCol md="6" className="d-flex align-items-center">
                            <div className="d-flex flex-column mr-3 mini-cal font-weight-bold">
                                <small className="d-block"><strong>Apr</strong></small>
                                <small className="d-block"><strong>13</strong></small>
                            </div>
                            <div className="text-muted">
                                <span className="d-block">Monday check-in</span>
                                <span className="d-block">After 12:00 PM</span>
                            </div>
                        </MDBCol>

                    </MDBRow>

                    <p className="text-muted mt-4">Self check-in with building stuff</p>
                    <hr style={{border: '1px solid lightgray'}}/>

                    <h5 className="my-4"><strong>Things to keep in mind</strong></h5>
                    <p><MDBIcon icon="baby-carriage" className="mr-3 ico-border" />Suitable for children and infants</p>
                    <p><MDBIcon icon="paw" className="mr-3 ico-border" />Pets allowed</p>
                    <p><MDBIcon icon="ban" className="mr-3 ico-border" />No parties or events</p>
                    <p className="mb-0"><MDBIcon icon="smoking" className="mr-3 ico-border" />Smoking allowed</p>
                    <Link to="/review"  className="d-block mb-5"><span>Read more </span><MDBIcon icon="angle-down" size="2x" style={{position: "relative", top: "0.4rem", left: "0.5rem"}} /></Link>
                </MDBCol>

                <MDBCol md="6">
                    <OrderDetails />
                </MDBCol>
            </MDBRow>
        </div>
    );
};

export default ReviewHouse;