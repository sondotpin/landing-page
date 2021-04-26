import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import { List, ListItem } from "reusecore/List";
import Subscribe from "sections/Subscribe";

import cryptikFooterLogo from "assets/images/logo-white.png";
import data from "assets/data/footer";
import FooterWrapper from "./footer.style";

const Footer = () => {
  return (
    <FooterWrapper>
      <Box className="footer-content-wrapper">
        <Subscribe />
        <Container>
          <Row>
            <Col className="lg-3 sm-6">
              <Box className="footer-widgets company-desc">
                <Image src={cryptikFooterLogo} alt="cryptik footer logo" />

                <Box className="contact-info">
                  <Link href="#">
                    <a>
                      {" "}
                      <FaPhoneAlt /> pinokara@pincontract.com{" "}
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      {" "}
                      <FaEnvelope /> +88 12345 697858{" "}
                    </a>
                  </Link>
                </Box>
              </Box>
            </Col>
            <Col className="lg-3 sm-6">
              <Box className="footer-widgets">
                <Heading as="h2">Service</Heading>
              </Box>
            </Col>
            <Col className="lg-3 sm-6">
              <Box className="footer-widgets">
                <Heading as="h2">About Us</Heading>
              </Box>
            </Col>
            <Col className="lg-3 sm-6">
              <Box className="footer-widgets address">
                <Heading as="h2">Our Address</Heading>
                <Text>
                  1370 Roosevelt Street, Little York City, New Jersey 08834
                </Text>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col className="xs-12">
              <Box className="footer-social-links">
                {data.links.map((item, index) => (
                  <Link href={item.url} key={index} >
                    <a style={{ marginRight: 20 }}> {item.icon} </a>
                  </Link>
                ))}
              </Box>

              <Box className="copyright-text">
                <Text>&copy; Safe Pluto | All right rserved 2020</Text>
                <Text as="span">
                  Designed By{" "}
                  <Link href="#">
                    <a>Pluto</a>
                  </Link>
                </Text>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;
