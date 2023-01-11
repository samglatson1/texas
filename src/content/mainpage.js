import React,{useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./main.css"
import Card from 'react-bootstrap/Card';
import img from "./wer.jpg"
import img1 from './off1.jpg'
import img2 from "./off2.jpg"
import img3 from "./off3.jpg"
import pro from "./pro.jpg"
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';




export default function Mainpage(){

    return(
        <>
        <div className="content">
            <Navbar className="nav" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Learnify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Courses</Nav.Link>
            <Nav.Link href="#link">Reasources</Nav.Link>
            <Nav.Link><button className="but1">Get Started</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="container-fluid navcon">
        <div className="row ">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <h1 className="">Tech Conversations</h1>
            </div>
        </div>
    </div>
    <div className="container-fluid navcon1">
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <p>Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication.</p>
            </div>
        </div>
    </div>
    </div>
   <div className="container-fluid">
        <div className="row second">
            <Nav>
            <Nav.Link className="second">Home</Nav.Link>
            <Nav.Link className="second">About</Nav.Link>
            <Nav.Link className="second">Blog</Nav.Link>
            <Nav.Link className="second">Courses</Nav.Link>
            <Nav.Link className="second">Reasources</Nav.Link>
            </Nav>
        </div>
   </div>
   <div className="container-fluid">
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <h3>Featured Post</h3>
            </div>
        </div>
   </div>
 
   <div>
   
   <Card>
        <Card.Img variant="top" src={img}  className="img"/>
        <Card.Body>
            <Card.Text>
                Design
            </Card.Text>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
   </div>
   <div className="container-fluid mt-3">
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <h3>All Blog Posts</h3>
            </div>
        </div>
   </div>
   <div className="container-fluid mt-3">
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 none">
            <Card className="style" style={{ width: '20rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Softwere Development</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text style={{display:'flex'}}>
            <img src={pro} className="profile"/>
            <p className="ml-3">Allay willams<br/>Feb 20,2022</p>
        </Card.Text>
        <Card.Text>
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 none">
            <Card className="style" style={{ width: '20rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Cyber security</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text style={{display:'flex'}}>
            <img src={pro} className="profile"/>
            <p className="ml-3">Allay willams<br/>Feb 20,2022</p>
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 none">
            <Card className="style" style={{ width: '20rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>Design</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text style={{display:'flex'}}>
            <img src={pro} className="profile"/>
            <p className="ml-3">Allay willams<br/>Feb 20,2022</p>
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
        </div>
   </div>
   <div className="container-fluid mt-3">
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 none">
            <Card className="style" style={{ width: '20rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>Data Analytics</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text style={{display:'flex'}}>
            <img src={pro} className="profile"/>
            <p className="ml-3">Allay willams<br/>Feb 20,2022</p>
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 none">
            <Card  className="style" style={{ width: '20rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Web developer</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text style={{display:'flex'}}>
            <img src={pro} className="profile"/>
            <p className="ml-3">Allay willams<br/>Feb 20,2022</p>
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 none">
            <Card className="style" style={{ width: '20rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Design</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text style={{display:'flex'}}>
            <img src={pro} className="profile"/>
            <p className="ml-3">Allay willams<br/>Feb 20,2022</p>
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
        </div>
   </div>
   <div className="container-fluid mt-3">
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 none">
            <Card className="style" style={{ width: '20rem' }}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title>Hacking</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text style={{display:'flex'}}>
            <img src={pro} className="profile"/>
            <p className="ml-3">Allay willams<br/>Feb 20,2022</p>
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 none">
            <Card  className="style" style={{ width: '20rem' }}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title>Web development</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text style={{display:'flex'}}>
            <img src={pro} className="profile"/>
            <p className="ml-3">Allay willams<br/>Feb 20,2022</p>
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 none">
            <Card className="style" style={{ width: '20rem' }}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Data Science</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text style={{display:'flex'}}>
            <img src={pro} className="profile"/>
            <p className="ml-3">Allay willams<br/>Feb 20,2022</p>
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
        </div>
   </div>
   <div className="container-fluid last mt-3">
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <button className="lastbtn">Load more</button>
            </div>
        </div>
   </div>
   <div className="back1 mt-5 ">

   <div className="container-fluid searchcontent ">
        <div className="row ">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <h1 className="">Want  to be the first to know about new updates ?</h1>
            </div>
        </div>
    </div>
    <div className="container-fluid navcon1">
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <p>Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication.</p>
            </div>
        </div>
    </div>
    <div className="container-fluid ">
        <div className="row search">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <input type={'text'} placeholder="Enter your email address" className="input"/>
          <button className="final ml-3">Search</button>
           </div>
        </div>
    </div>
    </div>
<div className="container-fluid last1">
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <h6>Learnify</h6>
                    <p>Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication.</p>
                    <AiFillFacebook/><AiFillTwitterSquare className="ml-3"/><AiOutlineInstagram className="ml-3"/><AiFillLinkedin className="ml-3"/>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-8 ">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 co-md-4 col-sm-4 col-4">
                        <p>Company</p>
                        <p>About us</p>
                        <p>Become a member</p>
                        <p>Our community</p>
                    </div>
                    <div className="col-xl-4 col-lg-4 co-md-4 col-sm-4 col-4">
                        <p>Company</p>
                        <p>About us</p>
                        <p>Become a member</p>
                        <p>Our community</p>
                    </div>
                    <div className="col-xl-4 col-lg-4 co-md-4 col-sm-4 col-4">
                        <p>Company</p>
                        <p>About us</p>
                        <p>Become a member</p>
                        <p>Our community</p>
                    </div>
                </div>
            </div>
        </div>
</div>
        </>
    )
}