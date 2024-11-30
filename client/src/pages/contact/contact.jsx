import Navbar from "../../components/navbar/Navbar";
import { faBed, faClipboardList, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./contact.css";

const Contact = ({ type }) => {
  return (
    <div>
      <Navbar />
      <div className="header">
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
          <div id="headerList">
            <div id="mydiv" className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <Link to="/">
                <button>Stays</button>
              </Link>
            </div>
            <div id="mydiv" className="headerListItem">
              <FontAwesomeIcon icon={faClipboardList} />
              <Link to="/itinerary">
                <button>Itinerary</button>
              </Link>
            </div>
            <div id="mydiv" className="headerListItem">
              <FontAwesomeIcon icon={faPhone} />
              <Link to="/contact">
                <button>Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-container">
        <div className="row">
          <div className="col-md-6">
            <h4>Address:</h4>
            <address>
              <strong>Thadomal Shahani Engineering College,</strong><br />
              Advocate Nari Gursahani Marg, TPS III,<br />
              Bandra(W), Mumbai-400050<br /> <br></br><br />
              <h4>Contact Us via:</h4>
              <p>
                Phone: <a href="tel:+919969736699">+91-9912323443</a><br />
                Email: <a href="mailto:facevisionct@gmail.com">traveleaseorg@gmail.com</a>
              </p> <br></br><br />
            </address>

            <h4>Find us on maps:</h4>
            <div className="embed-responsive embed-responsive-4by3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9834630705877!2d72.83327990951126!3d19.06446468206323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91130392c07%3A0x3c47bf391c8de931!2sThadomal%20Shahani%20Engineering%20College!5e0!3m2!1sen!2sin!4v1714139644956!5m2!1sen!2sin"
                width="500"
                height="270"
                frameBorder="0"
                allowFullScreen
                title="College Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
