import { ContactItemWrapper, DeleteButton } from './ContactListItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContactThunk, getContactThunk } from 'services/fetch';
import { useEffect } from 'react';

export const ContactListItem = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = id => {
    dispatch(deleteContactThunk(id));
  };
  useEffect(() => {
    dispatch(getContactThunk());
  }, [dispatch]);

  return (
    <>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItemWrapper key={id}>
          <p>
            {name}: {number}
          </p>
          <DeleteButton onClick={() => onDeleteContact(id)}>
            delete
          </DeleteButton>
        </ContactItemWrapper>
      ))}
    </>
  );
};
