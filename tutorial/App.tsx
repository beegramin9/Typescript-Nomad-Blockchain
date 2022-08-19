import React from 'react'
import { Routes, Route  } from "react-router-dom";
import { Main } from './pages';
import "./css/App.css";
type Props = {}

export default function App({}: Props) {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
    </div>
  )
}