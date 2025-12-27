import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import{Routes,Route,Link} from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Cart from './Cart';
import Product from './Product';
import Login from './Login';
import Sign from './Sign';
const MainRouter = () => {
  return (
    <div>
     
          <Navbar bg="dark" data-bs-theme="dark">
          
        <Container>
          
          <Navbar.Brand href="#home">Heisenberg</Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link as= {Link} to ="/">Home</Nav.Link>
            <Nav.Link as= {Link} to ="/About">About</Nav.Link>
            <Nav.Link as= {Link} to ="/Contact">Contact</Nav.Link>
             <Nav.Link as={Link} to="/Product">Product</Nav.Link>
             {/* <Nav.Link as={Link} to="/Cart">Cart</Nav.Link> */}
             <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/sign">Sign</Nav.Link>
          </Nav>
        </Container>
        
       </Navbar>
       <Container>
        <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/Contact"element={<Contact/>}/>
            <Route path="/About"element={<About/>}/>
            
            <Route path="*"element={<Cart/>}/>
            <Route path="/Product" element={<Product/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Sign" element={<Sign/>}/> 
            

        </Routes>
      </Container>
      </div>
       
   

  )
}

export default MainRouter
