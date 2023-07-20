import { useState } from "react";
import { useDispatch } from "react-redux";
import {  register } from "redux/auth/authThunks";

import { Layout } from "components/Layout/Layout";
import { Form, Label, Div, Toggle, PassInput, Input, Button, Header, Text, Span, LinkToLoggin } from "./RegisterPage.module";
// import { toast } from "react-toastify";

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();

    // const message = 'Log in to your account';
    // const message = 'Create an account';

    const handlePassToggle = () => {
        console.log('clicked');
        setVisible(!visible)
    }


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
                <Div>
                    <PassInput
                        type={visible ? "text" : "password"}
                        name="password"
                        maxLength={16}
                        pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                        title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
                        placeholder="Enter Password..."
                        required
                        value={password}
                        onChange={handleChange}

                    />
                    {/* {PassInput.value === 16 && toast.error("Password must be at least 16 characters")} */}
                    <Toggle onClick={handlePassToggle}>
                        {visible ? "HIDE" : "SHOW"}
                    </Toggle>
                </Div>
            </Label>    
            <Button type="submit">Sign Up</Button>
            <Span>Do you have an account?<LinkToLoggin to="/login">Sign In</LinkToLoggin></Span>
        </Form>
    </Layout>
};
export default RegisterPage;