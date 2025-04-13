import React from "react";

export const Contact = () => {
 const handleFormSubmit=()=>{
  
  const formInputData=Object.fromEntries(FormData.entries())
  console.log(formInputData)
  //or else before we used usestate with help of obj pass value and 
  //and on change functions to handle them 
 }

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

<div className="contact-wrapper container">
      <form action={handleFormSubmit}>
        <input
          className="form-control"
          type="text"
          name="username"
          placeholder="Enter your name"
          autoComplete="off"
          required
        />

        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Enter your email"
          autoComplete="off"
          required
        />

        <textarea
          className="form-control"
          name="message"
          rows="10"
          placeholder="Enter your message"
          autoComplete="off"
          required
        ></textarea>

        <button type="submit" value="Send">Send</button>
      </form>
      </div>
    </section>
  );
};
