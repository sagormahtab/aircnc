import React from 'react';
import './LandingPage.scss';
import SearchTab from '../SearchTab/SearchTab';
import Experience from '../Experience/Experience';
import Home from '../Home/Home';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const LandingPage = () => {
    return (
        <div>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="4">
                        <SearchTab />
                    </MDBCol>
                    <MDBCol md="8">
                        <div className="d-flex justify-content-between" style={{marginTop: '6rem'}}>
                            <h4 className="font-weight-bold">Experiences</h4>
                            <span>See all 
                            <MDBIcon icon="angle-right" className="ml-1" />
                            </span>
                        </div>
                        <Experience />
                        <div className="d-flex justify-content-between" style={{marginTop: '3rem'}}>
                            <h4 className="font-weight-bold">Homes</h4>
                            <span>See all 
                            <MDBIcon icon="angle-right" className="ml-1" />
                            </span>
                        </div>
                        <Home />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default LandingPage;