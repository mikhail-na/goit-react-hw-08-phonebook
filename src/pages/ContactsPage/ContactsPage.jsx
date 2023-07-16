import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from 'hooks/useAuth';

import { fetchContactsThunk } from 'redux/contacts/contactsThunks';
import { selectIsLoading } from 'redux/contacts/selectors';

import {  toast } from 'react-toastify';

import { Spinner } from 'components/Spinner/Spinner';
import { ContactsLayout } from 'components/ContactsLayout/ContactsLayout';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactsList } from 'components/ContactsList/ContactsList';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const { user } = useAuth();
  


  useEffect(() => {
    dispatch(fetchContactsThunk());
      
  }, [dispatch]);
  
  useEffect(() => {
    toast.success(`Congratulations, ${user.name} authorization was successful!`)
  }, [user.name]);

  
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
    
       
};
export default ContactsPage;
