import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Link } from 'react-router-dom'

import { useState } from 'react'

import About from './components/About';
import Blog from './components/Blog';
import Homepage from './components/Homepage';
import Projects from './components/Projects';

export default function App() {
  return (
    <div>
      <BrowserRouter>
          <nav>
              <Link to="/">Home</Link>{" | "}
              <Link to="/about">About</Link>{" | "}
              <Link to="/blog">Blog</Link>{" | "}
              <Link to="/projects">Projects</Link>{" | "}
          </nav>

          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/projects" element={<Projects />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

