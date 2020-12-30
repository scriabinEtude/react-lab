import { Col, Row, Form } from 'antd';
import React from 'react';

export default function AuthLayout({children}) {
  return (
    <>
        <Row justify="center" style={{marginTop:100}}>
            <Col>
                <h1>e s c h e r</h1>
            </Col>
        </Row>
        <Row justify="center">
            <Col>
                {children}
            </Col>
        </Row>
    </>
  )
}
