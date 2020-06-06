import React from 'react';
import './WhosComing.scss';
import { MDBRow, MDBCol } from 'mdbreact';
import OrderDetails from '../OrderDetails/OrderDetails';

const WhosComing = () => {
    return (
        <MDBRow>
            <MDBCol md="6">
                <MDBRow className="align-items-center">
                    <MDBCol md="9">
                        <h5 className="mb-4 font-weight-bold">Traveling for work?</h5>
                        <p>Say hello to your host</p>
                        <p className="mb-4">Let Rowdra know a little about yourself and why you're coming.</p>
                    </MDBCol>
                    <MDBCol md="3">
                        <img src="https://i.ibb.co/PgdPytP/owner.jpg" className="img-fluid rounded-circle d-block" alt=""/>
                        <p className="text-center">Rowdra</p>
                    </MDBCol>
                </MDBRow>

                <div class="form-group">
                    <textarea class="form-control" rows="5" placeholder="Hello Rowdra! Can't wait to spent 4 night is your home"></textarea>
                </div>

            </MDBCol>
            
            <MDBCol>
                <OrderDetails />
            </MDBCol>
        </MDBRow>
    );
};

export default WhosComing;