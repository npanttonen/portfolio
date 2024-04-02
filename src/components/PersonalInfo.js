import React from 'react';
import contactImage from './images/contact.png';
import emailImage from './images/email.png';
import phoneImage from './images/phone.png';
import myImage from './images/f1.jpg';

const PersonalInfo = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="row no-gutters">
          <div className="col-md-3">
            <img
              src={myImage}
              alt="Niko Pänttönen"
              className="card-img"
              style={{ width: '100%', height: 'auto' }} 
            />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h2 className="card-title">Personal Information</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <img
                    src={contactImage} // Add image source here
                    alt="Name:"
                    className="img-rounded"
                    style={{ width: '30px', height: '30px', margin: 5 }} 
                    /> Niko Pänttönen
                </li>
                <li className="list-group-item">
                    <img
                        src={emailImage} // Add image source here
                        alt="Name:"
                        className="img-rounded"
                        style={{ width: '30px', height: '30px', margin: 5 }} 
                    /> npanttonen@gmail.com
                </li>
                <li className="list-group-item">
                    <img
                        src={phoneImage} // Add image source here
                        alt="Name:"
                        className="img-rounded"
                        style={{ width: '30px', height: '30px', margin: 5 }} 
                    /> +358 451051188
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
