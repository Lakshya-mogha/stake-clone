import React from "react";
import Navbar from "./Navbar";

function Drawer() {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
          <Navbar/>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 min-h-full bg-base-200 text-base-content w-56">
            <li>
              <p>Sidebar Item 1</p>
            </li>
            <li>
              <p>Sidebar Item 2</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
