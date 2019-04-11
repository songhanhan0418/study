import React,{Component,Fragment} from 'react'
import {  DatePicker } from 'antd';
import 'antd/dist/antd.css';
import Item from './Item.js'
import './App.css'
class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			list:['吃饭'],
			val:'',
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
	}
	handleAdd(){
		if(this.state.val == ''){
			return false
		}
		this.setState(preState=>({
			list:[...preState.list,preState.val],
			val:''			
		}))
	}

	handleChange(ev){
		const val = ev.target.value
		this.setState(()=>({
			val
		}))
	}
	handleDel(index){
		const list = [...this.state.list]
		list.splice(index,1)
		this.setState(()=>({
			list
		}))
	}
	getItems(){
		return this.state.list.map((item,index)=>{
			return <Item key={index} content={item} handleDel={this.handleDel.bind(this,index)} />
		})	
	}
	render(){
		return (
			<div className='App'>
				<input onChange={this.handleChange} value={this.state.val} />
				<button onClick={this.handleAdd}>点击</button>
				<ul>
					{
						this.getItems()
					}
				</ul>
			</div>
		)
	}
}


export default App;