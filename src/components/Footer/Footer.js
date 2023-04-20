import React from "react";
import "./Fotter.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from '../../assets/payments.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. reiciendis
            ea perferendis fugit?
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Kayaloram Road, Panji , Goa</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone : +917976630412</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email : kshitizvaya12@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        &copy; GIFTers 2020 created By Kshitiz Vaya 
                    </span>
                    <img src={Payment} alt="paymentsImg" />
                </div>
            </div>
    </div>
  );
}

export default Footer;
