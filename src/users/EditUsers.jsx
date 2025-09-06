import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditUsers = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
  })

  useEffect(() => {
    loadUsers()
  }, [])

  const navigate = useNavigate()
  const { id } = useParams()

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:8080/user/${id}`, user)
    navigate('/')
  }

  const loadUsers = async () => {
    const userDetails = await axios.get(`http://localhost:8080/user/${id}`)
    const result = userDetails.data
    setUser(result)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit user</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter your name"
                name="name"
                value={user.name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                UserName
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter your UserName"
                name="username"
                value={user.username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter your email"
                name="email"
                value={user.email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary mr-4">
              Submit
            </button>
            <Link className="btn btn-danger mx-2" to={'/'}>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditUsers
