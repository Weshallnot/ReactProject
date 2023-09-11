import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import SignUp from './pages/signup';
import Signin from './pages/signin';
import Footer from './pages/footer';
import Payment from './pages/PaymentPage';
import Bmi from './pages/bmi';
function App() {
	return (
		<Router>
			<Navbar />

			<Routes>
				<Route path='/home' exact element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/' element={<SignUp />} />
				<Route path='/signin' element={<Signin />} />
				<Route path='/bmi' element={<Bmi />} />
				<Route path='/paymentPage' element={<Payment />} />
			</Routes>
			<Footer />
		</Router>

	);
}

export default App;
