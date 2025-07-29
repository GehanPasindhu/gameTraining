
import React, { useEffect, useState } from "react";
import { fetchContacts} from "../utils/api";
import {Table } from "antd";

function ContactusMessage() {
    const [contactmessages, setCourses] = useState([]);

    useEffect(() => {
      const getcourses = async () =>{

        const token = localStorage.getItem("adminToken"); 

          await fetchContacts(token)
          .then((res) => setCourses(res.data))
          .catch((err) => console.error("Error", err));
      }
  
      getcourses()
  
    }, []);


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
          title: "Message",
          dataIndex: "message",
          key: "message",
          render: (text) => (
            <span style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>{text}</span>
          ),
        },
      ];

  return (
<div>
      <h2 className="text-2xl font-bold mb-4">Contact us</h2>
      <Table
        columns={columns}
        dataSource={contactmessages}
        bordered
        pagination={{ pageSize: 10 }}
      />
    </div>
  )
}

export default ContactusMessage