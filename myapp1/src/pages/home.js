
import React from 'react';

const Home = ({ selectedDisease }) => {
  return (
    <>
      {selectedDisease === 'Hypertension' && (
        <div className="card" style={{ color: 'black' }}>
          <div className="card-header">
            <h4>Weekly Precautions</h4>
          </div>
          <div className="card-body">
            <h5 className="card-title">Disease Name: Hypertension</h5>
            <p className="card-text">Pill Name: Tab Amlodipine 5 mg</p>
            <p className="card-text">Diet: To manage hypertension (high blood pressure), follow the DASH diet:
              1.Eat plenty of fruits and vegetables for essential nutrients and antioxidants.
              2.Choose whole grains over refined grains for fiber and heart health.
              3.Opt for lean protein sources like poultry, fish, legumes, and low-fat dairy.
              4.Limit sodium intake to 1,500-2,300 mg per day and avoid processed foods.
              5.Include low-fat dairy products in moderation for calcium and nutrients.
              6.Choose healthy fats like olive oil, avocados, nuts, and seeds.
              7.Moderate alcohol and caffeine intake as they can raise blood pressure.
              8.Reduce sugary foods and drinks to avoid weight gain and increased blood pressure.
              9.Combine dietary changes with regular exercise, maintaining a healthy weight, managing stress, and avoiding smoking. Consult a healthcare professional or dietitian for personalized advice</p>
            <p className="card-text">Doctor Name: Dr.DEF</p>
            <p className="card-text">Doctor Contact No: 9876543210</p>
            <p className="card-text">Daily Blood Pressure level: 120/80 mm of Hg</p>
          </div>
        </div>
      )}

      {selectedDisease === 'Diabetes' && (
        <div className="card bg-light text-black mt-3">
          <div className="card-header">
            <h4>Weekly Precautions</h4>
          </div>
          <div className="card-body">
            <h5 className="card-title">Disease Name: Diabetes</h5>
            <p className="card-text">Pill Name:Tab Metformin 500mg tablets ("Consult by Doctor")</p>
            <p className="card-text">Diet:
              1.Control carbohydrates by choosing complex carbs and limiting sugars and processed carbs.
              2.Practice portion control and consider consulting a dietitian for personalized meal plans.
              3.Aim for balanced meals with carbs, protein, and healthy fats.
              4.Understand the glycemic index and choose low-GI foods.
              5.Limit added sugars and be cautious with artificial sweeteners.
              6.Include high-fiber foods for better blood sugar control and digestion.
              7.Opt for healthy snacks and stick to regular meal times.
              8.Stay hydrated with water and avoid sugary drinks.
              9.Consult a dietitian for personalized advice tailored to your needs.</p>
            <p className="card-text">Doctor Name: Dr.ABC</p>
            <p className="card-text">Doctor Contact No: 123456789</p>
            <p className="card-text">Daily Sugar Level: After eating less than 160 </p>
          </div>
        </div>
      )}

      <div className="card bg-light text-black mt-4 mb-2">
        <div className="card-header">
          <h4>Monthly Precautions</h4>
        </div>
        <div className="card-body">
          <h5 className="card-title">Subscription Plan</h5>
          <p className="card-text">Subscribe to our monthly plan for additional resources and support.</p>
          <a href="/paymentPage" className="btn btn-primary">Subscribe Now</a>
        </div>
      </div>
    </>
  );
};

export default Home;
