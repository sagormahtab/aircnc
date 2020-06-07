import React, { useState } from 'react';
import './SearchTab.scss';
import { MDBRow, MDBCol, MDBBtn, MDBIcon } from "mdbreact";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useForm } from 'react-hook-form';


const SearchTab = () => {
    let history = useHistory();

    const redirect = () =>{
        history.push('/searchResult');
    }

    const [adults, setAdults] = useState(1);
    const [childs, setChilds] = useState(0);
    const [babies, setBabies] = useState(0);

    const cityList = [
        { title: 'Dhaka' }
    ];

    const { register, handleSubmit } = useForm(); // initialise the hook
    const onSubmit = (data) => {
        console.log(data);
        redirect();
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <h5 className="font-weight-bold mt-5 mb-4">Where do you want to go</h5>
            <div className="input-wrapper">
                <h6 className="text-uppercase font-weight-bold">location</h6>
                <Autocomplete
                id="combo-box-demo"
                freeSolo
                    options={cityList}
                    getOptionLabel={(option) => option.title}
                    style={{ width: '100%' }}
                    renderInput={(params) => <TextField required {...params} label="Add city, landmark or address" variant="outlined" />}
                />
            </div>
            <div>
                <MDBRow>
                    <MDBCol md="6" style={{paddingRight: '3px'}}>
                        <div className="input-wrapper">
                            <p className="text-muted">Arrival</p>
                            <input type="date" name="arrDate" ref={register({ required: true })} />
                        </div>
                    </MDBCol>
                    <MDBCol md="6" style={{paddingLeft: '3px'}}>
                        <div className="input-wrapper">
                            <p className="text-muted">Departure</p>
                            <input type="date" name="depDate" ref={register({ required: true })} />
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
                            <button onClick={() => adults > 0 && setAdults(adults - 1)} type="button" className="minus"></button>
                            <input className="quantity" name="quantity" value={adults} type="number" />
                            <button onClick={() => setAdults(adults + 1)} type="button" className="plus"></button>
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
                            <button onClick={() => childs > 0 && setChilds(childs - 1)} type="button" className="minus"></button>
                            <input className="quantity" name="quantity" value={childs} type="number" />
                            <button onClick={() => setChilds(childs + 1)} type="button" className="plus"></button>
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
                            <button onClick={() => babies > 0 && setBabies(babies - 1)} type="button" className="minus"></button>
                            <input className="quantity" name="quantity" value={babies} type="number" />
                            <button onClick={() => setBabies(babies + 1)} type="button" className="plus"></button>
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBBtn outline color="success" className="rounded-pill float-right">Apply</MDBBtn>
                </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            </div>
                <MDBBtn className="primary-grad" type="submit" style={{width: '96%', marginTop: '1rem'}}>
                <MDBIcon icon="search" className="mr-1" /> Search
                </MDBBtn>
            </form>
        </div>
    );
};


export default SearchTab;