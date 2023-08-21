import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Banner.css';

const Banner = ({ imagePath, children }) => {
  const bannerStyle = {
    backgroundImage: `url(${imagePath})`
  };

  return (
    <div className="banner d-flex align-items-center" style={bannerStyle}>
      <Container fluid className="banner-content">
        {children}
      </Container>
    </div>
  );
};

export default Banner;
