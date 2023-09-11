import React, { useState, useEffect } from 'react';
import Home from './home';

const SinglePage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedDisease, setSelectedDisease] = useState('');
  const [formData, setFormData] = useState({
    mobileNo: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedLoggedInStatus = localStorage.getItem('loggedIn');
    if (storedLoggedInStatus) {
      setLoggedIn(JSON.parse(storedLoggedInStatus));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!formData.mobileNo || !formData.password || formData.mobileNo.trim() === '' || formData.password.trim() === '') {
      alert('Please fill in all required fields.');
      return;
    }

    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      const storedData = JSON.parse(storedFormData);
      if (storedData.phone === formData.mobileNo && storedData.password === formData.password) {
        setLoggedIn(true);
        localStorage.setItem('loggedIn', JSON.stringify(true));
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } else {
      alert('No stored data found. Please sign up.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setSelectedDisease('');
    localStorage.setItem('loggedIn', JSON.stringify(false));
  };

  const handleDiseaseSelect = (e) => {
    e.preventDefault();
    const selectedDisease = e.target.disease.value;
    setSelectedDisease(selectedDisease);
    setSubmitted(true);
  };

  return (
    <div className="container mt-2 mb-2" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} >
      {loggedIn ? (
        <div className="form-group" style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '75vh',
          
        }}>
          <h2>Welcome, User!</h2>
          <button onClick={handleLogout}>Logout</button>
          {submitted ? (
            selectedDisease === 'Diabetes' ? (
              <div>
                <Home selectedDisease={selectedDisease} />
              </div>
            ) : (
              <Home selectedDisease={selectedDisease} />
            )
          ) : (
            <form onSubmit={handleDiseaseSelect}>
              <div className="mb-3">
                <label htmlFor="disease" className="form-label">
                  Disease:
                </label>
                <select id="disease" name="disease" className="form-select">
                  <option value="">Select Disease</option>
                  <option value="Diabetes">Diabetes</option>
                  <option value="Hypertension">Hypertension</option>
                </select>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div className="form-group" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '75vh',
            fontSize:'25px',
            fontWeight:'bold'
          }}>
            <div className="form-group">
              <label htmlFor="mobileNo">Mobile No:</label>
              <input
                type="text"
                className="form-control"
                id="mobileNo"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default SinglePage;
