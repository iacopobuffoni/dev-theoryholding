import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  
  //Validazione dei campi 
  const validateForm = () => {
    let formErrors = {};
    if (!name.trim()) formErrors.name = "Il nome è obbligatorio";
    if (!surname.trim()) formErrors.surname = "Il cognome è obbligatorio";    
    if (!email.trim()) {
      formErrors.email = "L'email è obbligatoria";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "L'email non è valida";
    }    
    if (!password) {
      formErrors.password = "La password è obbligatoria";
    } else if (password.length < 6) {
      formErrors.password = "La password deve essere di almeno 6 caratteri";
    }    
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem('name', name);
      localStorage.setItem('surname', surname);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      alert('Registrazione completata! Ora puoi eseguire il login.');
      navigate("/");
    }
  };

  return (
    <div className="w-full p-10">
      <h1 className="text-4xl font-bold text-center text-primary500">
        Theory Holding Dev Test
      </h1>
      <div className="w-[50%] mx-auto mt-6">
        <form className="w-full flex gap-x-4 flex-wrap" onSubmit={handleRegister}>
          <label className="flex flex-col w-[49%] gap-y-2">
            <span className="text-xl text-gray700">Nome:</span>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className={`border rounded-md p-2 ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </label>
          <label className="flex flex-col w-[49%] gap-y-2">
            <span className="text-xl text-gray700">Cognome:</span>
            <input 
              type="text" 
              value={surname} 
              onChange={(e) => setSurname(e.target.value)}
              className={`border rounded-md p-2 ${errors.surname ? 'border-red-500' : ''}`}
            />
            {errors.surname && <span className="text-red-500 text-sm">{errors.surname}</span>}
          </label>
          <label className="flex flex-col w-[49%] gap-y-2">
            <span className="text-xl text-gray700">Email:</span>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className={`border rounded-md p-2 ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </label>
          <label className="flex flex-col w-[49%] gap-y-2">
            <span className="text-xl text-gray700">Password:</span>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className={`border rounded-md p-2 ${errors.password ? 'border-red-500' : ''}`}
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
          </label>
          <button type="submit" className="border rounded-md py-2 px-4 mt-6 mx-auto bg-primary500 text-white hover:bg-primary600 transition-colors">
            Registrati
          </button>
        </form>
      </div>
    </div>
  )
}
