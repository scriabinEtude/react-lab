import React from 'react'
import { Menu, Dropdown, Button } from 'antd';
import { BarsOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';

function Pagemover({ pages }) {
    return (
        <Dropdown
            overlay={
                <Menu>
                    {pages.map((page, index) => (
                        <Menu.Item key={index}><Link to={page.path}>{page.name}</Link></Menu.Item>
                    ))}
                </Menu>
            }
        >
            <Button icon={<BarsOutlined />}></Button>
        </Dropdown>
    )
}

export default Pagemover
