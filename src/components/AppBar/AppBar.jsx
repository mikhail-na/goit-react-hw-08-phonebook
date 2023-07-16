import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "components/Navigation/Navigation";


export const AppBar = () => {

    return (
        <header>
            <Navigation />
               <Suspense fallback={<div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '100px',
                fontSize: '30px',
                fontWeight: 700,

                color: '#fff',

            }}>Loading...</div>}>
                <Outlet />
            </Suspense>
          </header>
    )
}