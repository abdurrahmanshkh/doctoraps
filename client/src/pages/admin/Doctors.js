import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import { Table } from "antd";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  //get doctors
  const getDoctors = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getAllDoctors", {
        headers: {
          'authorization': `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctors();
  }, []);

  //antd table cols
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.firstName} {record.lastName}
        </span>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (text, record) => (
        <div className="d-flex">
          {record.status === "pending" ? (
            <button className="btn btn-success">Approve</button>
          ) : (
            <button className="btn btn-danger">Block</button>
          )}
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <h3 className="text-center">All Doctors</h3>
      <hr />
      <Table dataSource={doctors} columns={columns} />
    </Layout>
  );
};

export default Doctors;
