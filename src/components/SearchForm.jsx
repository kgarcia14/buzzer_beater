import Styled from 'styled-components';
import React, { Component } from 'react';
import Player from './Player';

const Input = Styled.input`
    margin-top: 25px;
    height: 30px;
    width: 300px;
    font-size: 1rem;
    border: 1px solid #333;
    border-radius: 5px;
`;

const Button = Styled.button`
    height: 35px;
    width: 306px;
    background-color: #282c34;
    border: none;
    border-radius: 5px;
    color: #d67a01;
    margin-top: 5px;
    font-size: 1rem
`;

const Form = Styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const P = Styled.p`
    color: #fff;
    font-size: 1.2rem;
`;

class SearchForm extends Component {
    constructor(props) {
        super (props);
        this.state = {
            player: '',
            playerArray: []
        }
    }

    _onChange = (field, value) => {
        this.setState({
            [field]: value
        });
    };

    _handleSubmit = (event) => {
        event.preventDefault();
        this.playerId()
        console.log(this.state.player)
    }

    _handleSubmit = async (event) => {
        event.preventDefault();
        const url = `https://www.balldontlie.io/api/v1/players?search=${this.state.player}`;
        const data = await fetch(url)
            .then(response => response.json());
            console.log(data)
        this.setState({
            playerArray: [...this.state.playerArray, data],
        });
    };

    render() {
        const { playerArray } = this.state;

        return(
            <>
                <Form onSubmit={this._handleSubmit}>
                    <Input
                        name="player"
                        type="text"
                        placeholder="Search Player"
                        value={this.state.player}
                        onChange={(event) => {
                            this._onChange("player", event.target.value)
                        }}
                    />
                    <Button type="submit">Take The Shot!</Button>
                </Form>
                
                {playerArray.length ? <Player playerArray={playerArray} /> : <P>*Search For NBA Player*</P>}
            </>
        )
    }
    
}


export default SearchForm;