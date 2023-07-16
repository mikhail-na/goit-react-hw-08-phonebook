import { Routes, Route } from "react-router-dom";
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/contacts/contactsThunks';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
// import { useFetchContactsQuery } from 'service/Api';
import { Spinner } from './Spinner/Spinner';
// import SharedNavLayout from "./SharedNavLayout/SharedNavLayout";
import { AppBar } from "./AppBar/AppBar";
import { PrivateRoute } from "./PrivateRoute/PrivatePoute";
import { RestrictedRoute } from "./RestrictRoute/RestrictRoute";

import { Container } from '@mui/material';


import { useAuth } from 'hooks/useAuth';
// import { refreshUser } from 'redux/auth/authThunks';

// import { Layout } from './Layout/Layout';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactFilter } from './ContactFilter/ContactFilter';
// import { ContactsList } from './ContactsList/ContactsList';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);


  return isRefreshing ? (
    <h1>Refreshing..</h1>
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
