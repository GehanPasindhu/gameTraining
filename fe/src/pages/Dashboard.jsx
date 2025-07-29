import React from "react";
import { Tabs } from "antd";
import RegistredDetails from "./RegistredDetails";
import AdminCourses from "./AdminCourses";
import ContactusMessage from "./ContactusMessage";

const Dashboard = () => {
  const items = [
    {
      key: "1",
      label: "📘 Course Details",
      children: <AdminCourses />,
    },
    {
      key: "2",
      label: "📨 Contact Messages",
      children: <ContactusMessage />,
    },
    {
      key: "3",
      label: "🎓 Course Registrations",
      children: <RegistredDetails />,
    },
  ];

  return (
    <div className="min-h-screen px-6 md:px-12 py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <h1 className="text-4xl font-extrabold text-violet-400 mb-8">
        🎮 GameForge Admin Dashboard
      </h1>

      <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl shadow-violet-500/10">
        <Tabs
          defaultActiveKey="1"
          items={items}
          tabBarGutter={32}
          tabBarStyle={{
            color: "#fff",
            fontWeight: "600",
            fontSize: "16px",
          }}
          className="custom-dark-tabs"
        />
      </div>
    </div>
  );
};

export default Dashboard;
