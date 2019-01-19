import React, { Component } from 'react';
import {sendMessage} from '../api/customSocket'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            room_id: "000000",
            players: [],
            message: String
        }
    }

    handleSubmit = (e) => {
        // 페이지 리로딩 방지
        e.preventDefault();
        // 상태값을 onCreate 를 통하여 부모에게 전달
        this.props.onCreate(this.state);
        // 상태 초기화
        this.setState({
            message: ""
        }
        )
    }
    handleChange = (e) => {
        this.setState({
            message: e.target.value
        })
    }

    render() {
        const list = this.state.players.map(player =>
            <div>
                <div>{player.message} </div>
                <p></p>
                {player.id} 
                <br>
                </br>
                <br></br>
            </div>);
        return (
            <div>
                <hr></hr>
                {list}
                <input
                    value={this.state.message}
                    onChange={this.handleChange}></input> 

                 <button onClick={sendMessage(this.state.message)}>SEND</button>
            </div>
        )
    }
}

export default Main;