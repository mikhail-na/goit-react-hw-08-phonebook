import { Routes, Route } from "react-router-dom";
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';

import { AppBar } from "./AppBar/AppBar";
// import { PrivateRoute } from "./PrivateRoute/PrivatePoute";
import { PrivateRoute } from "./PrivateRoute/PrivatePoute";
import { RestrictedRoute } from "./RestrictRoute/RestrictRoute";
// import { RestrictedRoute } from "./RestrictRoute/RestrictRoute";
import { Spinner } from "./Spinner/Spinner";
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from "redux/auth/authThunks";


const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
   <Spinner/>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          
           <Route index element={<HomePage />} />
          
          <Route path="/register"
            element={<RestrictedRoute redirectTo="/login" component={<RegisterPage />}
            />}
          />
          
          <Route path="/login"
            element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />}
            />}
          />
          
          <Route path="/contacts"
            element={<PrivateRoute redirectTo="/login" component={<ContactsPage />}
            />}/>
      
            <Route path="*" element={<HomePage />} />
        </Route>
          
      </Routes>
      
    </>
  );
};
