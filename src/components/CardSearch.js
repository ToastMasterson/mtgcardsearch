import React, {Component} from 'react'


export default class CardSearch extends Component {

    state = {
        colorInput: "",
        nameInput: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleColorSubmit = (event) => {
        event.preventDefault()
        this.props.searchCardsByColor(this.state.colorInput)
    }
    handleNameSubmit = (event) => {
        event.preventDefault()
        this.props.searchCardsByName(this.state.nameInput)
    }

    listTypes = () => {
        const cardColors = ["red", "blue", "white", "green", "black"]
        return cardColors.map(color => ( <li key={color}>{color}</li>) )
    }
    

    render(){
        return(
            <div id="card-form">
                <form onSubmit={this.handleColorSubmit}>
                    <label htmlFor="colorInput">Search by Color: </label>
                    <input onChange={this.handleChange} type="text" name="colorInput" value={this.state.colorInput} />
                    <input type="submit" />
                    <ul>Common Colors:{this.listTypes()}</ul>
                </form>
                <form onSubmit={this.handleNameSubmit}>
                    <label htmlFor="nameInput">Search by Name:</label>
                    <input onChange={this.handleChange} type="text" name="nameInput" value={this.state.nameInput} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}