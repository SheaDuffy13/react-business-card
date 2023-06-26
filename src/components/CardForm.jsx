import React from 'react';

export default class CardForm extends React.Component {

    handleChangeInput = (event) => {
        this.props.updateState(event.target.name, event.target.value); 
    }

    render() {
        return (
            <form>
                <label>Name: </label>
                <input name='name' type="text" value={this.props.card.name} onChange={this.handleChangeInput}></input>
                <label>Email: </label>
                <input name='email' type="text" value={this.props.card.email} onChange={this.handleChangeInput}></input>
                <label>LinkedIn: </label>
                <input name='linkedIn' type="text" value={this.props.card.linkedIn} onChange={this.handleChangeInput}></input>
                <label>GitHub: </label>
                <input name='gitHub' type="text" value={this.props.card.gitHub} onChange={this.handleChangeInput}></input>
            </form>
        )
    }
}
    
