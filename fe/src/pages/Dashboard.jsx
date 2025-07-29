import React from "react";
import { Tabs } from "antd";
import RegistredDetails from "./RegistredDetails";
import AdminCourses from "./AdminCourses";
import MainTitle from "../components/common/MainTitle";
import ContactusMessage from "./ContactusMessage";

const Dashboard = () => {
    const items = [
        {
          key: '1',
          label: 'Course Details',
          children:  (<></>),
        },
        {
          key: '2',
          label: 'Contact Messages',
          children: (<ContactusMessage/>),
        },
        {
          key: '3',
          label: 'Course Registrations',
          children: (      <RegistredDetails />),
        },
      ];


  return (
    <div className="min-h-screen flex flex-col px-10 bg-gray-100">
      <div className="permanent-marker-regular text-4xl whitespace-nowrap">
        Dashboard
      </div>

      <Tabs defaultActiveKey="1" items={items}/>

    </div>
  );
};

export default Dashboard;
