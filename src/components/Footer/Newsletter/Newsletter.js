import React from "react";
import { icons } from "react-icons";
import "./Newsletter.scss";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Newsletter() {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">NewsLetter</span>
        <span className="big-text">Sign Up for Latest Updates and offers</span>
        <div className="form">
          <input type="text" placeholder="Email" />
          <button>Subscribe</button>
        </div>
        <div className="text">
          Will Be Used in Accordance with our Privacy Policy
        </div>
        <div className="social-icons">
          <div className="icon">
            <FaFacebookF size={14} />
          </div>
          <div className="icon">
            <FaTwitter size={14} />
          </div>
          <div className="icon">
            <FaInstagram size={14} />
          </div>
          <div className="icon">
            <FaLinkedin size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
