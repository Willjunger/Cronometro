import React, { Component } from "react";
import "./style.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numero: 0,
			botao: "VAI"
		};
		this.vai = this.vai.bind(this);
		this.zerar = this.zerar.bind(this);
		this.timer = null;
	}

	vai() {
		let state = this.state;

		if (this.timer !== null) {
			clearInterval(this.timer);
			this.timer = null;
			state.botao = "VAI";
		} else {
			this.timer = setInterval(() => {
				let state = this.state;
				state.numero += 0.1;
				this.setState(state);
			}, 100);
			state.botao = "PAUSAR";
		}
		this.setState(state);
	}

	zerar() {
		if (this.timer !== null) {
			clearInterval(this.timer);
			this.timer = null;
		}
		let state = this.state;
		state.numero = 0;
		state.botao = "VAI";
		this.setState(state);
	}

	render() {
		return (
			<div className="container">
				<img className="image" src={require("./assets/cronometro.png")} alt="cronometro" />
				<a className="timer">{this.state.numero.toFixed(1)}</a>
				<div className="areaBtn">
					<a className="botao" onClick={this.vai}>
						{this.state.botao}
					</a>
					<a className="botao" onClick={this.zerar}>
						ZERAR
					</a>
				</div>
			</div>
		);
	}
}

export default App;
