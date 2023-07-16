import { useState } from "react";
import { useDispatch } from "react-redux";
import {  register } from "redux/auth/authThunks";

import { Layout } from "components/Layout/Layout";
import { Form, Label, Input, Button, LinkToLogin, Span, Header, Text} from "./RegisterPage.module";

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    // const message = 'Log in to your account';
    // const message = 'Create an account';


    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name': {
                return setName(value)
            }
            case 'email': {
                return setEmail(value);
            }
            case 'password': {
                return setPassword(value)
            }
            default:
                return;
        }
    }

    const handleFormSubmit = e => {
        e.preventDefault();

        dispatch(register({ name, email, password }));
        setForm();
    }

    const setForm = () => {
        setName('');
        setEmail('');
        setPassword('');
    }
    

    return <Layout>
        <Form onSubmit={handleFormSubmit}>
            <Header>Register</Header>
            <Text>To have access to PHONEBOOK,<br />
                you need to register yourself first</Text>
            {/* {message} */}
            
            <Label >
                Name
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    placeholder="Enter Name..."
                    value={name}
                    required
                    onChange={handleChange} />
            </Label>
            <Label >
                E-mail
                <Input
                    type="email"
                    name="email"
                    pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
                    title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
                    placeholder="Enter Email..."
                    required
                    value={email}
                    onChange={handleChange} />
            </Label>
            <Label >
                Password
                <Input
                    type="password"
                    name="password"
                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                    title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
                    placeholder="Enter Password..."
                    required 
                    value={password} 
                    onChange={handleChange} />
            </Label>
            <Button type="submit">Sign Up</Button>
            {/* <Span>Don't have an account?<LinkToLogin to="/login">Sign In</LinkToLogin></Span> */}
        </Form>
    </Layout>
};
export default RegisterPage;