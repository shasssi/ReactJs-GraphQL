import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGNIN_MUTATION } from "../graphql/queries/user";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [signIn, { error }] = useMutation(SIGNIN_MUTATION);
  const navigate = useNavigate();

  const handleInputChange = (e: any) => {
    setEmail(e?.target?.value);
    setErrorMsg("");
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e?.target?.value);
    setErrorMsg("");
  };

  const handleSignIn = async () => {
    if (!email || !password) {
      setErrorMsg("Please enter email and password");
      return;
    }
    signIn({
      variables: {
        email,
        password,
      },
    })
      .then((res) => {
        setEmail("");
        setPassword("");
        window.localStorage.setItem("token", res?.data?.signIn?.token);
        navigate("/users");
      })
      .catch((err) => {});
  };

  return (
    <div>
      <div className="m-auto shadow-md flex w-2/6 justify-center flex-col gap-4 p-10 mt-24">
        {(errorMsg || error?.message) && (
          <p className="p-2 text-white text-1xl bg-red-500 text-center rounded-md">
            {errorMsg || error?.message}
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
