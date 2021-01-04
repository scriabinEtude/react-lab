import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Input, Form, Button } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AuthStatus } from '../../common/constant'
import AuthLayout from '../component/AuthLayout'
import {actions} from '../state/index'

export default function Login(){
    const dispatch = useDispatch()
    function onFinish({username, password}){
        dispatch(actions.fetchLogin(username, password))
    }

    const isLogin = useSelector(state => state.auth.status)

    return (
        <AuthLayout >
            {isLogin === AuthStatus.NotLogin &&
                <Form
                        style={{width:300, marginTop:50}}
                        onFinish={onFinish}
                >
                    <Form.Item
                    name="username"
                    rules={[{required: true, message: 'Please input your Username!'}]}
                    >
                        <Input prefix={<UserOutlined/>} placeholder="Username" autoFocus />
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
                        <Button type="primary" htmlType="submit" style={{width:'100%'}}>
                        Log in
                        </Button>
                        Or <Link to="/signup">register now!</Link>
                    </Form.Item>
                </Form>
            }

            {isLogin === AuthStatus.Login &&
                <h3>환영합니다</h3>
            }
            
        </AuthLayout>
    )
}