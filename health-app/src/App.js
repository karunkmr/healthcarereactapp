import React, { useState } from 'react';
import logo from './images/logo.jpg';
import docpic from './images/doc1.png';
import mappic from './images/map.jpg';
import './bootstrap/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src={logo} />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Login / Register <span className="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="btn btn-primary" href="#">I am a Doctor</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <section className="home-banner d-flex align-items-center">
        <div className="container">
          <h1>Looking for Doctor?</h1>
          <h3>Make Appointment</h3>
          <form className="row">
            <div className="col-sm-3">
              <input type="text" className="form-control" placeholder="Condition, Procedure, Doctor Name" />
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" placeholder="City or zipcode" />
            </div>
            <div className="col-sm-2">
              <input type="text" className="form-control" placeholder="Date" />
            </div>
            <div className="col-sm-3">
              <button className="btn btn-primary">Find Doctor</button>
            </div>
          </form>
        </div>
      </section>
      <section className="container-fluid">
        <form className="row py-3">
          <div className="col-sm-6">
            <input type="text" className="form-control" placeholder="Condition, Procedure, Doctor Name" />
          </div>
          <div className="col-sm-2">
            <input type="text" className="form-control" placeholder="City or zipcode" />
          </div>
          <div className="col-sm-2">
            <input type="text" className="form-control" placeholder="Date" />
          </div>
          <div className="col-sm-2">
            <button className="btn btn-primary">Find Doctor</button>
          </div>
        </form>
        <div className="row bg-light py-3">
          <ul class="nav nav-pills align-items-center px-2">
            <li class="nav-item mx-2">
              <strong>Filter by</strong>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link btn btn-outline-secondary btn-sm" href="#">Primary care doctor</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link btn btn-outline-secondary btn-sm" href="#">Gender</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link btn btn-outline-secondary btn-sm" href="#">Availability</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link btn btn-outline-secondary btn-sm" href="#">Hospital affiliations</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link btn btn-outline-secondary btn-sm" href="#">Special Hours</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link btn btn-outline-secondary btn-sm" href="#">Child Friendly</a>
            </li>
            <li class="nav-item mx-2">
              <a class="nav-link btn btn-outline-secondary btn-sm" href="#">Languages</a>
            </li>
          </ul>
        </div>
        <div className="py-3">
          350 Primary care doctors (PCP) Near You
        </div>
        <div className="col-lg-12 doctors-list">
          <div className="row border border-secondary rounded-lg py-2 mb-3">
            <div className="col-md-1">
              <img src={docpic} className="rounded-circle" />
            </div>
            <div className="col-md-2">
              <h5 className="m-0">Dr. Neha Pathak, DPM</h5>
              <h6 className="m-0">Primary care doctor, Internist</h6>
              <label className="m-0">30 Broad Street, 401 New York, NYK10004</label>
              <label className="m-0">(4512)</label>
            </div>
            <div className="col-md-4">
              <label>Availability on Monday, 24 Feb 2020 </label>
              <ul class="nav nav-pills align-items-center">
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm" href="#">10:30 am</a>
                </li>
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm active" href="#">10:30 am</a>
                </li>
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm" href="#">10:30 am</a>
                </li>
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm" href="#">10:30 am</a>
                </li>
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm" href="#">10:30 am</a>
                </li>
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm" href="#">10:30 am</a>
                </li>
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm" href="#">10:30 am</a>
                </li>
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm" href="#">10:30 am</a>
                </li>
                
              </ul>
            </div>
            <div className="col-md-2 text-center d-flex flex-column align-itmes-center">
              <label>1 mi</label>
              <button className="btn btn-outline-primary btn-sm text-nowrap">Get Direction</button>
            </div>
            <div className="col-md-3">
              <img src={mappic} className="img-fluid" />
            </div>
          </div>
          <div className="row border border-secondary rounded-lg py-2 mb-3">
            <div className="col-md-1">
              <img src={docpic} className="rounded-circle" />
            </div>
            <div className="col-md-2">
              <h5 className="m-0">Dr. Neha Pathak, DPM</h5>
              <h6 className="m-0">Primary care doctor, Internist</h6>
              <label className="m-0">30 Broad Street, 401 New York, NYK10004</label>
              <label className="m-0">(4512)</label>
            </div>
            <div className="col-md-4">
              <label>Availability on Monday, 24 Feb 2020 </label>
              <ul class="nav nav-pills align-items-center">
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm" href="#">10:30 am</a>
                </li>
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm active" href="#">10:30 am</a>
                </li>
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm" href="#">10:30 am</a>
                </li>
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm" href="#">10:30 am</a>
                </li>
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm" href="#">10:30 am</a>
                </li>
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm" href="#">10:30 am</a>
                </li>
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm" href="#">10:30 am</a>
                </li>
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm" href="#">10:30 am</a>
                </li>
                
              </ul>
            </div>
            <div className="col-md-2 text-center d-flex flex-column align-itmes-center">
              <label>1 mi</label>
              <button className="btn btn-outline-primary btn-sm text-nowrap">Get Direction</button>
            </div>
            <div className="col-md-3">
              <img src={mappic} className="img-fluid" />
            </div>
          </div>
          <div className="row border border-secondary rounded-lg py-2 mb-3">
            <div className="col-md-1">
              <img src={docpic} className="rounded-circle" />
            </div>
            <div className="col-md-2">
              <h5 className="m-0">Dr. Neha Pathak, DPM</h5>
              <h6 className="m-0">Primary care doctor, Internist</h6>
              <label className="m-0">30 Broad Street, 401 New York, NYK10004</label>
              <label className="m-0">(4512)</label>
            </div>
            <div className="col-md-4">
              <label>Availability on Monday, 24 Feb 2020 </label>
              <ul class="nav nav-pills align-items-center">
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm" href="#">10:30 am</a>
                </li>
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm active" href="#">10:30 am</a>
                </li>
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm" href="#">10:30 am</a>
                </li>
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm" href="#">10:30 am</a>
                </li>
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm" href="#">10:30 am</a>
                </li>
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm" href="#">10:30 am</a>
                </li>
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm" href="#">10:30 am</a>
                </li>
                <li class="nav-item m-1">
                  <a class="nav-link btn btn-outline-secondary btn-sm" href="#">10:30 am</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 text-center d-flex flex-column align-itmes-center">
              <label>1 mi</label>
              <button className="btn btn-outline-primary btn-sm text-nowrap">Get Direction</button>
            </div>
            <div className="col-md-3">
              <img src={mappic} className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
