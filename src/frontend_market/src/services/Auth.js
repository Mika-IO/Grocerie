import { Redirect } from 'react-router-dom';

export const TOKEN_KEY = "";
export const USER_ID = "";

export const IsAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUserId = () => localStorage.getItem(USER_ID);

export const Login = user => {
  localStorage.setItem(TOKEN_KEY, user["access"]);
  localStorage.setItem(USER_ID, user["userId"]);
};

export const Logout = () => {
  localStorage.clear();
  return  (
    <>
      <Redirect push to="/mymarket"/>
    </>
  )
};
