import { Col, Row, Form } from 'antd';
import React from 'react';

export default function AuthLayout({children, onFinish}) {
  return (
    <>
        <Row justify="center" style={{marginTop:100}}>
            <Col>
                <h1>e s c h e r</h1>
            </Col>
        </Row>
        <Row justify="center">
            <Col>
                <Form
                    style={{width:300, marginTop:50}}
                    onFinish={onFinish}
                >
                    {children}
                </Form>
            </Col>
        </Row>
    </>
  )
}
