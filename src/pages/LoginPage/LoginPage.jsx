import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/authThunks";

import { Layout } from "components/Layout/Layout";
import { Form, Label, Input, LinkToRegister, Span, Button, Header, Text} from "./LoginPage.module";
import { toast } from "react-toastify";

const LoginPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


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

    const handleFormSubmit = e => {
        e.preventDefault();

        dispatch(logIn({ email, password })).then((error) => {
            toast.error(`Oops! Something went wrong, ${error.message}. User was not found!`)
        })

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
            <Button type="submit">Sign In</Button>
            <Span>Don't have an account?<LinkToRegister to="/register">Sign In</LinkToRegister></Span>
        </Form>
    </Layout>
};
export default LoginPage;