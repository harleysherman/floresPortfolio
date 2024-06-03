import { useState } from "react";
import "../../main.css";
import "./Contact.css";
import emailjs from "@emailjs/browser";

// Here we import a helper function that will check if the email is valid
import { validateEmail, checkName, checkMessage } from "../utils/helpers";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }
    if (!checkName(name)) {
      setErrorMessage(
        `Please enter a name with a range of 2 to 100 characters.`
      );
      return;
    }
    if (!checkMessage(message)) {
      setErrorMessage(
        `Please enter a message with a range of 5 to 280 characters.`
      );
      return;
    }

    {
      /* emailjs */
    }
    emailjs
      .send("service_tech_email", "contact_tech_portfolio", { name, message } , {
        publicKey: "Yw36c9FjucmKNY-sc",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div className="container text-center">
      <h2 className="contactTitle m-3">Contact</h2>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter a message"
        />
        <button type="submit">Submit</button>
      </form>

      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
