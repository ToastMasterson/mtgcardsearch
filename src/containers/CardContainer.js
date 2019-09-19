import React, {Component} from 'react'
import CardList from '../components/CardList'
import CardSearch from '../components/CardSearch'

export default class CardContainer extends Component {

    state = {
        cards: [],
        isLoading: true
    }

    componentDidMount(){
        fetch("https://api.magicthegathering.io/v1/cards/")
        .then(response => response.json())
        .then(result => this.setState({
            cards: result.cards,
            isLoading: false
        }))
    }

    searchCardsByColor = (color) => {
        this.setState({
            isLoading: true
        })
        fetch(`https://api.magicthegathering.io/v1/cards?colors=${color}`)
        .then(response => response.json())
        .then(result => this.setState({
            cards: result.cards,
            isLoading: false
        }))
    }
    searchCardsByName = (name) => {
        this.setState({
            isLoading: true
        })
        fetch(`https://api.magicthegathering.io/v1/cards?name=${name}`)
        .then(response => response.json())
        .then(result => this.setState({
            cards: result.cards,
            isLoading: false
        }))
    }

    render(){
        return (
            <div>
                <CardSearch searchCardsByName={this.searchCardsByName} searchCardsByColor={this.searchCardsByColor} />
                {this.state.isLoading 
                ? <div id="loading"><img alt="alt" src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" /></div>
                : <CardList cards={this.state.cards} />}
            </div>
        )
    }
}