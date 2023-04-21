import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";
import { VideoCameraAddOutlined } from "@ant-design/icons";
import "../../assets/scss/Home.scss";

const { TextArea } = Input;

const ConsultationRequest = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [formData, setFormData] = useState(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      setFormData(values);
      form.resetFields();
      setIsModalVisible(false);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button
        className="videobutton"
        onClick={showModal}
        icon={<VideoCameraAddOutlined />}
      ></Button>
      <Modal
        title="Video Canlı Zəng"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Adınız" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Whatsapp Nömrəniz"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="interests"
            label="Maraqlandığınız məhsullar"
            rules={[{ required: true }]}
          >
            <TextArea rows={3} />
          </Form.Item>
        </Form>
      </Modal>
      {formData && (
        <Modal
          title="Video Konsultasiya"
          visible={true}
          footer={null}
          onCancel={() => setFormData(null)}
        >
          <p>Adınız: {formData.name}</p>
          <p>Whatsapp Nömrəniz: {formData.phone}</p>
          <p>Maraqlandığınız məhsullar: {formData.interests}</p>
          <p>Sizinlə tez bir zamanda əlaqə saxlayacağıq.</p>
        </Modal>
      )}
    </>
  );
};

export default ConsultationRequest;
