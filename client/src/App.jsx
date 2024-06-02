import './App.css'
import Login from './component/admin/Login'
import Signup from './component/admin/Signup'
import { Route, Routes } from 'react-router-dom'
import Sidebar from "./component/admin/Sidebar"
import AddStudent from "./component/admin/AddStudent"
import AddTeacher from "./component/admin/AddTeacher"
import AddSubject from "./component/admin/AddSubject"
import ShowStudent from './component/admin/ShowStudent'
import ShowFaculty from './component/admin/ShowFaculty'
import ShowSubject from './component/admin/ShowSubject'
import Faculty from './component/faculty/Faculty'
import CreateAssignment from './component/faculty/CreateAssignment'
import CheckAssignment from './component/faculty/CheckAssignment'
import Home from './component/Home'
import LoginFaculty from './component/faculty/LoginFaculty'
import ProtectedRoute from './component/faculty/ProtectedRoute'
import Dashboard from './component/student/Dashboard'
import LoginStudent from './component/student/LoginStudent'
import Compiler from './component/student/Compiler'


function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        {/* <Route path='/admin' element={<Sidebar />} ></Route> */}
        <Route path='/addstudent' element={
          <ProtectedRoute>
            <AddStudent />
          </ProtectedRoute>} />
        <Route path='/addteacher' element={
          <ProtectedRoute>
            <AddTeacher />
          </ProtectedRoute>} />
        <Route path='/addsubject' element={
          <ProtectedRoute>
            <AddSubject />
          </ProtectedRoute>} />
        <Route path='/showstudent' element={
          <ProtectedRoute>
            <ShowStudent />
          </ProtectedRoute>} />
        <Route path='/showfaculty' element={
          <ProtectedRoute>
            <ShowFaculty />
          </ProtectedRoute>} />
        <Route path='/showsubject' element={
          <ProtectedRoute>
            <ShowSubject />
          </ProtectedRoute>} />
        <Route path='/facultydashboard' element={
          <ProtectedRoute>
            <Faculty />
          </ProtectedRoute>
        } />
        <Route path='/createassignment' element={
          <ProtectedRoute>
            <CreateAssignment />
          </ProtectedRoute>
        } />
        <Route path='/checkassignment' element={
          <ProtectedRoute>
            <CheckAssignment />
          </ProtectedRoute>
        } />
        <Route path='/loginfaculty' element={
          <LoginFaculty />
        } />
        <Route path='/studentdashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path='/compiler' element={
          <ProtectedRoute>
            <Compiler />
          </ProtectedRoute>
        } />
        <Route path='/studentlogin' element={<LoginStudent />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
