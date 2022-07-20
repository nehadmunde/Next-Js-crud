import React, { useState, useEffect } from "react";
import axios from "axios";
import FormData from "form-data";
import fileDownload from "js-file-download";
const FileUpload = () => {
  const [img, setImg] = useState("");
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const configAxios = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  const formData = new FormData();

  const onFileChange = (e) => {
    setImg(e.target.files[0]);
  };

  const onFileUpload = async () => {
    console.log("Image", img);
    formData.append("file", img);
    //alert("File Uploaded");
    await axios
      .post("http://localhost:9001/todo/file", formData, configAxios)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:9001/todo/file")
      .then((res) => {
        setData(res.data);
        setFlag(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [flag]);

  const downloadFile = async (id) => {
    console.log("file", id);
    await axios
      .get(`http://localhost:9001/todo/download/${id}`)
      .then((res) => {
        console.log(res.data);
        // const splitArray = res.data.split("\\");
        // const newArray = splitArray[splitArray.length - 1];
        // fileDownload(splitArray.join("\\"), newArray);
        fileDownload(res.data, "neha");
        alert("File Downloaded.");
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="mt-4">
        <div className="col-md-6 offset-2 ">
          <h1>File Upload</h1>
          <hr />
          <label htmlFor="exampleInputEmail1" className="form-label">
            Select File for Upload :
          </label>
          <input
            type="file"
            name="file"
            onChange={onFileChange}
            className="form-control"
          />
          <br />
          <button className="btn btn-success" onClick={onFileUpload}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-file-earmark-arrow-up"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707V11.5z" />
              <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
            </svg>{" "}
            Upload
          </button>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <h1 className=" text-center">View File Uploaded</h1>

          <div className="col-md-6 offset-2  mt-5">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Image</th>
                  <th scope="col">Download</th>
                </tr>
              </thead>
              <tbody>
                {data.map((ele, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{i + 1}</th>

                      <td>
                        <img src={data.file} alt="file" />
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-info btn-sm"
                          onClick={() => downloadFile(ele._id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-file-earmark-arrow-down-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileUpload;
