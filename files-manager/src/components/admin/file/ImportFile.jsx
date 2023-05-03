
import "./style.scss";
import { useState } from "react";
import axiosClient from "../../../axios";
import { useNavigate } from "react-router-dom";





const ImportFile = () => {
  const [file, setFile] = useState("");
  const [label, setLabel] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();


  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("label", label);
    formData.append("name", name);
    axiosClient.post("/admin/import-file", formData)
      .then((response) => {
        if (response.status === 200){
        alert("The file imported successfully")
        navigate("/admin/home/list-file")
        }
      })
      .catch((error) => {
        alert("The file imported failled")
        console.log(error);
      });
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "name":
        setName(value);
        break;
      case "label":
        setLabel(value);
        break;
      case "file":
        setFile(e.target.files[0]);
        break;
      default:
        break;
    }
  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleFormSubmit}>
              <div className="col-md-12">
                <label htmlFor="name">Flie Name</label>
                <input type="text" id="name" onChange={(e) => handleInputChange(e)} className="form-control rounded-0" placeholder="Flie Name" required />
                <div className="error"></div>
              </div>
              <div className="col-md-12">
                <label htmlFor="label">Label</label>
                <input type="text" id="label" onChange={(e) => handleInputChange(e)} className="form-control rounded-0" placeholder="Label" required />
                <div className="error"></div>
              </div>
              <div className="formInput" class="col-md-12">
                <label class="form-label" for="customFile">Input File </label>
                <input type="file" id="file" onChange={(e) => handleInputChange(e)} class="form-control" required />
              </div>
              <button type="submit" class="btn btn-secondary btn-lg">
                Send
              </button>
            </form>

          </div>
        </div>
      </div>

    </div>

  )
};
export default ImportFile;