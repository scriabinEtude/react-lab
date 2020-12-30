import React from 'react'
import { Form, Input, Button, Checkbox, Col, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './instagram.css'

function Instagram() {

    function onFinish() { }

    return (

        <Row justify="center" style={{ marginTop: "200px" }}>
            <Col style={{ width: "350px", padding: "40px", border: "1px solid #E0E0E0" }}>
                <Form
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Username" autoFocus />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>


    )
}

export default Instagram
