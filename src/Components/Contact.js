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
    <ContactCard />

    </div>
    /* //   <form action="" method="" encType="">
    //     Name:
    //     <br />
    //     <input type="text" />
    //     <br />
    //     Email:
    //     <br />
    //     <input type="text" />
    //     <br />
    //     Message: <br />
    //     <textarea rows="6" cols="20"></textarea>
    //     <br />
    //     <button>Submit</button>
    //   </form>
    // </div> */
  );
};

export default Contact;
