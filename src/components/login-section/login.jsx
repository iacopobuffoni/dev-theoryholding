import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  //Anche qua un metodo spartano per fare test di login e redirect alla dashboard utente
  const handleLogin = (e) => {
    e.preventDefault();
    if (localStorage.getItem("email") === email && localStorage.getItem("password") === password) {
      navigate('/dashboard');
    } else {
      alert('Credenziali errate!');
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center text-primary500">
        Theory Holding Dev Test
      </h1>
      <div className="w-[50%] mx-auto mt-6">
        <form className="w-full flex gap-x-4 flex-wrap" onSubmit={handleLogin}>
          <label className="flex flex-col w-[49%] gap-y-2">
            <span className="text-xl text-gray700">
              Email:
            </span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded-md p-2">
            </input>
          </label>
          <label className="flex flex-col w-[49%] gap-y-2">
            <span className="text-xl text-gray700">
              Password:
            </span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border rounded-md p-2">
            </input>
          </label>
          <button type="submit" className="border rounded-md py-2 px-4 mt-6 mx-auto bg-primary500 text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
