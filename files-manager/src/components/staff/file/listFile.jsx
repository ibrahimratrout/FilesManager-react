import { useState, useEffect } from 'react';
import axiosClient from '../../../axios';
import "./style.scss";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import GetAppIcon from '@mui/icons-material/GetApp';
import { Link } from "react-router-dom";
import { saveAs } from 'file-saver';
const ListFile = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axiosClient.get('/report-file')
            .then(response => {
                console.log(response.data)
                setData(response.data.files);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
   
      const exportFile = (fileId) => {
        try {
          axiosClient.get(`/export-file/${fileId}`, { responseType: 'blob' })
            .then((response) => {
              const type = response.headers['content-type'];
              const extension = type.split('/')[1];
              const file = new Blob([response.data], { type });
              saveAs(file, `file.${extension}`);
            });
        } catch (error) {
          console.error(error);
        }
      };
      
    return (
        <div className='listfile'>
        <div className='new'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">File Name</th>
                        <th scope="col">Label</th>
                        <th scope="col">Name Employee</th>
                        <th scope="col" >Upload date</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(file => (
                        <tr scope="row" key={file.id}>
                            <td>{file.file_name}</td>
                            <td>{file.label}</td>
                            <td>{file.user.name}</td>
                            <td>{file.created_at}</td>
                            <td >
                                <div class="row">
                                <Link to="" onClick={() => exportFile(file.id)}>
                                <div class="export">
                                    <GetAppIcon />
                                </div>
                                </Link>
                                <Link to={{ pathname: `/home/edit-file/${file.id}`,state: { name: file.file_name } }}>
                                    <div class="edit">
                                        <ModeEditIcon />
                                    </div>
                                </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
}
export default ListFile;
