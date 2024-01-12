import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
import { useNavigate } from "react-router-dom";
export const AddForm = () => {
  const navigate = useNavigate();
  function handleSubmit(values) {
    fetch("http://localhost:3100/services", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
    .then(x=>navigate("/"))
  }
  return (
    <Formik
      initialValues={{ icon: "", title: "", text: "" }}
      validationSchema={Yup.object({
        icon: Yup.string().required("Required"),
        title: Yup.string().required("Required"),
        text: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values)
        setSubmitting(false);
      }}
    >
      <div className="add_form">
        <Form>
          <label htmlFor="icon">Icon</label>
          <Field name="icon" type="text" />
          <ErrorMessage name="icon" />

          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="text">Text</label>
          <Field name="text" type="text" />
          <ErrorMessage name="text" />

          <button type="submit">Submit</button>
        </Form>
      </div>
    </Formik>
  );
};
