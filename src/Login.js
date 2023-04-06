import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';
  import './Header.css';
  import { Button, Form, FormGroup, Label, Input } from 'reactstrap';



export default function Login() {
  return (
    <MDBRow>
      <MDBCol sm='6' >
        <MDBCard className='MDBCardBody'>
          <MDBCardBody >
            {/* <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional content.
            </MDBCardText>
            <MDBBtn href='#'>Go somewhere</MDBBtn> */}
          <MDBCarousel showControls showIndicators className='MDBCarousel'>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://mdbootstrap.com/img/new/slides/041.jpg'
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/new/slides/042.jpg'
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>      
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='6'>
        <MDBCard className='login'>
          <MDBCardBody >
          <Form className="login-form">
      <div className="Welcome">
        <h3>
          <span className="font-weight-bold"><b>Hey,Welcomeback</b></span>
        </h3>
        <p>Enter the information you entered while registering</p>
      </div>
      <FormGroup>
        <Label>Email address</Label>
        <Input type="email" placeholder="Enter email address" />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" placeholder="password" />
      </FormGroup>
      <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes"  />
  <label class="form-check-label" for="mySwitch" style={{fontSize:'14px'}}>keep me signed</label>&nbsp;&nbsp;<span style={{color:'red', fontSize:'14px',textAlign:'right'}}>Forgot password?</span>
  
</div>

      <FormGroup>
       
        {/* <FacebookLoginButton className="mt-3 mb-3" /> */}
        <div className="text-center">
          <a >Sign up</a>
          <span className="p-2">|</span>
          <a >Forgot password</a>
        </div>
        <Button className="btn btn-lg btn-dark btn-block ">Login</Button>

       
      </FormGroup>
    </Form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}