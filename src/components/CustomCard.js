import React from "react";
import { Card } from "react-bootstrap";
import "../styles/CustomCard.css";

const CustomCard = ({ text, onClick, imPath }) => {
  return (
    <div className="card-container">
      <Card className="custom-card" onClick={onClick}>
        <Card.Img variant="top" src={imPath} />
        <Card.Text className="card-text fs-4 text-center">{text}</Card.Text>
      </Card>
    </div>
  );
};

export default CustomCard;
