
import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Landing = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("voter");
    const [loading,setLoading]=useState(false);

    const clickHandler = () => {
        setUser(prevUser => prevUser === "voter" ? "admin" : "voter");
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
        if(loading==true)
        {
            return(
                <div className="flex justify-center items-center h-screen flex-col"><LoadingSpinner></LoadingSpinner>
                <div className="text-lg font-semibold">Loading</div></div>
            )
        }
    const signin = async () => {
        try {
            setLoading(true);
            let response;
            if (user === "voter") {
                response = await axios.post("https://onevote-backend.onrender.com/voter/signin", {
                    email,
                    password
                });
            } else {
                response = await axios.post("https://onevote-backend.onrender.com/admin/signin", {
                    email,
                    password
                });
            }
            localStorage.setItem("authorization", "Bearer " + response.data.token);
            toast.success("Signin successful");
            setTimeout(() => {
                if (user === "voter") {
                    navigate("/voter/voting");
                } else {
                    navigate("/admin/manage");
                }
            }, 800);
        } catch (error) {
            setLoading(false);
            setTimeout(()=>{
                toast.error("Something went wrong");
            },50)
            console.error("Signin error:", error);
        }
    };

    

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">
                    <p className="text-2xl px-2">I am a</p>
                    <button id="Button" className="text-2xl px-4 py-2 bg-green-300 text-white rounded-md" onClick={clickHandler}>
                        {user}
                    </button>
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <label htmlFor='email' className="block mb-2 text-lg">Email</label>
                        <input className="w-full border-2 border-gray-300 p-2 rounded" type='email' id='email' value={email} onChange={handleEmailChange} />
                    </div>
                    <div>
                        <label htmlFor="pass" className="block mb-2 text-lg">Password</label>
                        <input className="w-full border-2 border-gray-300 p-2 rounded" type='password' id='pass' value={password} onChange={handlePasswordChange} />
                    </div>
                    <button id="Button" className="w-full bg-red-300 text-white px-4 py-2 rounded mt-2" onClick={signin}>
                        Sign In
                    </button>
                    <div className="mt-4 flex justify-center">
                        <p className="mr-2">Don't have an account?</p>
                        <Link className="text-blue-500" to={"/voter/signup"}>Sign up</Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};



const LoadingSpinner = () => {
  return (
    <svg className="pl" viewBox="0 0 160 160" width="160px" height="160px" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000"></stop>
          <stop offset="100%" stopColor="#fff"></stop>
        </linearGradient>
        <mask id="mask1">
          <rect x="0" y="0" width="160" height="160" fill="url(#grad)"></rect>
        </mask>
        <mask id="mask2">
          <rect x="28" y="28" width="104" height="104" fill="url(#grad)"></rect>
        </mask>
      </defs>

      <g>
        <g className="pl__ring-rotate">
          <circle className="pl__ring-stroke" cx="80" cy="80" r="72" fill="none" stroke="hsl(223,90%,55%)" strokeWidth="16" strokeDasharray="452.39 452.39" strokeDashoffset="452" strokeLinecap="round" transform="rotate(-45,80,80)"></circle>
        </g>
      </g>
      <g mask="url(#mask1)">
        <g className="pl__ring-rotate">
          <circle className="pl__ring-stroke" cx="80" cy="80" r="72" fill="none" stroke="hsl(193,90%,55%)" strokeWidth="16" strokeDasharray="452.39 452.39" strokeDashoffset="452" strokeLinecap="round" transform="rotate(-45,80,80)"></circle>
        </g>
      </g>

      <g>
        <g strokeWidth="4" strokeDasharray="12 12" strokeDashoffset="12" strokeLinecap="round" transform="translate(80,80)">
          <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(-135,0,0) translate(0,40)"></polyline>
          <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(-90,0,0) translate(0,40)"></polyline>
          <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(-45,0,0) translate(0,40)"></polyline>
          <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(0,0,0) translate(0,40)"></polyline>
          <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(45,0,0) translate(0,40)"></polyline>
          <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(90,0,0) translate(0,40)"></polyline>
          <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(135,0,0) translate(0,40)"></polyline>
          <polyline className="pl__tick" stroke="hsl(223,10%,90%)" points="0,2 0,14" transform="rotate(180,0,0) translate(0,40)"></polyline>
        </g>
      </g>
      <g mask="url(#mask1)">
        <g strokeWidth="4" strokeDasharray="12 12" strokeDashoffset="12" strokeLinecap="round" transform="translate(80,80)">
          <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(-135,0,0) translate(0,40)"></polyline>
          <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(-90,0,0) translate(0,40)"></polyline>
          <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(-45,0,0) translate(0,40)"></polyline>
          <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(0,0,0) translate(0,40)"></polyline>
          <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(45,0,0) translate(0,40)"></polyline>
          <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(90,0,0) translate(0,40)"></polyline>
          <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(135,0,0) translate(0,40)"></polyline>
          <polyline className="pl__tick" stroke="hsl(223,90%,80%)" points="0,2 0,14" transform="rotate(180,0,0) translate(0,40)"></polyline>
        </g>
      </g>

      <g>
        <g transform="translate(64,28)">
          <g className="pl__arrows" transform="rotate(45,16,52)">
            <path fill="hsl(3,90%,55%)" d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"></path>
            <path fill="hsl(223,10%,90%)" d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"></path>
          </g>
        </g>
      </g>
      <g mask="url(#mask2)">
        <g transform="translate(64,28)">
          <g className="pl__arrows" transform="rotate(45,16,52)">
            <path fill="hsl(333,90%,55%)" d="M17.998,1.506l13.892,43.594c.455,1.426-.56,2.899-1.998,2.899H2.108c-1.437,0-2.452-1.473-1.998-2.899L14.002,1.506c.64-2.008,3.356-2.008,3.996,0Z"></path>
            <path fill="hsl(223,90%,80%)" d="M14.009,102.499L.109,58.889c-.453-1.421,.559-2.889,1.991-2.889H29.899c1.433,0,2.444,1.468,1.991,2.889l-13.899,43.61c-.638,2.001-3.345,2.001-3.983,0Z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};



export default Landing;
