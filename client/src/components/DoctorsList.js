import React from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorsList = ({doctor}) => {
    const navigate = useNavigate();
  return (
    <>
      <div className="card" onClick={()=>{
        navigate(`/book-appointment/${doctor._id}`);
      }}
      style={{
        cursor: "pointer",
      }}
      >
        <div className="card-header">
          Dr {doctor.firstName} {doctor.lastName}
        </div>
        <div className="card-body">
            <p className="card-text"><b>Specialization:</b> {doctor.specialization}</p>
            <p className="card-text"><b>Experience:</b> {doctor.experience} years</p>
            <p className="card-text"><b>Fees per consultation:</b> {doctor.fees}</p>
            <p className="card-text"><b>Timings:</b> {doctor.timings[0]} to {doctor.timings[1]}</p>
            {/* <p className="card-text"><b>Email:</b> {doctor.email}</p>
            <p className="card-text"><b>Phone:</b> {doctor.phone}</p>
            <p className="card-text"><b>Address:</b> {doctor.address}</p> */}
        </div>
      </div>
    </>
  );
};

export default DoctorsList;