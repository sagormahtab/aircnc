import React, { useState } from 'react';
import './OrderDetails.scss';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol } from 'mdbreact';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const OrderDetails = () => {
    const [guest, setGuest] = useState('');
    const handleGuest = (event) => {
        setGuest(event.target.value);
    };
    return (
        <div>
            <MDBCard className="mt-3">
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md="7">
                            <strong style={{fontSize: '1.4rem'}}>Light bright airy stylish apt & safe peaceful stay</strong>
                            <div className="mt-3">
                                <MDBIcon icon="star" className="p-color mr-1"/>
                                <small><strong>4.9 (20 reviews)</strong></small>
                            </div>
                        </MDBCol>
                        <MDBCol md="5" className="overflow-hidden" style={{height: '7rem'}}>
                            <img src="https://i.ibb.co/FgS5P1W/house1.jpg" className="img-fluid rounded" alt=""/>
                        </MDBCol>
                    </MDBRow>
                    <small className="d-block mt-3 mb-2"><strong>Dates</strong></small>
                    <div className="d-flex justify-content-between rounded" style={{border: '1px solid lightgray',padding: '5px 10px'}}>
                        <span>4/13/2020</span> <MDBIcon icon="arrow-right" /> <span>4/17/2020</span>
                    </div>
                    <small className="d-block mt-3 mb-2"><strong>Guests</strong></small>

                    <FormControl variant="outlined" style={{width: '100%'}}>
                        <InputLabel id="demo-simple-select-outlined-label">3 guests</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={guest}
                        onChange={handleGuest}
                        label="3 guests"
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={1}>One</MenuItem>
                        <MenuItem value={2}>Two</MenuItem>
                        <MenuItem value={3}>Three</MenuItem>
                        <MenuItem value={4}>Four</MenuItem>
                        <MenuItem value={5}>Five</MenuItem>
                        </Select>
                    </FormControl>

                    <div className="d-flex justify-content-between my-3">
                        <small>$34 X 4 nights</small>
                        <small>$136</small>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between my-3">
                        <small>Cleaning fee</small>
                        <small>$10</small>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between my-3">
                        <small>Service fee</small>
                        <small>$21</small>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between my-3">
                        <strong>Total</strong>
                        <strong>$167</strong>
                    </div>

                </MDBCardBody>
            </MDBCard>
        </div>
    );
};

export default OrderDetails;