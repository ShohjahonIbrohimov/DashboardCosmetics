import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select } from "antd";
import ImageUpload from "./ImageUpload";

const { Option } = Select;

const GForm = ({
  fields,
  handleAddCategory,
  handleUpdateCategory,
  defaults,
}) => {
  const [form] = Form.useForm();
  const [imageUrl, setimageUrl] = useState("");

  const onFinish = (values) => {
    defaults
      ? handleUpdateCategory({ ...values, img: imageUrl })
      : handleAddCategory({ ...values, img: imageUrl });
    form.resetFields();
  };

  useEffect(() => {
    if (defaults) {
      let data = defaults.data;
      form.setFieldsValue({
        ...data,
        ...data.title,
        descUz: data?.desc?.uz,
        descRu: data?.desc?.ru,
      });
      setimageUrl(defaults?.data?.img);
    } else {
      form.resetFields();
    }
  }, [defaults]);

  return (
    <Form form={form} onFinish={onFinish} size='large'>
      {fields.map((field) => {
        if (field.type === "select") {
          return (
            <Form.Item
              name={field.name}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select placeholder={field.placeHolder} allowClear>
                {field.options.map((o) => (
                  <Option value={o.value}>{o.label}</Option>
                ))}
              </Select>
            </Form.Item>
          );
        } else if (field.type === "image") {
          return <ImageUpload imageUrl={imageUrl} setimageUrl={setimageUrl} />;
        } else {
          return (
            <Form.Item
              name={field.name}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder={field.placeHolder} />
            </Form.Item>
          );
        }
      })}

      <Form.Item>
        <Button
          block
          type='primary'
          htmlType='submit'
          className='login-form-button'
        >
          {defaults ? "UPDATE" : "ADD"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default GForm;
