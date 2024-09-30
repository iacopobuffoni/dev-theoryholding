import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  //Funzione per salvare i dati nel localstorage
  //Usato questo metodo solo per test e per simulare il funzionamento 
  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('name', name);
    localStorage.setItem('surname', surname);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    alert('Registrazione completata! Ora puoi eseguire il login.');
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-center text-primary500">
        Theory Holding Dev Test
      </h1>
      <div className="w-[50%] mx-auto mt-6">
        <form className="w-full flex gap-x-4 flex-wrap" onSubmit={handleRegister}>
          <label className="flex flex-col w-[49%] gap-y-2">
            <span className="text-xl text-gray700">
              Nome:
            </span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border rounded-md p-2">
            </input>
          </label>
          <label className="flex flex-col w-[49%] gap-y-2">
            <span className="text-xl text-gray700">
              Cognome:
            </span>
            <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)}className="border rounded-md p-2">
            </input>
          </label>
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
            Registrati
          </button>
        </form>
      </div>
    </div>
  )
}
