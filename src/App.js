import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD_5UWM8lLsV2mnNP-KzDXRsV5Zhf00aU",
  authDomain: "react-ecommerce-b9a25.firebaseapp.com",
  projectId: "react-ecommerce-b9a25",
  storageBucket: "react-ecommerce-b9a25.appspot.com",
  messagingSenderId: "81866203071",
  appId: "1:81866203071:web:36d7b1000f89c216d94b0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {

    useEffect(() => {

    });

    return (
        <BrowserRouter>
            <div className='App'>
                <nav className="navbar navbar-light bg-dark">
                    <a className="navbar-brand text-light">KenFes</a>

                    <div className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </div>
                </nav>

                {/* Main Content */}
                <div id='content-container'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>

                <footer class="container">
                    <div class="row">
                        <div class="col-12 col-md">
                        KENFES
                        <small class="d-block mb-3 text-muted">&copy; 2017-2023</small>
                        </div>
                        <div class="col-6 col-md">
                        <h5>Features</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Cool stuff</a></li>
                            <li><a class="text-muted" href="#">Random feature</a></li>
                            <li><a class="text-muted" href="#">Team feature</a></li>
                            <li><a class="text-muted" href="#">Stuff for developers</a></li>
                            <li><a class="text-muted" href="#">Another one</a></li>
                            <li><a class="text-muted" href="#">Last time</a></li>
                        </ul>
                        </div>
                        <div class="col-6 col-md">
                        <h5>Resources</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Resource</a></li>
                            <li><a class="text-muted" href="#">Resource name</a></li>
                            <li><a class="text-muted" href="#">Another resource</a></li>
                            <li><a class="text-muted" href="#">Final resource</a></li>
                        </ul>
                        </div>
                        <div class="col-6 col-md">
                        <h5>Resources</h5>
                        <ul class="list-unstyled text-small">
                            <li><a class="text-muted" href="#">Business</a></li>
                            <li><a class="text-muted" href="#">Education</a></li>
                            <li><a class="text-muted" href="#">Government</a></li>
                            <li><a class="text-muted" href="#">Gaming</a></li>
                        </ul>
                        </div>
                    </div>
                </footer>

            </div>
        </BrowserRouter>
    );
}

export default App;
