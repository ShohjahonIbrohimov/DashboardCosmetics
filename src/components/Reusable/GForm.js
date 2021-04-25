import React, { useEffect } from "react";
import { Form, Input, Button, Select } from "antd";

const { Option } = Select;

const GForm = ({
  fields,
  handleAddCategory,
  handleUpdateCategory,
  defaults,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    defaults ? handleUpdateCategory(values) : handleAddCategory(values);
  };

  useEffect(() => {
    if (defaults) {
      form.setFieldsValue({ ...defaults.data.title });
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
