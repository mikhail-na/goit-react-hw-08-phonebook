import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { selectContactsState } from 'redux/contacts/selectors';
import { deleteContactThunk } from 'redux/contacts/contactsThunks';

import { List, ContactItem, ContactName, ContactNumber, Button} from './ContactsList.module';


export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsState);

  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <ContactName>
              {name}: <ContactNumber>{number}</ContactNumber>
            </ContactName>
            <Button
              type="button"
              onClick={() => dispatch(deleteContactThunk(id))}
              deleting
            >
              x
            </Button>
          </ContactItem>
        );
      })}
      {/* {isFetching && <Spinner />} */}
      
    </List>
  );

  
};


ContactsList.propTypes = {
  visibleContacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired
  )
};
