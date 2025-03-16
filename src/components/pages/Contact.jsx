import { Form, useActionData } from "react-router-dom";
import { useState, useEffect } from "react";
import PageContent from "../PageContent";
import "../../styles/index.scss";

const ContactPage = () => {
  const actionData = useActionData();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (actionData && actionData.success) {
      console.log(formData);
      console.log("The formData was successfully updated to firebase!");

      setFormData({ firstName: "", lastName: "", email: "" });
    }
  }, [actionData]);

  return (
    <PageContent title="Contact Mack Parker">
      <div className="contact-container">
        <Form method="post" className="contact-form">
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {actionData?.success && (
            <p className="success-message">Submitted successfully!</p>
          )}
        </Form>
      </div>
    </PageContent>
  );
};

export default ContactPage;

export async function formSubmission({ request }) {
  const data = await request.formData();

  const portfolioData = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    email: data.get("email"),
  };

  let url =
    "https://web3350-portfolio-9e9d2-default-rtdb.firebaseio.com/users.json";

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(portfolioData),
  });

  if (!response.ok) {
    throw new Response(
      JSON.stringify({ message: "Could not fetch portfolio projects" }),
      { status: 500 }
    );
  }

  return { success: true };
}
