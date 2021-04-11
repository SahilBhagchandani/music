import React, { Component } from "react";
import { Form, Col, Button, InputGroup } from "react-bootstrap";
import TopNavBar from "../TopNavbar/TopNavbar";
import BottomNavBar from "../BottomNavbar/BottomNavbar";
import './contactUs.css';
export default class contactUs extends Component {
    constructor(props) {
        super(props);
        this.state={
            validated: false,
            setValidated: false

        };
      this.handleSubmit=this.handleSubmit.bind(this);
    
      }

      handleSubmit = (event) => {
        const form = event.currentTarget;
        console.log("hello")
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        this.setState({
            setValidated: true
        })

      };
  render() {
    return (
      <div>
        <div>
          <TopNavBar />
        </div>
        <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-10 col-sm-offset-1">
              <center>
                {" "}
                <p className="contactus-text">
            Contact Us
          </p>
              </center>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 col-sm-10 col-sm-offset-1">
              <center>
                {" "}
                <p className="contactus-text-2">
                PLEASE COMPLETE THE FORM BELOW
          </p>
              </center>
            </div>
          </div>
            
        {/* <Form>
            <Form.Label>Student name (Korean,English) *</Form.Label>
            <Form.Row>
          <Form.Group controlId="exampleForm.ControlInput1" as={Col}>
            <Form.Label>First Name</Form.Label>
            <InputGroup hasValidation>
            <Form.Control type="text" placeholder="First Name" required />

            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1" as={Col}>
          <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" required />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </Form.Group>
          </Form.Row>

          <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Student Email Address *</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Instrument *</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mom's name and telephone and email address *</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>student's school and grade</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Private teacher's name and email address
</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button type="submit" onClick={this.handleSubmit}>Submit form</Button>
        </Form> */}

<Form noValidate validated={this.validated} onSubmit={this.handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
        </div>
        <div>
          <BottomNavBar />
        </div>
      </div>
    );
  }
}
