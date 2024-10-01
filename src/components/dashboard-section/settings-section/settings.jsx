import React, { useState } from "react";

export default function Settings() {
  const [name, setName] = useState(localStorage.getItem("name"));
  const [surname, setSurname] = useState(localStorage.getItem("surname"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [password, setPassword] = useState(localStorage.getItem("password"));
  
  const handleUpdateInfo = (e) => {
    if (e !== localStorage.getItem("name")) localStorage.setItem('name', name);
    if (e !== localStorage.getItem("surname")) localStorage.setItem('surname', surname);
    if (e !== localStorage.getItem("email")) localStorage.setItem('email', email);
    if (e !== localStorage.getItem("password")) localStorage.setItem('password', password);
    alert('Informazioni aggiornate! Aggiorna per vedere');
  };

  return (
    <div className="w-[80%] p-10">
      <div>
        <form onSubmit={handleUpdateInfo}>
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
            Salva modifiche
          </button>
        </form>
      </div>
    </div>
  )
}
