import React from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { CustomField } from "../components/customFiled/CustomField";
import { Layout } from "../components/mainLayout/Layout";

const Login = () => {
  const handleOnChange = (e) => {
    console.log(e);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const formInput = [
    // {
    //   name: "Name",
    //   label: "Name",
    //   type: "text",
    //   required: true,
    //   placeholder: "",
    // },

    {
      name: "email",
      label: "Email",
      type: "text",
      required: true,
      placeholder: "",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      required: true,
      placeholder: "***************",
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
                  <i class="fa-solid fa-registered"></i> Login
                </h2>
                <Form onSubmit={handleOnSubmit}>
                  {formInput.map((item, i) => (
                    <CustomField key={i} {...item} onChange={handleOnChange} />
                  ))}
                  <Button className="" variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Login;
