import React, { useState } from 'react';
import './SearchTab.scss';
import { MDBInput, MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const SearchTab = () => {
    const today = new Date();
    const thisYear = today.getFullYear();
    let thisMonth = today.getMonth() + 1;
    let thisDate = today.getDate();
    if(thisMonth < 10) {
        thisMonth = "0"+thisMonth;
    }
    if(thisDate < 10) {
        thisDate = "0"+thisDate;
    }

    const [adults, setAdults] = useState(0);
    const decreaseAdults = () => {
        setAdults(adults - 1);
    }
    
    const increaseAdults = () => {
    setAdults(adults + 1);
    }

    const [childs, setChilds] = useState(0);
    const decreaseChilds = () => {
        setChilds(childs - 1);
    }
    
    const increaseChilds = () => {
        setChilds(childs + 1);
    }

    const [babies, setBabies] = useState(0);
    const decreaseBabies = () => {
        setBabies(babies - 1);
    }
    
    const increaseBabies = () => {
        setBabies(babies + 1);
    }
    
    return (
        <div>
            <h5 className="font-weight-bold mt-5 mb-4">Where do you want to go</h5>
            <div className="input-wrapper">
                <h6 className="text-uppercase font-weight-bold">location</h6>
                <MDBInput label="Add city, landmark or address" outline size="sm"/>
            </div>
            <div>
                <MDBRow>
                    <MDBCol md="6" style={{paddingRight: '3px'}}>
                        <div className="input-wrapper">
                            <p className="text-muted">Arrival</p>
                            <input type="date" value={thisYear+"-"+thisMonth+"-"+thisDate}/>
                        </div>
                    </MDBCol>
                    <MDBCol md="6" style={{paddingLeft: '3px'}}>
                        <div className="input-wrapper">
                            <p className="text-muted">Departure</p>
                            <input type="date"/>
                        </div>
                    </MDBCol>
                </MDBRow>
            </div>
            <div>
            <ExpansionPanel defaultExpanded="true" style={{boxShadow: '2px 2px 7px 0px #c7c7c7'}}>
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <div>
                    <small className="text-muted">Guests</small>
                    <p>{adults} adults, {childs} child</p>
                </div>
                
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <div className="childBabyAdult">
                    <MDBRow>
                    <MDBCol md="6">
                        <p className="text-uppercase">adults</p>
                    </MDBCol>
                    <MDBCol md="6">
                        <div className="def-number-input number-input">
                            <button onClick={decreaseAdults} className="minus"></button>
                            <input className="quantity" name="quantity" value={adults} onChange={()=> console.log('change')}
                            type="number" />
                            <button onClick={increaseAdults} className="plus"></button>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="6">
                        <p className="text-uppercase">childs</p>
                        <small className="text-muted">Age 2-12</small>
                    </MDBCol>
                    <MDBCol md="6">
                        <div className="def-number-input number-input">
                            <button onClick={decreaseChilds} className="minus"></button>
                            <input className="quantity" name="quantity" value={childs} onChange={()=> console.log('change')}
                            type="number" />
                            <button onClick={increaseChilds} className="plus"></button>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol md="6">
                        <p className="text-uppercase">babies</p>
                        <small className="text-muted">Younger than 2</small>
                    </MDBCol>
                    <MDBCol md="6">
                        <div className="def-number-input number-input">
                            <button onClick={decreaseBabies} className="minus"></button>
                            <input className="quantity" name="quantity" value={babies} onChange={()=> console.log('change')}
                            type="number" />
                            <button onClick={increaseBabies} className="plus"></button>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBBtn outline color="success" className="rounded-pill float-right">Apply</MDBBtn>
                </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            </div>
            <MDBBtn className="primary-grad" style={{width: '96%', marginTop: '1rem'}}>
                <MDBIcon icon="search" className="mr-1" /> Search
            </MDBBtn>
 
        </div>
    );
};


export default SearchTab;