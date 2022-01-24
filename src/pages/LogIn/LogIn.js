import { React, useRef } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
// import { default as schema } from "./schema.js";

const LogIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();


  function handleSubmit(event) {
    event.preventDefault();

    const values = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    return values;
  }
  return (
    <>
      <div className="d-flex justify-content-center m-3">
        <Card style={{ width: "32rem" }}>
          <Card.Body className="bg-light">
            <h1 className="text-center fw-light fs-3 my-3">Log In</h1>
            {/* {authError && (
            <Alert variant="danger text-center">{authError.message}</Alert>
          )} */}
            <Form className="p-2" onSubmit={handleSubmit}>
              <div className="d-flex gap-2"></div>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="input_email">Email address</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    id="input_email"
                    type="text"
                    placeholder="john.doe@mail.com"
                    ref={emailRef}
                    // isInvalid={Boolean(errors?.email)}
                  />
                  <Form.Control.Feedback type="invalid">
                    {/* {errors?.email} */}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="input_password">Password</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    id="input_password"
                    type="password"
                    placeholder="Password"
                    ref={passwordRef}
                    // isInvalid={Boolean(errors?.password)}
                  />
                  <Form.Control.Feedback type="invalid">
                    {/* {errors?.password} */}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Button
                className="w-100 mt-3 d-flex justify-content-center align-items-center gap-2"
                variant="primary"
                size="sm"
                type="submit"
                // disabled={isLoading}
              >
                <span>Log In</span>
                {/* {isLoading && (
                <div
                  className="spinner-border spinner-border-sm"
                  role="status"
                ></div>
              )} */}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default LogIn;
