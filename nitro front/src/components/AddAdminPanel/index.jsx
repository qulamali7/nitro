import React, { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
const AddAdminPanel = () => {
  const [data, setData] = useState(null);
  async function GetFetch() {
    try {
      const res = await fetch("http://localhost:3100/services");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function DeleteFetch(id) {
    await fetch("http://localhost:3100/services/" + id, { method: "DELETE" });
    await GetFetch();
  }

  useEffect(() => {
    GetFetch();
  }, []);
  return (
    <section id="AdminPanel">
      <table>
        <tr>
          <th>Id</th>
          <th>Icon</th>
          <th>Title</th>
          <th>Text</th>
          <th>Delete</th>
        </tr>
        {data &&
          data.map((x) => (
            <tr>
              <td>{x._id}</td>
              <td>{x.icon}</td>
              <td>{x.title}</td>
              <td>{x.text}</td>
              <td>
                <button
                  className="btn"
                  onClick={() => {
                    DeleteFetch(x._id);
                  }}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
      </table>
    </section>
  );
};

export default AddAdminPanel;
