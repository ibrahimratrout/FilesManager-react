import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ListIcon from '@mui/icons-material/List';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">File Meanager</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <p className="title">Operaction</p>
          <li>
            <Link to="/import-file" style={{ textDecoration: "none" }}>
              <li>
                <PublishIcon className="icon" />
                <span>Import File</span>
              </li>
            </Link>
          </li>
          <li>
            <Link to="/list-file" style={{ textDecoration: "none" }}>
              <li>
                <ListIcon className="icon" />
                <span>List File</span>
              </li>
            </Link>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <Link to="/logs" style={{ textDecoration: "none" }}>
              <li>
                <PsychologyOutlinedIcon className="icon" />
                <span>Logs</span>
              </li>
            </Link>
          </li>
          <li>
            <Link to="/logs" style={{ textDecoration: "none" }}>
              <li>
                <SettingsApplicationsIcon className="icon" />
                <span>Settings</span>
              </li>
            </Link>
          </li>
          <p className="title">USER</p>
          <li>
            <Link to="/logs" style={{ textDecoration: "none" }}>
              <li>
                <ExitToAppIcon className="icon" />
                <span>Logout</span>
              </li>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
