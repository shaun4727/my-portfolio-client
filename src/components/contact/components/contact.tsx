'use client';

import '../assets/contact.css';
import Image from 'next/image';
import { Button, Col, ConfigProvider, Form, FormProps, Input, Row } from 'antd';
import { MessageType } from '@/types';
import { toast } from 'sonner';
import { sendMessageService } from '@/services/MessageService';
const { TextArea } = Input;

export default function ContactSection() {
  const [form] = Form.useForm();
  const onFinish: FormProps<MessageType>['onFinish'] = async (values) => {
    let toastId: string | number = 'contact';

    try {
      toastId = toast.loading('...Loading', { id: toastId });

      const messageData = {
        email: values.email,
        fullname: values.fullname,
        message: values.message,
      };

      const res = await sendMessageService(messageData);

      if (res?.success) {
        form.resetFields();
        toast.success(res?.message, { id: toastId });
      } else {
        toast.error(res?.message, { id: toastId });
      }
    } catch (err) {
      toast.error(err as string, { id: toastId });
    }
  };
  return (
    <div className="contact-section default-padding-body">
      <Row gutter={[16, 16]} className="contact-row">
        <Col span={24} className="gutter-row">
          <div className="contact-header">
            <Image
              src="/images/static/messageIcon.svg"
              width={100}
              height={100}
              className="message-icon"
              alt="message-icon"
            />
            <h4 className="title">I would love to hear from you</h4>
          </div>
        </Col>
      </Row>
      <Row gutter={[16, 16]} className="contact-form-row">
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          className="gutter-row mail-section"
        >
          <h4 className="form-title">send me mail</h4>
          <p className="email-address">
            {' '}
            <Image
              src="/images/static/mailIcon.svg"
              width={100}
              height={100}
              className="mail-icon"
              alt="mail-icon"
            />
            shaunhossain655@gmail.com
          </p>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          className="gutter-row contact-form-col"
        >
          <ConfigProvider
            theme={{
              components: {
                Form: {
                  /* here is your component tokens */
                  labelColor: '#000',
                },
              },
              token: { fontSize: 14 },
            }}
          >
            <Form
              className="contact-form-message"
              name="basic"
              form={form}
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item<MessageType>
                label="Name"
                name="fullname"
                className="label-input"
                rules={[{ required: true, message: 'Please input your name!' }]}
              >
                <Input
                  placeholder="Enter your fullname"
                  className="name-input"
                />
              </Form.Item>
              <Form.Item<MessageType>
                label="Email"
                name="email"
                className="label-input"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please enter a valid email!' },
                ]}
              >
                <Input placeholder="Enter your email" className="input" />
              </Form.Item>
              <Form.Item<MessageType>
                label="Message"
                name="message"
                className="label-input"
                rules={[{ required: true, message: 'Write your message!' }]}
              >
                <TextArea
                  showCount
                  maxLength={1000}
                  placeholder="Type your message"
                  style={{ height: 120, resize: 'none' }}
                />
              </Form.Item>
              <Form.Item label={null}>
                <Button className="message-submit" htmlType="submit">
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </ConfigProvider>
        </Col>
      </Row>
    </div>
  );
}
