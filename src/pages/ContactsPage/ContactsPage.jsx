// import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from 'redux/contacts/contactsThunks';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
// import { useFetchContactsQuery } from 'service/Api';
import { Spinner } from 'components/Spinner/Spinner';
// import SharedLayout from "./SharedLayout/SharedLayout";


// import { Layout } from './Layout/Layout';
// import { Layout } from 'components/Layout/Layout';
import { ContactsLayout } from 'components/ContactsLayout/ContactsLayout';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactsList } from 'components/ContactsList/ContactsList';

const ContactsPage = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    // const error = useSelector(selectError);


    useEffect(() => {
        dispatch(fetchContactsThunk());
    }, [dispatch]);

    // useEffect(() => {
    //     if (error) {
    //         alert(`Oops! Something went wrong ${error}. Please try again in a few minutes.`);
    //     }
    // }, [error]);
  
    return (
         <>
        <ContactsLayout title="Phonebook">
          <ContactForm />
        </ContactsLayout>
        <ContactsLayout title="Contacts">
          <ContactFilter />
          <ContactsList />
          {isLoading && <Spinner />}
        </ContactsLayout>
    </> 
    )
    
       
}
export default ContactsPage;
