import React from 'react'
import { Button, Input, Form } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from './state/index'

function Link() {

    const dispatch = useDispatch()
    const links = useSelector(state => state.link.links)
    const [form] = Form.useForm()

    function addLink({ title, url }) {
        linkValidation(url)

        dispatch(actions.appendValue('links', {
            title,
            url
        }))
        form.resetFields()
    }

    function linkValidation(url) {
        // const headers = new Headers({
        //     'Content-Type': 'text/xml',
        // })
        // fetch(url, { headers })

        // const IsWebAlive = new XMLHttpRequest()
        // IsWebAlive.addEventListener('load', () => console.log(this.reponseText))
        // IsWebAlive.open("GET", url)
        // IsWebAlive.send()
    }

    return (
        <div>
            <h1>Links</h1>
            {links.map((item, i) => (
                <div key={i}>
                    <span>{item.title}</span>&nbsp;&nbsp;&nbsp;
                    <span><a href={item.url}>{item.url}</a></span>
                </div>
            ))}
            <Form
                style={{ marginTop: "20px" }}
                form={form}
                onFinish={addLink}
            >
                <Form.Item
                    style={{ float: "left", width: "200px" }}
                    lable="Title"
                    name="title"
                    rules={[{ required: false, message: 'title' }]}
                >
                    <Input placeholder="title" />
                </Form.Item>
                <Form.Item
                    style={{ float: "left", width: "200px" }}
                    lable="Url"
                    name="url"
                    rules={[{ required: true, message: 'url' }]}
                >
                    <Input placeholder="url" />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">add link</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Link
