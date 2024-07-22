import React, { useState } from "react";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e: any) => {
    setEmail(e?.target?.value);
    setError("");
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e?.target?.value);
    setError("");
  };

  const handleSignIn = () => {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }
  };

  return (
    <div>
      <div className="m-auto shadow-md flex w-2/6 justify-center flex-col gap-4 p-10 mt-24">
        {error && (
          <p className="p-2 text-white text-1xl bg-red-500 text-center rounded-md">
            {error}
          </p>
        )}
        <p className="font-bold text-center text-slate-500 text-4xl">Login</p>
        <input
          type="text"
          className="border border-slate-400 outline-slate-200 p-4 rounded-md"
          placeholder="Enter your email"
          value={email}
          onChange={handleInputChange}
        ></input>
        <input
          type="password"
          className="border border-slate-400 outline-slate-200 p-4 rounded-md"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <button
          className="text-xl bg-blue-900 p-2 rounded-md text-white"
          onClick={handleSignIn}
        >
          Signin
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
