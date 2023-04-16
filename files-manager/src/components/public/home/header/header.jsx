import React from 'react';
import "./style.css";
function Header() {
  return (
    <div className="public">
      <nav class="navbar navbar-inverse navbar-dark bg-dark">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">File Manager</a>
          </div>
          <ul class="nav navbar-nav navbar-right">
              <a href="/login">
                <button type="button" class="btn btn-light">Log in</button>
               </a>
          </ul>
        </div>
      </nav>
    </div>
  )

}
export default Header;
