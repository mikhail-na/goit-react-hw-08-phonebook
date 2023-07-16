import { useSelector, useDispatch } from 'react-redux';
import { setFilterContacts } from 'redux/contacts/filterSlice';
import { selectFilteredContacts } from 'redux/contacts/selectors';

import { Label, Input, Message } from './ContactFilter.module';



export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilteredContacts);

  // const label = 'Find contacts by name';

  const handleFilterChange = e => {
    const searchValue = e.target.value;

    dispatch(setFilterContacts(searchValue));
  };


  return (
    <Label>
     <Message>Find contacts by name</Message>
      <Input
        type="text"
        name="filter"
        placeholder="Enter contact name..."
        value={filter}
        onChange={handleFilterChange}
      />
    </Label>
  );
};

