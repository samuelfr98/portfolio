import { useState, useEffect } from "react";
import ContactCard from "./ContactCard";
import NavLoader from "./NavLoader";

const Contact = () => {
  // For load in effect
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1090);
  });

  return (
    <div className="contact">
      {isLoading ? <NavLoader page="about" /> : ""}
      <div className="blog">
        <ContactCard />
      </div>
    </div>
  );
};

export default Contact;
