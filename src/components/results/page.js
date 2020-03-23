import React, { Fragment } from 'react';
import cssBaseLine from '@material-ui/core/CssBaseline';
import AppBar from '../appBar';
import CssBaseline from '@material-ui/core/CssBaseline';

function Page(props) {
    return (
        <Fragment>
            <CssBaseline/>
            <AppBar/>
        </Fragment>
    )
}

export default Page;