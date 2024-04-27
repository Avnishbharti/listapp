import { Icon } from '@iconify/react/dist/iconify.js';
import { Avatar, Button, Col, Row, Space, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography

const Dashboard = ({ data, setEditData }) => {
    const navigate = useNavigate()


    const handleEdit = (value) => {

        console.log('dkjghsjklma;,',value)
        setEditData(value)
        navigate('/addUpdateUser')
    }


    return (
        <div style={{ width: '99vw', height: '92vh', display: 'flex', flexDirection: 'column', gap: '50px', paddingLeft: '24px' }}>
            <div className='navBar'  >
                <div className='navsection'>
                    <Title level={4} style={{ margin: 0 }}>DashBoard</Title>
                </div>
                <Button
                    type='primary'
                    onClick={() => {
                        navigate('/addUpdateUser')
                    }}
                >
                    Add user
                </Button>

            </div>
            <Space direction='vertical' style={{ width: '100%', height: '450px', overflow: 'auto' }}>
                {
                    data?.map((item,idx) => {
                        return (
                            <Space key={idx} direction='vertical' className='list-card'  >
                                <Row>
                                    <Col span={18}>
                                        <Space direction='vertical'>
                                            <Space align='center'>
                                                <Avatar size={"large"}>
                                                    {item?.name?.charAt(0)?.toUpperCase()}
                                                </Avatar>
                                                <Title level={5} style={{ margin: 0 }}>
                                                    {item?.name}
                                                </Title>
                                            </Space>
                                            <Space>
                                                <Icon icon="fluent:mail-24-regular" />
                                                <Text>{item?.email}</Text>
                                            </Space>
                                            <Space>
                                                <Icon icon="fluent:phone-24-regular" />
                                                <Text>{item?.phone}</Text>
                                            </Space>
                                        </Space>
                                        <Text>

                                        </Text>
                                    </Col>
                                    <Col span={6}>
                                        <Button size='small' onClick={() => { handleEdit(item) }} >Edit</Button>
                                    </Col>
                                </Row>
                            </Space>
                        )
                    })
                }

            </Space>




        </div>
    );
}

export default Dashboard