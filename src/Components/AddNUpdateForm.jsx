import { Button, Form, Input, Space, Switch, Typography } from 'antd';
import axios from 'axios';
import React, { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const { Title } = Typography

const AddNUpdateForm = ({ setData, editData, setEditData, data }) => {
    const [form] = Form.useForm()
    const navigate = useNavigate()


    console.log('editDtaaa', editData)


    const handleSubmit = useCallback((values) => {
        console.log('valuesss', values)


        if (editData) {
            let temp = [...data]
            temp[editData?.idx] = values
            console.log('tempDTafayfuag', temp)

            setData(temp)

            axios.post('https://jsonplaceholder.typicode.com/users', temp)
                .then(response => {
                    console.log('Posted data:', response.data);
                    
                })
                .catch(error => {
                    console.error('Error posting data:', error);
                });
        } else {
            let tempData = [...data, values]
            axios.post('https://jsonplaceholder.typicode.com/users', tempData)
                .then(response => {
                    console.log('Posted data:', response.data);
                
                })
                .catch(error => {
                    console.error('Error posting data:', error);
                });
        }


        form.resetFields();
        setEditData(null)
        navigate('/')

    }, [data, editData]
    )


    useEffect(() => {
        if (editData != null) {
            form.setFieldsValue({
                name: editData?.value?.name,
                email: editData?.value?.email,
                phone: editData?.value?.phone,
                status: editData?.value?.status
            });
        }
    }, [editData])



    return (
        <div className='form-container'>
            <Space className='form-card' direction='vertical'>
                <Title level={4} style={{ margin: 0 }}>{editData ? 'Edit User' : 'Add User'}</Title>
                <Form
                    layout="vertical"
                    size="large"
                    style={{ width: "100%" }}
                    onFinish={handleSubmit}
                    form={form}
                    initialValues={
                        { staus: false }
                    }
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please enter name ",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                type: "email",
                                required: true,
                                message: "Please input valid email",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[{
                            required: true,
                            message: 'Please input your mobile number'
                        }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Status"
                        name="status"
                    >
                        <Switch />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ width: "100%" }}

                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Space>
        </div>
    )
}

export default AddNUpdateForm