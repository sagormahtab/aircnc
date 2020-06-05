import React, { useEffect, useState } from 'react';
import './SearchResult.scss';
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import Map from '../Map/Map'
import Hotel from '../Hotel/Hotel';

const SearchResult = () => {
    const [hotels, setHotels] = useState([])
    useEffect(()=>{
        fetch('https://mighty-lake-25522.herokuapp.com/houses')
        .then(res => res.json())
        .then(data => setHotels(data))
    }, [])

    return (
        <div>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="5">
                    <div className="my-4">
                        <small>252 stays Apr 13-17 3 guests</small>
                        <h5><strong>Stay in Dhaka Division</strong></h5>
                        <a className="filter-btn rounded-pill" href="/searchresult">Cancellation flexibility</a>
                        <a className="filter-btn rounded-pill" href="/searchresult">Type of place</a>
                        <a className="filter-btn rounded-pill" href="/searchresult">Price</a>
                        <a className="filter-btn rounded-pill" href="/searchresult">Instant book</a>
                        <a className="filter-btn rounded-pill" href="/searchresult">More filters</a>
                    </div>
                        {
                            hotels.map(ht=><Hotel key={ht.id} hotel={ht} />)
                        }
                    </MDBCol>
                    <MDBCol md="7">
                        <Map />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default SearchResult;