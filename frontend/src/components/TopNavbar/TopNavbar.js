import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./TopNavbar.css";
import Modal from "react-bootstrap/Modal";
import GoogleLogin from "react-google-login";
import axios from "axios";



export default class TopNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      index: 0,
			direction: null,
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.toggleModal = this.toggleModal(this);

    this.handleSelect = this.handleSelect.bind(this);

  }

  handleSelect(selectedIndex, e) {
		this.setState({
			index: selectedIndex,
			direction: e.direction,
		});
	}

  handleModalOpen = (e) => {
    this.setState({
      show: true,
    });
  };
  handleModalClose = (e) => {
    this.setState({
      show: false,
    });
  };

  componentDidMount() {
    const a = localStorage.getItem("username2");
    console.log("cdcdc: " + a);
  }

  handleLogout = () => {
    localStorage.removeItem("username2");
    window.location.reload(false);
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  toggleModal = () => {
    this.setState({
      show: false,
    });
  };

  signup(res) {
    const googleresponse = {
      tokenId: res.tokenId,
      // Name: res.profileObj.name,

      // email: res.profileObj.email,

      // token: res.googleId,

      // Image: res.profileObj.imageUrl,

      // ProviderId: "Google",
    };
    const user = {
      Name: res.profileObj.name,
    };
    localStorage.setItem("username2", res.profileObj.name);

    axios
      .post("http://localhost:3001/api/googlelogin", googleresponse)

      .then((result) => {
        let responseJson = result;

        sessionStorage.setItem("userData", JSON.stringify(result));
      });

    this.setState({
      show: false,
    });
  }

  render() {
    const { index, direction } = this.state;
    const a = localStorage.getItem("username2");
    console.log("cd: " + a);
    let userlogin = null;
    if (a === null) {
      userlogin = (
        <li class="nav-item active">
          {" "}
          <a
            class="nav-link"
            onClick={this.handleModalOpen}
            style={{ cursor: "pointer" }}
          >
            Login Account{" "}
          </a>
        </li>
      );
    } else {
      userlogin = (
        <li class="nav-item dropdown active">
          <a
            class="nav-link  dropdown-toggle"
            
            data-bs-toggle="dropdown"
            style={{ cursor: "pointer" }}
          >
            {" "}
            {a}{" "}
          </a>
          <ul class="dropdown-menu bg-dark">
            <li>
              <button
                class="dropdown-item text-light bg-dark"
                onClick={this.handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </li>
      );
    }

    const responseSuccessGoogle = (response) => {
      console.log(response);

      var res = response.profileObj;

      console.log(res);

      this.signup(response);
      window.location.reload(false);
    };

    const responseErrorGoogle = (response) => {};

    return (
      <div>
        {/* <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/home">Home</Nav.Link>
                                    <Nav.Link href="/about-us">Monthly NewsLetter</Nav.Link>
                                    <Nav.Link href="/contact-us">Events</Nav.Link>
                                    <Nav.Link href="/contact-us">Photo Gallery</Nav.Link>
                                    <Nav.Link href="/contact-us">Donate</Nav.Link>
                                    <NavDropdown title="Who we Are" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                        </Router>
                    </div>
                </div> */}

        <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img className="nav-img" src="https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1502777881533-0ZY1T45E8MJU5X09P9BK/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg?format=500w"></img>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main_nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="main_nav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  {" "}
                  <a class="nav-link" href="/">
                    Home{" "}
                  </a>{" "}
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/monthlyNewsletter">
                    {" "}
                    Monthly Newsletter{" "}
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/events">
                    {" "}
                    Events{" "}
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/photoGallery">
                    {" "}
                    Photo Gallery{" "}
                  </a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="/donate">
                    {" "}
                    Donate{" "}
                  </a>
                </li>
                <li class="nav-item dropdown active">
                  <a
                    class="nav-link  dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    {" "}
                    Who we are{" "}
                  </a>
                  <ul class="dropdown-menu bg-dark">
                    <li>
                      <a
                        class="dropdown-item text-light bg-dark"
                        href="/aboutUs"
                      >
                        {" "}
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-light bg-dark"
                        href="/leadersOfAym"
                      >
                        {" "}
                        Leaders of Aym{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-light bg-dark"
                        href="/membersReflection"
                      >
                        {" "}
                        Member's Reflection{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item text-light bg-dark"
                        href="/christmasConcert"
                      >
                        {" "}
                        2019 Christmans Concert{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                {/* <li class="nav-item dropdown active">
		   <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  Hello  </a>
		    <ul class="dropdown-menu bg-dark">
                <li><a class="dropdown-item text-light bg-dark">Hello</a></li>
                </ul>
                </li> */}
                {userlogin}
              </ul>
            </div>
          </div>
        </nav>

        <div>
          <Modal
            //   aria-labelledby="contained-modal-title-vcenter"
            centered
            show={this.state.show}
            style={{ opacity: 1 }}
            toggle={this.handleModalClose}
          >
            <Modal.Header>
              <Modal.Title>
                <p>
                  <b>Account Signup</b>
                </p>

              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <center>
              
              </center>
              <center>
              <p className="topnav-text">
                WELCOME TO

              </p>
              <p className="topnav-text">
                ALMADEN YOUTH MUSICIANS

              </p>
                <GoogleLogin
                  clientId="442136040847-7hd661tvopnum3aqpu8ik7l2n827m91c.apps.googleusercontent.com"
                  buttonText="Login with Google"
                  onSuccess={responseSuccessGoogle}
                  onFailure={responseErrorGoogle}
                  cookiePolicy={"single_host_origin"}
                />
                <Button
                  style={{ marginLeft: "10px", color: "white", backgroundColor: "black"}}
                  onClick={this.handleModalClose}
                >
                  Close
                </Button>
              </center>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}
