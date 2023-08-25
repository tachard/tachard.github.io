import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "../styles/CustomCard.css";

const CustomCard = ({ text, imPath }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      className={`custom-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`image-container ${isHovered ? "hovered" : ""}`}>
        <Card.Img src={imPath} className="card-image" />
      </div>
      <Card.ImgOverlay>
        <Card.Text className="card-text fs-4 text-center">{text}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default CustomCard;
