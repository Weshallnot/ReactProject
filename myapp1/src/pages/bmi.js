import React, { useState } from 'react';

const Bmi = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBmiResult] = useState('');
  const [bmiStatus, setBmiStatus] = useState('');
  const [showResult, setShowResult] = useState(false);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    let status = '';

    if (isNaN(bmi) || weight === '' || height === '') {
      setBmiResult('Please enter valid weight and height.');
    } else {
      if (bmi < 18.5) {
        status = 'Underweight';
      } else if (bmi >= 18.5 && bmi < 25) {
        status = 'Normal';
      } else if (bmi >= 25 && bmi < 30) {
        status = 'Overweight';
      } else {
        status = 'Obese';
      }

      setBmiResult(`Your BMI is ${bmi.toFixed(2)}`);
      setBmiStatus(status);
    }

    setShowResult(true);
  };

  return (

    <div className="container" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '80vh',
      fontSize: '25px',
      fontWeight: 'bold'
    }}>
      <h1 className="text-center mb-4">Weight BMI Checkup</h1>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <h2><label htmlFor="weight">Weight (in kilograms)</label></h2>
              <input
                type="number"
                className="form-control"
                id="weight"
                placeholder="Enter weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="form-group">
              <h2><label htmlFor="height">Height (in centimeters)</label></h2>
              <input
                type="number"
                className="form-control"
                id="height"
                placeholder="Enter height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="text-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={calculateBMI}
              >
                Calculate BMI
              </button>
            </div>
          </form>
        </div>
      </div>

      {showResult && (
        <div className="row justify-content-center mt-4 mb-5" style={{ fontSize: '20px' }} >
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">BMI Result</h4>
                <p className="card-text">{bmiResult}</p>
                <p className="card-text">Status: {bmiStatus}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bmi;
