import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/authThunks";

import { Layout } from "components/Layout/Layout";
import { Form, Label, Input, PassInput, Div, Toggle, LinkToRegister, Span, Button, Header, Text} from "./LoginPage.module";


const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
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

    const handlePassToggle = () => {
        setVisible(!visible);
        console.log('clicked')
    }

    const handleFormSubmit = e => {
        e.preventDefault();

        dispatch(logIn({ email, password }))

        setForm();
    }

    const setForm = () => {
        setEmail('');
        setPassword('');
    }
    

    return <Layout>
        <Form onSubmit={handleFormSubmit}>
            <Header>Login</Header>
            <Text>Enter your email address and password <br />to sign in</Text>
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
                    type={visible?"text":"password"}
                    name="password"
                    maxLength={16}
                    pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                    title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
                    placeholder="Enter Password..."
                    required 
                    value={password} 
                        onChange={handleChange} />
                    <Toggle onClick={handlePassToggle}>
                        {visible?"HIDE":"SHOW"}
                    </Toggle>
                </Div>
                
            </Label>
            <Button type="submit">Sign In</Button>
            <Span>Don't have an account?<LinkToRegister to="/register">Sign Up</LinkToRegister></Span>
        </Form>
    </Layout>
};
export default LoginPage;