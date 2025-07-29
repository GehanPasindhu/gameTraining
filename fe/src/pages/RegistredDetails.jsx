import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { fetchCourses, fetchRegistrations } from "../utils/api";

function RegistredDetails() {
    const [registrations, setRegistrations] = useState([]);
    const [courses, setCourses] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    const loadData = async () => {
        try {
          const [courseRes, regRes] = await Promise.all([
            fetchCourses(),
            fetchRegistrations(token),
          ]);
  
          setCourses(courseRes.data);
          setRegistrations(regRes.data);
        } catch (err) {
          console.error("Failed to load data", err);
        }
      };
  
      loadData();
  }, []);

  const courseMap = courses.reduce((acc, course) => {
    acc[course.CourseId] = course.title;
    return acc;
  }, {});


  const columns = [
    {
      title: "Full Name",
      dataIndex: "full_name",
      key: "full_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      key: "phone_number",
    },
    {
        title: "Course",
        dataIndex: "course_id",
        key: "course_id",
        render: (id) => courseMap[id] || "N/A",
      },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
    }
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Course Registrations</h2>
      <Table
        columns={columns}
        dataSource={registrations}
        rowKey={(record) => record.id}
        bordered
      />
    </div>
  );
}

export default RegistredDetails;
