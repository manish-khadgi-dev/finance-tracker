import React from "react";
import { Form } from "react-bootstrap";

export const CustomField = ({ label, forwardedRef, ...rest }) => {
  return (
    <div>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...rest} ref={forwardedRef} />
      </Form.Group>
    </div>
  );
};
