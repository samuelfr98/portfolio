import { useState, useEffect } from "react";
import ContactCard from "./ContactCard";
import NavLoader from "./NavLoader";

const Contact = () => {
  // For load in effect
  const [isLoading, setLoading] = useState(true);
  const [side, setSide] = useState(true)

  useEffect(() => { 
    setTimeout(() => {
      setLoading(false);
    }, 1090);
  });

  return (
    <div className="contactContainer">
      {isLoading ? <NavLoader page="about" /> : ""}
      <div className="contact">
        <ContactCard />
      </div>
      {!side ? (
          <div className="postCardButtons">
            <div className="sendPostCard">Send</div>
            <div className="cancelPostCard">Cancel</div>
          </div>
        ) : (
          ""
        )}
    </div>
  );
};

export default Contact;
