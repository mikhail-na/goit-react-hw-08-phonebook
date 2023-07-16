import { Layout } from "components/Layout/Layout";
import { useAuth } from "hooks/useAuth";
import { Container, GetStartedLink, Header, Message } from './HomePage.module'

import { toast } from 'react-toastify';

const HomePage = () => {
    const { isLoggedIn } = useAuth();
    const { user } = useAuth();

    return <>
        <Layout>
            <Container>
                {isLoggedIn ?
                  
                    (<Message>Hey, <span style={{ color: "rgb(87, 194, 33)" }}>{user.name}</span><br />
                        you are already in the system!</Message>) :
                    (<>
                        <Header>Phonebook</Header>
                        <Message>
                            This is an awesome application based on React technology. <br />
                            You can create your Phonebook, add a contact, or delete them. <br />
                            You need to sign up before you started. <br />
                            Click on the button to try it just now <br />
                        </Message>
                        <GetStartedLink to="/register">GetStarted</GetStartedLink>
                    </>)}
               
                
            </Container>

        </Layout>
        {isLoggedIn && toast.info("You are already in system!")}
    
    </>
};
export default HomePage;