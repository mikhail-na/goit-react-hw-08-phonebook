import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authThunks';
import { useAuth } from 'hooks/useAuth';

import {  toast } from 'react-toastify';

import { Wrapper, Nickname, LogOutBtn } from './UserMenu.module';


export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    
  const handleClick = () => {
    dispatch(logOut());
    toast.success("LogOut was succsed!");
  };
  

    
    
  return (
    <Wrapper>
      <Nickname>Welcome, {user.name}</Nickname>
      <LogOutBtn type="button"  onClick={handleClick}>
        Logout
      </LogOutBtn>
    </Wrapper>
  );
};
