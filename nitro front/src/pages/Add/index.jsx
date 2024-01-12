import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet-async";
import { AddForm } from "../../components/AddForm";
import AddAdminPanel from "../../components/AddAdminPanel";
const Add = () => {
  return (
    <>
      <Helmet>
        <title>Add</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <AddForm/>
      <AddAdminPanel/>
    </>
  );
};

export default Add;
