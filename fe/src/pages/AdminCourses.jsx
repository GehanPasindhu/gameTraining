import React, { useEffect, useState } from "react";
import { addCourse, fetchCourses } from "../utils/api";
import { Button, Table,  Form, Input, Modal } from "antd";
import { toast } from "react-toastify";

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const getcourses = async () =>{
    await fetchCourses()
    .then((res) => setCourses(res.data))
    .catch((err) => console.error("Error", err));
}

  useEffect(() => {
   

    getcourses()

  }, []);

  const handleAddCourse = () => {

    const token = localStorage.getItem("adminToken");

    form
  .validateFields()
  .then(async (values) => {
    try {
      const data = {
        ...values,
        image_url: "/images/logo.png", 
      };

      await addCourse(data, token);
      toast.success("Course added successfully");

      form.resetFields();
      setIsModalOpen(false);
      getcourses();
    } catch (err) {
      toast.error("Failed to add course");
      console.error(err);
    }
  })
  .catch((info) => console.log("Validate Failed:", info));
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
        title: "Duration",
        dataIndex: "duration",
        key: "duration",
      }
  ];

  return (
    <div>
<div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Courses</h2>
        <Button type="primary" onClick={() => setIsModalOpen(true)}>
          + New Course
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={courses}
        rowKey={(record) => record.id}
        bordered
      />

<Modal
        title="Add New Course"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleAddCourse}
        okText="Add"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="title"
            label="Course Title"
            rules={[{ required: true, message: "Please enter course title" }]}
          >
            <Input placeholder="Enter course title" />
          </Form.Item>

          <Form.Item
            name="duration"
            label="Course Duration"
            rules={[{ required: true, message: "Please enter course duration" }]}
          >
            <Input placeholder="Enter course duration" />
          </Form.Item>

          <Form.Item
            name="description"
            label="Course Description"
            rules={[{ required: true, message: "Please enter description" }]}
          >
            <Input.TextArea rows={4} placeholder="Enter description" />
          </Form.Item>
        </Form>
      </Modal>

    </div>
  );
};

export default AdminCourses;
