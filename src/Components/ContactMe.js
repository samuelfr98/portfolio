import { useState } from "react";

const ContactMe = (theme) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="contactMe">
      <div className="aboutMe">
        <div>
          <h1 className="center">Please feel free to reach out! </h1>
          <form className="contactForm" action="" method="" encType="">
            <input
              placeholder="Name"
              type="text"
              value={name}
              className="retroName"
              onChange={handleChangeName}
            />
            <input
              placeholder="E-mail"
              type="text"
              value={email}
              className="retroEmail"
              onChange={handleChangeEmail}
            />
            <textarea
              rows="10"
              cols="60"
              value={message}
              className="retroMessage"
              onChange={handleChangeMessage}
              placeholder="Message"
            ></textarea>
          </form>
        </div>
        <div className="sendDivRetro">
          <div
            className="retroSendEmail"
            onClick={() => {
              const endpoint =
                "https://i7ubiu1b2a.execute-api.us-east-1.amazonaws.com/default/SendContactEmail";
              const body = JSON.stringify({
                senderName: name,
                senderEmail: email,
                message: message,
              });
              console.log(body);
              const requestOptions = {
                method: "POST",
                body,
              };
              fetch(endpoint, requestOptions)
                .then((response) => {
                  if (!response.ok) throw new Error("Error in fetch");
                  console.log(response.json());
                })
                .then((response) => {
                  console.log("Email sent successfully!");
                  alert(
                    "Thank you for reaching out! Your e-mail sent successfully"
                  );
                })
                .catch((error) => {
                  console.log("An unkown error occured.");
                  alert("An error occured");
                });
            }}
          >
            Send
          </div>
          <div
            className="retroCancelEmail"
            onClick={() => alert("E-mail cancelled")}
          >
            Cancel
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
