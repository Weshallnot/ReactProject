import React, { useState } from 'react';

const Payment = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      fontSize: '25px',
      fontWeight: 'bold'
    }}>
      {!submitted ? (
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4 className="text-center">Monthly Subscription Payment</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" className="form-control" id="cardNumber" name="cardNumber" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="expiry">Expiry Date</label>
                    <input type="text" className="form-control" id="expiry" name="expiry" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" className="form-control" id="cvv" name="cvv" required />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Pay Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Receipt />
      )}
    </div>
  );
};

const Receipt = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4 className="text-center">Payment Receipt</h4>
            </div>
            <div className="card-body">
              <h5 className="text-center">Thank you for your payment!</h5>
              <p className="text-center">Receipt details go here...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
