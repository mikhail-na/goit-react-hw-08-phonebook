import PropTypes from 'prop-types';

import { Container, Typography } from '@mui/material';
// import {  Title } from './Layout.module';

export const ContactsLayout = ({ title, children }) => {
  return (
    // rgb(232, 246, 228)
    <Container style={{padding:"30px"}} sx={{backgroundColor: 'rgb(56, 60, 73)', width:800}} >
      <Typography style={{display:"flex", justifyContent:"center", color:"white"}} variant='h2' sx={{fontSize:"34px", fontWeight: 700}}>{title}</Typography>
      {children}
    </Container>
  );
};

ContactsLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
