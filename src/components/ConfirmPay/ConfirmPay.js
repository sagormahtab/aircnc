import React, { useState } from 'react';
import './ConfirmPay.scss';
import { MDBRow, MDBCol } from 'mdbreact';
import OrderDetails from '../OrderDetails/OrderDetails';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import msCard from '../../images/credit-cards_mastercard.png';
import visaCard from '../../images/credit-cards_visa.png';
import amexCard from '../../images/credit-cards_amex.png';
import PayPalCard from '../../images/paypal.png';
import { useForm } from 'react-hook-form';

const ConfirmPay = () => {
    const [value, setValue] = useState();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
      };
    
    return (
        <div>
            <MDBRow>

                <MDBCol md="6" className="mt-3">
                    <FormControl component="fieldset" className="w-100">
                        <RadioGroup aria-label="payment" name="payment" value={value} onChange={handleChange}>

                        <div id="credit-card" className="rounded">
                            <div className="d-flex justify-content-between">
                                <FormControlLabel value="creditCard" control={<Radio />} label="Credit Card" />
                                <div className="payCard-img">
                                    <img src={msCard} alt=""/>
                                    <img src={visaCard} alt=""/>
                                    <img src={amexCard} alt=""/>
                                </div>
                            </div>

                            <p className="text-muted" style={{marginLeft: '2rem'}}>Safe money transfer using your bank account. Visa, maestro, Discover, American Express</p>
                            
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label htmlFor=""><small className="text-muted" style={{fontSize: '12px'}}>CARD NUMBER</small></label>
                                <input className="form-control" name="cardNumber" ref={register({required: true})} />
                                {errors.cardNumber && 'Card number is required.'}
                                <MDBRow className="mt-4">
                                    <MDBCol md="6">
                                        <label htmlFor=""><small className="text-muted" style={{fontSize: '12px'}}>NAME ON CARD</small></label>
                                        <input className="form-control" name="nameOnCard" ref={register({ required: true })} />
                                        {errors.nameOnCard && 'Name on Card is required.'}
                                    </MDBCol>
                                    <MDBCol md="3">
                                        <label htmlFor=""><small className="text-muted" style={{fontSize: '12px'}}>EXPIRY DATE</small></label>
                                        <input className="form-control" name="expiryDate" ref={register({ required: true })} />
                                        {errors.expiryDate && 'Expiry date is required.'}
                                    </MDBCol>
                                    <MDBCol md="3">
                                        <label htmlFor=""><small className="text-muted" style={{fontSize: '12px'}}>CVV CODE</small></label>
                                        <input className="form-control" name="cvvCode" ref={register({ required: true })} />
                                        {errors.cvvCode && 'CVV Code is required.'}
                                    </MDBCol>
                                </MDBRow>
                            </form>
                        </div>
                        
                        <div id="paypal" className="rounded">
                            <div className="d-flex justify-content-between">
                                <FormControlLabel value="payPal" control={<Radio />} label="Paypal" />
                                <div className="payCard-img">
                                    <img src={PayPalCard} style={{width: '6rem'}} alt=""/>
                                </div>
                            </div>

                            <p className="text-muted" style={{marginLeft: '2rem'}}>You will be redirected to PayPal website to complete your purchase securely</p>
                        </div>

                        </RadioGroup>
                    </FormControl>
                </MDBCol>

                <MDBCol md="6">
                    <OrderDetails />
                </MDBCol>
            </MDBRow>
        </div>
    );
};

export default ConfirmPay;