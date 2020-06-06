import React from 'react';
import './LandingPage.scss';
import SearchTab from '../SearchTab/SearchTab';
import Experience from '../Experience/Experience';
import Home from '../Home/Home';
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import homes from '../../data/homes';
import experiences from '../../data/experiences';

const LandingPage = () => {
    
    return (
        <div>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="4">
                        <SearchTab />
                    </MDBCol>
                    <MDBCol md="8">
                        <div className="d-flex justify-content-between mb-1" style={{marginTop: '6rem'}}>
                            <h4 className="font-weight-bold">Experiences</h4>
                            <span>See all 
                            <MDBIcon icon="angle-right" className="ml-1" />
                            </span>
                        </div>
                        <MDBRow>
                        {
                            experiences.map(exp => <Experience key={exp.id} exp={exp}/>)
                        }
                        </MDBRow>
                        <div className="d-flex justify-content-between mb-1" style={{marginTop: '3rem'}}>
                            <h4 className="font-weight-bold">Homes</h4>
                            <span>See all 
                            <MDBIcon icon="angle-right" className="ml-1" />
                            </span>
                        </div>
                        <MDBRow>
                        {
                            homes.map(hm => <Home key={hm.id} home={hm}/>)
                        }
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default LandingPage;