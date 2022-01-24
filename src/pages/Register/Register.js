import { React, useRef } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import { default as schema } from "./schema.js";
import { registerUser } from "../../api/fetchProperties.js";

const Register = () => {
  const firstNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const values = {
      firstName: firstNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      passwordConfirm: passwordConfirmRef.current.value,
    };
    
    const response = registerUser(values)
    return response;
  }
  // 	schema
  // 		.validate(values, { abortEarly: false })
  // 		.then(() => {
  // 			setErrors(() => ({}));
  // 			signUpWithEmailAndPassword(values);
  // 		})
  // 		.catch((validationErrors) => {
  // 			const errors = {};

  // 			validationErrors.inner.forEach((validationError) => {
  // 				errors[validationError.path] = validationError.message;
  // 			});

  // 			setErrors(() => errors);
  // 		});

  return (
    <>
      <div className="d-flex justify-content-center m-3">
        <Card style={{ width: "32rem" }}>
          <Card.Body className="bg-light">
            <h1 className="text-center fw-light fs-3 my-3">Sign Up</h1>
            {/* {authError && (
            <Alert variant="danger text-center">{authError.message}</Alert>
          )} */}
            <Form className="p-2" onSubmit={(e) => handleSubmit(e)}>
              <div className="d-flex gap-2">
                <Form.Group className="w-50 mb-3">
                  <Form.Label htmlFor="input_firstName">First name</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      id="input_firstName"
                      type="text"
                      placeholder="John"
                      ref={firstNameRef}
                      // isInvalid={Boolean(errors?.firstname)}
                    />
                    <Form.Control.Feedback type="invalid">
                      {/* {errors?.firstname} */}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </div>
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
              <Form.Group className="mb-3">
                <Form.Label htmlFor="input_password_confirm">
                  Password confirmation
                </Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    id="input_password_confirm"
                    type="password"
                    placeholder="Password Confirmation"
                    ref={passwordConfirmRef}
                    // isInvalid={Boolean(errors?.passwordConfirm)}
                  />
                  <Form.Control.Feedback type="invalid">
                    {/* {errors?.passwordConfirm} */}
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
                <span>Sign Up</span>
                {/* {isLoading && (
                <div
                  className="spinner-border spinner-border-sm"
                  role="status"
                ></div>
              )} */}
              </Button>
            </Form>
          </Card.Body>
        <div className="m-3">
          <span>Do you already have an account? </span>
          <Link to="/logIn" className="text-decoration-none">
            Log in
          </Link>
        </div>
        </Card>
      </div>
    </>
  );
};
export default Register;
