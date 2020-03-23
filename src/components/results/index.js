import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';

class Results extends Component {
    render() {
        const { suggestions } = this.props;

        console.log(this.props);
        

        return (
            <Page
            suggestions = { suggestions }
            />
        );
    }
}
// Acceder a los reducers
const mapStateToProps = state => {
return {
    suggestions: state.suggestions,
    hola: '123'
}
};


// wrapper(Results); //recibe un componente que lo va a modificiar

export default connect(mapStateToProps)(Results);