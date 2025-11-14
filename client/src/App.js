import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/common/Layout"
import { Home } from "./pages/Home"
import { BlogSinglePage } from "./components/common/BlogSinglePage"
import { About } from "./pages/About"
import { Courses } from "./pages/Courses"
import { Blog } from "./pages/Blog"
import { Instructor } from "./pages/Instructor"
import {Signup } from "./pages/Signup"
import {Login} from "./pages/Login"
import {Adminelog} from '../src/pages/Adminelog'
import {Admine} from '../src/pages/Admine'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

            <Route
            path='/'
            element={
            <Signup/>
            }
          />

          <Route
            path='/login'
            element={
            <Login/>
            }
          />

               <Route
            path='/adminelog'
            element={
            <Adminelog/>
            }
          />

                 <Route
            path='/admine'
            element={
            <Admine/>
            }
          />



          <Route
            path='/home'
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path='/about'
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path='/courses'
            element={
              <Layout>
                <Courses />
              </Layout>
            }
          />
          <Route
            path='/instructor'
            element={
              <Layout>
                <Instructor />
              </Layout>
            }
          />
          <Route
            path='/blog'
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          
          <Route
            path='/single-blog'
            element={
              <Layout>
                <BlogSinglePage />
              </Layout>
            }

            
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
