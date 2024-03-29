import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer1 = () => {
  return (
    <>
      <div className="footer-part p-12 bg-black mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mx-0 md:mx-12 lg:mx-14">
          <div>
            <h4 className="text-[#f0bb3a] text-3xl font-bold">BULKYBID</h4>

            <h5 className="mt-3 text-white text-lg">
              <Link to="/About">About Us</Link>
            </h5>

            <p className="mt-3  text-white">
              Where quality meets affordability.
              <br /> We understand the importance of
              <br />
              a smooth and enjoyable journey
              <br /> without the burden
              <br /> of excessive costs.
            </p>
          </div>

          <div className="mt-5 md:mt-4 lg:mt-0">
            <h5 className="text-white">Legal</h5>

            <div className="mt-2 md:mt-4 text-white">
              <Link to="/termAndCondition">
                <p className="">Terms & Conditions</p>
              </Link>

              <Link to="/privacyPolicy">
                <p className="mt-2">Privacy Policy</p>
              </Link>

              <Link to="/refund">
                <p className="mt-2">Refund Policy</p>
              </Link>
            </div>
          </div>

          <div className="mt-5 md:mt-4 lg:mt-0">
            <h5 className="text-white">Get In Touch</h5>

            <div className="mt-2 md:mt-4 text-white">
              <p className="">
                <Link to="/contact">Contact Us</Link>
              </p>
            </div>
          </div>

          <div className="mt-5 md:mt-4 lg:mt-0">
            <h5 className="text-white">Quick Links</h5>

            <div className="mt-2 md:mt-4 text-white">
              <p className="">
                <Link to="/">Home</Link>
              </p>

              <p className="mt-2">
                {" "}
                <Link to="/About">About</Link>
              </p>

              <p className="mt-2">
                <Link to="/bitpage">Services</Link>
              </p>
            </div>
          </div>

          <div className="mt-5 md:mt-4 lg:mt-0">
            <h5 class="text-white">
              <Link to="/contact">Contact Us</Link>
            </h5>

            <ul class="list-inline footer-contact mt-2 md:mt-4">
              <li className="mb-3">
                <a href="tel:+91-9920502313">
                  <FontAwesomeIcon icon={faPhone} className="footer-icon" />
                  +91-9920502313
                </a>
              </li>

              <li className="mb-3">
                <a href="mailto:support@bulkybid.com">
                  <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
                  support@bulkybid.com
                </a>
              </li>

              <li className="mb-3">
                <Link to="">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="footer-icon"
                  />
                  Second Floor, 101, 2nd Block, 3rd stage, Near BDA Complex, P&T
                  Colony, R T Nagar, Bengaluru, Bengaluru Urban, Karnataka,
                  560032
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-5 w-100 text-white "></hr>

        <div className="grid grid-cols-1  lg:grid-cols-2 mx-0 md:mx-12 lg:mx-14">
          <div>
            <div className="social-link">
              <Link to="">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </Link>

              <Link to="">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </Link>

              <Link to="">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </Link>

              <Link to="">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </Link>
            </div>
          </div>

          <div>
            <p className="footer-paragraph text-white">
              Copyright@2023 All Rights Reserved By :
              <Link to="/" className="footer-text">
                <strong> Bulkybid</strong>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer1;
