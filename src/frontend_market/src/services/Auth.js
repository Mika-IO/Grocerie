import { Redirect } from 'react-router-dom';

export const TOKEN_KEY = "@airbnb-Token";
export const IsAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const Login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const Logout = () => {
  localStorage.clear();
  return  (
    <>
      <Redirect push to="/mymarket"/>
    </>
  )
};
