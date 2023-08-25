import React from "react";
import { Card } from "react-bootstrap";
import "../styles/CustomCard.css";

const CustomCard = ({ text, onClick, imPath }) => {
  return (
    <Card className="custom-card" onClick={onClick}>
      <div className="image-container">
        <Card.Img src={imPath} className="card-image" />
      </div>
      <Card.ImgOverlay>
        <Card.Text className="card-text fs-4 text-center">{text}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default CustomCard;
