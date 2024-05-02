import { act, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout';
import Admin from "./pages/Admin"
import Post from "./pages/Post"
import Edit from "./pages/Edit"
import NoPage from "./pages/Nopage"
import { useEffect } from 'react';
import { BASE_URL, endPoints } from './services/api';
import { getAllData } from './services';
import { useReducer } from 'react';
import "./index.css"
import './App.css'

function App() {

  function reducer(state, action) {
    switch (action.type) {
      case "SetSuppliers":
        return {
          ...state, suppliers: action.suppliers
        }
      default:
        break;
    }
  }




  const [state, dispatch] = useReducer(reducer, {
    suppliers: [],
  });

  useEffect(() => {
    getAllData(endPoints.suppliers).then((res) => {
      dispatch({
        type: "SetSuppliers",
        suppliers: res,
      });
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Admin state={state} dispatch={dispatch} />} />
          <Route path="Post" element={<Post />} />
          <Route path="Edit" element={<Edit />} />
          <Route path="NoPage" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
