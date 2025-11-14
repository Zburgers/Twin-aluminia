import React from 'react';
import '../pages/Admine.css'; // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import donaimg from "../pages/people.png"
import {
  faSmile,
  faTachometerAlt,
  faShoppingBag,
  faChartPie,
  faComments,
  faUsers,
  faCog,
  faSignOutAlt,
  faBars,
  faSearch,
  faBell,
  faChevronRight,
  faCloudDownloadAlt,
  faCalendarCheck,
  faDollarSign,
  faPlus,
  faFilter,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons';

export const Admine = () => {
  return (
    <div>
      {/* SIDEBAR */}
      <section id="sidebar">
        <a href="#" className="brand">
          <FontAwesomeIcon icon={faSmile} />
          <span className="text">AdminHub</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="#">
              <FontAwesomeIcon icon={faTachometerAlt} />
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faShoppingBag} />
              <span className="text">My Store</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faChartPie} />
              <span className="text">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faComments} />
              <span className="text">Message</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faUsers} />
              <span className="text">Team</span>
            </a>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <a href="#">
              <FontAwesomeIcon icon={faCog} />
              <span className="text">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <FontAwesomeIcon icon={faSignOutAlt} />
              <span className="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>

      {/* CONTENT */}
      <section id="content">
        {/* NAVBAR */}
        <nav>
          <FontAwesomeIcon icon={faBars} />
          <a href="#" className="nav-link">Categories</a>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label htmlFor="switch-mode" className="switch-mode"></label>
          <a href="#" className="notification">
            <FontAwesomeIcon icon={faBell} />
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            <img src={donaimg} alt="Profile" />
          </a>
        </nav>

        {/* MAIN */}
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li><a href="#">Dashboard</a></li>
                <li><FontAwesomeIcon icon={faChevronRight} /></li>
                <li><a className="active" href="#">Home</a></li>
              </ul>
            </div>
            <a href="https://app.powerbi.com/groups/me/reports/32a63a15-4f34-44cf-8a41-b63e79d8ea49/ReportSection19db8f35706b4efb999a?experience=power-bi" className="btn-download">
              <FontAwesomeIcon icon={faCloudDownloadAlt} />
              <span className="text">view report</span>
            </a>
          </div>

          <ul className="box-info">
            <li>
              <FontAwesomeIcon icon={faCalendarCheck} />
              <span className="text">
                <h3>1020</h3>
                <p>Total Graduate Anually</p>
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faUsers} />
              <span className="text">
                <h3>2834</h3>
                <p>Re-Visitors</p>
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faDollarSign} />
              <span className="text">
                <h3>$24390</h3>
                <p>Average Package</p>
              </span>
            </li>
          </ul>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Recent Orders</h3>
                <FontAwesomeIcon icon={faSearch} />
                <FontAwesomeIcon icon={faFilter} />
              </div>
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Date Order</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td>
                        <img src={donaimg} alt="User" />
                        <p>John Doe</p>
                      </td>
                      <td>01-10-2021</td>
                      <td>
                        <span className={`status ${i % 3 === 0 ? 'completed' : i % 3 === 1 ? 'pending' : 'process'}`}>
                          {i % 3 === 0 ? 'Completed' : i % 3 === 1 ? 'Pending' : 'Process'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="todo">
              <div className="head">
                <h3>Todos</h3>
                <FontAwesomeIcon icon={faPlus} />
                <FontAwesomeIcon icon={faFilter} />
              </div>
              <ul className="todo-list">
                {[true, true, false, true, false].map((done, i) => (
                  <li key={i} className={done ? 'completed' : 'not-completed'}>
                    <p>Todo List</p>
                    <FontAwesomeIcon icon={faEllipsisV} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Admine;