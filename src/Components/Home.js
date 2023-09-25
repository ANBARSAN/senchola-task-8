import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import { Col, Row,Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Logo from '../Assets/2.jpg';
import ProfilePic from "../Assets/john-doe-image.png";


const Home = () => {
  
    const [users, setCards] = useState([]);
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Replace with your API endpoint
  
    useEffect(() => {
      // Fetch data when the component mounts
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => setCards(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  
  
  return (
  <>
  
      <Navbar />
      
      <Carousel>
      <Carousel.Item>
      <img src={Logo} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Logo} alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Logo} alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     
     
      <h1 className="text-center mt-4 text-danger">Welcome to users</h1>
      <Container>
        <Row>
            {users.map((user)=>(
                <Col md={4} >
                   
                <div className='data my-4'>
                <img src={ProfilePic} alt="" />
                <br />
                <label>Name : </label> {user.name} 
                <br />
                <label>Username : </label> {user.username} 
                <br />
                <label>Email :</label> {user.email}
                <br />
                <label>Address :</label> {user.address.street},{user.address.suite},{user.address.city}-{user.address.zipcode}
                <br />
                <label> Latitude :</label> {user.address.geo.lat} 
                <br />
                <label>Longitude :</label> {user.address.geo.lng}
                <br />
                <label>Phone :</label> {user.phone}
                <br />
                <label>Website :</label> {user.website} 
                <br />
                <label>Company :</label> {user.company.name},{user.company.catchPhrase},{user.company.bs}
                <br />
               
                </div>
                </Col>
            ))}
        </Row>
       </Container>
    </>
  );
};

export default Home;