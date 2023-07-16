// import { Outlet } from 'react-router-dom';
// import { Suspense } from 'react';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
// import { NavLink } from 'react-router-dom';
import { Nav, NavigationList,  NavigationItem, NavigationLink, NavigationWrapper, NavLogoName } from './Navigation.module';


const Navigation = () => {
    const { isLoggedIn } = useAuth();
    return (
        <>
            <Nav>
                <NavigationList>
                    <NavigationItem style={{marginLeft:"0"}}>
                        <NavLogoName to="/">PHONEBOOK</NavLogoName>
                    </NavigationItem>

                       
                    {isLoggedIn ?
                        (<><NavigationItem style={{margin:"0 auto"}}>
                            <NavigationLink to="/contacts">Contacts</NavigationLink>
                        </NavigationItem><UserMenu /></>
                        )
                        :
                         (<NavigationWrapper>
                        <NavigationItem>
                            <NavigationLink to="/login">Login</NavigationLink>
                        </NavigationItem>

                        <NavigationItem>
                            <NavigationLink to="/register">Register</NavigationLink>
                        </NavigationItem>
                    </NavigationWrapper>)
                    
                }
                    
                </NavigationList>
            </Nav>
            {/* <Suspense fallback={<div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '100px',
                fontSize: '30px',
                fontWeight: 700,

                color: '#fff',

            }}>Loading...</div>}>
                <Outlet />
            </Suspense> */}
        </>
        
    )
};

export default Navigation;