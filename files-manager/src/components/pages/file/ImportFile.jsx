import axios from "axios";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import "./style.scss";
import { useRef, useState, useEffect } from "react";

const ImportFile = () => {
  const [file, setFile] = useState("");
  const [label, setLabel] = useState("");
  const [name, setName] = useState("");
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    setCsrfToken(document.querySelector('meta[name="csrf-token"]').getAttribute('content'));
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const token = "6|aXXMrkN9KcEEcnxxFK0Nr1EJ1G4gYRYMaMaTIb5o";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("label", label);
    formData.append("name", name);
    console.log(formData);

    axios.post("http://127.0.0.1:8000/api/import-file", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
        'X-CSRF-TOKEN': csrfToken
      }
    })
      .then((response) => {
          alert("The file imported successfully")
        console.log(response.data);
      })
      .catch((error) => {
        alert("The file imported fail")

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
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="bottom">
          <div className="right">
            <form onSubmit={handleFormSubmit}>
              <div className="col-md-12">
                <label htmlFor="name">Flie Name</label>
                <input type="text" id="name" onChange={(e) => handleInputChange(e)} className="form-control rounded-0" placeholder="Flie Name" required />
                <div className="error"></div>
              </div>
              <div className="col-md-12">
                <label htmlFor="name">Label</label>
                <input type="text" id="label" onChange={(e) => handleInputChange(e)} className="form-control rounded-0" placeholder="Label" required />
                <div className="error"></div>
              </div>
              <div className="formInput" class="col-md-12">
                <label class="form-label" for="customFile">Input File </label>
                <input type="file" id="file"onChange={(e) => handleInputChange(e)} class="form-control" required/>
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