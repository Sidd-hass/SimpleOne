import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return( <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime quia quos, molestias tempore id libero?</div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">D-39 A Durga Vihar Phase 2 Gali No-5 Near Dindharpur Najafgarh New Delhi 110043</div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">Phone: 9625477902</div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">Email: siddhantpandey203@gmail.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Headphones</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
                <span className="text"></span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Condition</span>
                <span className="text">Contact us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    JSDEVSTORE 2022 CREATED BY FILL IT AT LAST IN THE FOOTER.JSX FILE INSIDE FOOTER. PREMIUM E-COMMERCE SOLUTIONS.
                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </footer>
    );
};

export default Footer;
