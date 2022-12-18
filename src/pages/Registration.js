import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { CustomField } from "../components/customFiled/CustomField";
import { Layout } from "../components/mainLayout/Layout";
import { postUser } from "../helpers/axiosHelpers";

const initialState = {
  name: "",
  email: "",
  pin: "",
  confirmPin: "",
};
const Registration = () => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (value && (name === "pin" || name === "confirmPin")) {
      if (!+value) {
        return alert("Only number allowed");
      }
    }

    setForm({
      ...form,
      [name]: value,
    });
    console.log(name, value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPin, ...rest } = form;
    if (confirmPin !== rest.pin) {
      toast.error("Pin do not match");
    }
    const { status, message } = await postUser(rest);
    console.log(form);

    toast[status](message);
  };

  const fields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
      placeholder: "",
      value: form.name,
    },

    {
      name: "email",
      label: "Email",
      type: "text",
      required: true,
      placeholder: "",
      value: form.email,
    },
    {
      name: "pin",
      label: "Pin",
      type: "pin",
      required: true,
      minLength: "4",
      maxLength: "4",
      placeholder: "1234",
      value: form.pin,
    },
    {
      name: "confirmPin",
      label: "Confirm Pin",
      type: "pin",
      required: true,
      minLength: "4",
      maxLength: "4",
      placeholder: "****",
      value: form.confirmPin,
    },
  ];
  return (
    <Layout>
      <div className="mt-5 pt-4 ">
        <Container>
          <Row className="login-page shadow-lg">
            <Col className="bg-primary  d-none d-lg-flex direction-column justify-content-center align-items-center">
              <div className="info p-2 pt-5 text-white">
                <h1> Welcome Back </h1>
                <p className="mt-5">
                  Manage your financial crisis by tracking daily transaction
                </p>
              </div>
            </Col>
            <Col className="p-5">
              <div className="form">
                <h2>
                  <i className="fa-solid fa-registered"></i> Registration
                </h2>
                <Form onSubmit={handleOnSubmit}>
                  {fields.map((item, i) => (
                    <CustomField key={i} {...item} onChange={handleOnChange} />
                  ))}
                  <Button className="" variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>

                <div className="text-end">
                  Already have an account <Link to="/">Login Now</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Registration;
