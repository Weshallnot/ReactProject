import React, { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    weight: '',
    phone: '',
    bloodGroup: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name.trim() === '' ||
      formData.age.trim() === '' ||
      formData.gender.trim() === '' ||
      formData.weight.trim() === '' ||
      formData.phone.trim() === '' ||
      formData.bloodGroup.trim() === '' ||
      formData.password.trim() === ''
    ) {
      alert('Please fill in all required fields.');
      return;
    }
    localStorage.setItem('formData', JSON.stringify(formData));
    window.open('/signin', '_self');
  };

  return (
    <div className="container mt-2 mb-2" style={{ fontWeight: 'bold' }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="form-container">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="row">
              <div className="mb-3">
                <label htmlFor="age" className="form-label">
                  Age:
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="row"></div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Gender:</label>
                <div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="Male"
                      checked={formData.gender === 'Male'}
                      onChange={handleChange}
                      className="form-check-input"
                    />
                    <label htmlFor="male" className="form-check-label">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="Female"
                      checked={formData.gender === 'Female'}
                      onChange={handleChange}
                      className="form-check-input"
                    />
                    <label htmlFor="female" className="form-check-label">
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="weight" className="form-label">
                Weight:
              </label>
              <input
                type="text"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone No:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bloodGroup" className="form-label">
                Blood Group:
              </label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
