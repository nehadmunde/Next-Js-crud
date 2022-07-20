import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Edit = ({ title }) => {
  // data from display page
  const router = useRouter();
  const query = router.query;
  // console.log("data from router", query);
  const [task, setTask] = useState({
    name: query.name,
    date: query.date,
  });
  const [data, setData] = useState();

  const onTaskHandle = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const submitTask = async (e) => {
    await axios
      .put(`http://localhost:9001/todo/edit/${e}`, task)
      .then((res) => {
        alert("Data Updated Sucessfull.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mt-4">
      <div className="col-md-6 offset-3">
        <h1>Edit To do List</h1>
        <hr />
        <label htmlFor="exampleInputEmail1" className="form-label">
          Enter Task Here :
        </label>
        <input
          type="text"
          name="name"
          value={task.name}
          className="form-control"
          onChange={onTaskHandle}
        />
        <br />
        <label htmlFor="exampleInputEmail1" className="form-label">
          Enter Date Here :
        </label>
        <input
          type="date"
          name="date"
          value={task.date}
          className="form-control"
          onChange={onTaskHandle}
        />
        <br />
        <button
          type="submit"
          className="btn btn-success"
          onClick={() => submitTask(query._id)}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Edit;
