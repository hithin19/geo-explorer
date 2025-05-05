import React from "react";

export const Contact = () => {
  // This function handles the form submission
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission (page reload)

    // Create a FormData object from the form (event.target is the form)
    const formInputData = Object.fromEntries(new FormData(event.target).entries());
    
    // Logs the form data to the console as an object (key-value pairs)
    console.log(formInputData);

    // You can now send the formInputData to an API, or manage the state, etc.
  };

  return (
    <section className="section-contact">
      {/* This is the title of the contact section */}
      <h2 className="container-title">Contact Us</h2>

      {/* The wrapper for the contact form */}
      <div className="contact-wrapper container">
        {/* This is the form element */}
        <form onSubmit={handleFormSubmit}> 
          {/* Input field for the user's name */}
          <input
            className="form-control"
            type="text"
            name="username" // This will be the key in the form data object
            placeholder="Enter your name" // Placeholder text
            autoComplete="off" // Disable browser's autocomplete for the field
            required // Make this field required for submission
          />

          {/* Input field for the user's email */}
          <input
            className="form-control"
            type="email"
            name="email" // This will be the key in the form data object
            placeholder="Enter your email"
            autoComplete="off"
            required // Make this field required for submission
          />

          {/* Textarea field for the user's message */}
          <textarea
            className="form-control"
            name="message" // This will be the key in the form data object
            rows="10" // Sets the height of the textarea
            placeholder="Enter your message"
            autoComplete="off"
            required // Make this field required for submission
          ></textarea>

          {/* Submit button */}
          <button type="submit" value="Send">Send</button>
        </form>
      </div>
    </section>
  );
};
