import React, { useState, useReducer, useContext } from "react";

import {
	aggiungi,
	calcola,
	cancella,
	cancellaTutto,

}
	from "./script.js";
import "./style.css";
const AppContext = React.createContext(null);
export function App() {
	return (<Calcolatrice />);
}
 function Calcolatrice() {
	const [state, dispatch] = useReducer(AppReducer, { Display: "" });

	function Display() {
		const {state, dispatch} = useContext(AppContext)
		return (
			<div className="display">{state.Display}</div>
		);
	}
	
	function Bottone(props) {
		const testo = props.testo
		return (
			<button className={"Bottone rounded-circle " + props.className}
			onClick = {()=> dispatch({type: "w", payload: {testo}})}>
			{ props.testo }
			</button >);
	}

	return (
		<AppContext.Provider value= {{state, dispatch}}>
		<div className="calcolatrice container ">
			<Display/>
			<div className="Contenitore">
			<div>
			<Bottone className="carattere" testo={"AC"} />
			<Bottone className="carattere" testo={"DEL"} />
			<Bottone className="carattere" testo={"√"} />
			<Bottone className="carattere" testo={"÷"} />
			</div>
			<div>
			<Bottone className="numero" testo={7} />
			<Bottone className="numero" testo={8} />
			<Bottone className="numero" testo={9} />
			<Bottone className="carattere" testo={"x"} />
				
			</div>
			<div>
			<Bottone className="numero" testo={5} />
			<Bottone className="numero" testo={6} />
			<Bottone className="numero" testo={4} />
			<Bottone className="carattere" testo={"+"} />
			</div>
			<div>
			<Bottone className="numero" testo={1} />
			<Bottone className="numero" testo={2}/>
			<Bottone className="numero" testo={3} />
			<Bottone className="carattere" testo={"-"} />
			</div>
			<div>
			<Bottone className="carattere" testo={"."} />
			<Bottone className="numero zero rounded-pill" testo={0} />	
			<Bottone className="carattere" testo={"="} />
			
			

			</div>
		</div>
		</div>
		</AppContext.Provider>);
}


function AppReducer(state,action){
let newState = {...state}
if( action.type == "w" )
newState.Display = write(newState.Display, action.payload.testo)
return newState;
}

 function write( expression, text){
if(text == "DEL")
	return cancella(expression);
if (text== "AC")
	return cancellaTutto();

if(text== "=")
	return calcola(expression);
	return aggiungi(expression, text);

 }