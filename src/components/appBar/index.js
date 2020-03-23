import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';

class IAppBar extends Component {
    constructor(props){
        super(props);
        this.state ={
            text: '',
        };
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
    }

    onChangeText(text){
        this.setState({text});
    }
    onChangeSelection(text){
        
    }

    render() {
        const {text} = this.state;
        const {suggestions} = this.props
        return (
            <Page
            text={text}
            suggestions={suggestions}
            onChangeText={this.onChangeText}
            onChangeSelection={this.onChangeSelection}/>
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
    export default connect(mapStateToProps)(IAppBar);