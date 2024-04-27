import React, { useEffect, useState } from 'react';
import Dashboard from './Components/Dashboard'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddNUpdateForm from './Components/AddNUpdateForm';
import './App.css'
import axios from 'axios';

function App() {


  const [data, setData] = useState([])

  const [editData, setEditData] = useState(null)


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log('Users data:', response.data);
        setData(response.data)
      })
      .catch(error => {
        console.error('Error fetching users data:', error);
      });
  }, [])




  const router = createBrowserRouter([

    {
      path: "/",
      element: <Dashboard data={data} setEditData={setEditData} editData={editData} />,
    },
    {
      path: "/addUpdateUser",
      element: <AddNUpdateForm data={data} setEditData={setEditData} editData={editData} setData={setData} />
    },
  ]);







  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
