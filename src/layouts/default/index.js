import React from 'react';

import Header from '../../components/Header';

function DefaultLayout(props) {
    return (
        <>
            <Header />
            <main className="content">
                {props.children}
            </main>
        </>
    );
}

export default DefaultLayout;
