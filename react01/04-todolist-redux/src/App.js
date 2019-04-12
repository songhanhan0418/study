import React,{Component,Fragment} from 'react'
import { Button,Row, Col,Input,List } from 'antd';

import store from './store/index.js'
import {getAddItemAction,getChangeItemAction,getDelItemAction} from './store/actionCreator.js'
import AppUI from './AppUI.js'
class App extends Component{
	constructor(props){
		super(props);
		this.state = store.getState()
		store.subscribe(()=>{
			this.setState(()=>store.getState())
		})
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
		this.handleDel = this.handleDel.bind(this)
	}
	handleAdd(){
		const action = getAddItemAction()
		store.dispatch(action)
	}

	handleChange(ev){
		const val = ev.target.value
		const action = getChangeItemAction(val)
		store.dispatch(action)
	}
	handleDel(index){
		const action = getDelItemAction(index)
		store.dispatch(action)
	}
	render(){
		return (
			<AppUI
			handleChange = {this.handleChange}
			val = {this.state.val}
			handleAdd = {this.handleAdd}
			list = {this.state.list}
			handleDel = {this.handleDel}

			/>
		)
	}
}


export default App;