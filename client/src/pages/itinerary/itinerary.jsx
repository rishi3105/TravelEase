// import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import {
  faBed,
  faPlane,
  faClipboardList,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { SearchContext } from "../../context/SearchContext";
// import { AuthContext } from "../../context/AuthContext";
// import Featured from "../../components/featured/Featured";
// import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
// import Footer from "../../components/footer/Footer";
// import MailList from "../../components/mailList/MailList";
// import PropertyList from "../../components/propertyList/PropertyList";
import "./itinerary.css";
// import axios from "axios";
// import jsPDF from "jspdf";

const Itinerary = ({ type }) => {
  // const [formData, setFormData] = useState({
  //   startDate: "",
  //   endDate: "",
  //   tourType: "",
  //   city: "",
  // });
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  // const [itinerary, setItinerary] = useState("");

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setError("");
  //   setItinerary(""); // Reset itinerary before new request

  //   try {
  //     const response = await fetch("/generate-itinerary", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       const file = new Blob([data.pdf], { type: "application/pdf" });
  //       const url = window.URL.createObjectURL(file);
  //       const a = document.createElement("a");
  //       a.href = url;
  //       a.download = "itinerary.pdf";
  //       document.body.appendChild(a);
  //       a.click();
  //       document.body.removeChild(a);
  //     } else {
  //       throw new Error(data.error || "Failed to generate itinerary");
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     setError("Failed to generate itinerary. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    tourType: '',
    city: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/itinerary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'itinerary.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      console.error(err);
      setError('Failed to generate itinerary. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      <div className="header">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          <div id="headerList">
            <div id="mydiv" className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <Link to="/">
                <button>Stays</button>
              </Link>
            </div>
            {/*<div id="mydiv" className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <Link to="/flights">
                <button>Flights</button>
              </Link>
            </div>*/}
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
      {/* <MailList/>
        <Footer/> */}
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>End Date:</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Type of Tour:</label>
            <select
              name="tourType"
              value={formData.tourType}
              onChange={handleChange}
              required
            >
              <option value="">Select Tour Type</option>
              <option value="adventure">Adventure</option>
              <option value="cultural">Cultural</option>
              <option value="Family">Family</option>
              <option value="historical">Historical</option>
            </select>
          </div>
          <div>
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Generating PDF..." : "Generate Itinerary PDF"}
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Itinerary;
