import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./loginAction";

export default function Login() {
  const UserLoogedIn = useSelector((state) => state.login);
  const dispatch = useDispatch();

  dispatch(loginUser("helal", "abc@1234"));
  console.log(UserLoogedIn);
  return <h1>Login</h1>;
}
