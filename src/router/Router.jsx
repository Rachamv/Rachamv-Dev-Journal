import {BrowserRouter, Route, Routes } from 'react-router-dom'
// components
import Header from '../components/Header'
import Footer from '../components/Footer'
// pages
import Authors from '../page/Authors'
import AuthorPosts from '../page/AuthorPosts'
import CategoryPosts from '../page/CategoryPosts'
import CreatePosts from '../page/CreatePosts'
import Dashboard from '../page/Dashboard'
import DeletePosts from '../page/DeletePosts'
import EditPosts from '../page/EditPosts'
import ErrorPage from '../page/ErrorPage'
import Home from '../page/Home'
import Login from '../page/Login'
import Logout from '../page/Logout'
import PostDetails from '../page/PostDetails'
import Register from '../page/Register'
import UserProfile from '../page/UserProfile'




export default function Router() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/authors" element={<Authors/>} />
        <Route path="/posts/user/:id" element={<AuthorPosts/>} />
        <Route path="/posts/categories/:category" element={<CategoryPosts/>} />
        <Route path="/create" element={<CreatePosts/>} />
        <Route path="/myposts/:id" element={<Dashboard/>} />
        {/*<Route path="/" element={<DeletePosts/>} />*/}
        <Route path="/posts/:id/edit" element={<EditPosts/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/posts/:id" element={<PostDetails/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile/:id" element={<UserProfile/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}
