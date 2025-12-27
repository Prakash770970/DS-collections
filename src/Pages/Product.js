import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { pic } from './Product_detials';
import './Product.css';

const Product = () => {
  const [items, setitems] = useState(pic);

  return (
    <div className="slider-container">
      {items.map((item, index) => (
        
        <Card
          className={`slider-card ${index < 4 ? "highlight-card" : ""}`}
          key={item.id}
        >
          
          <Card.Img
            variant="top"
            className={`slider-img ${index < 4 ? "highlight-img" : ""}`}
            src={require(`./Assets/${item.image}.jpeg`)}
          />

          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>₹{item.price}</Card.Text>

            <Button variant="primary">Add Cart</Button>
          </Card.Body>

        </Card>
      ))}
    </div>
  )
}

export default Product;

