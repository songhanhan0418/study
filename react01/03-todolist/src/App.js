import React,{Component,Fragment} from 'react'
import Item from './Item.js'
import './App.css'
class App extends Component{
	constructor(props){
		console.log('app constructor render...')
		super(props);
		this.state = {
			list:['吃饭'],
			val:'',
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
	}
	static getDerivedStateFromProps(nextProps, prevState){
		console.log('getDerivedStateFromProps(nextProps, prevState)',nextProps, prevState)
		return {
			
		}
	}
	shouldComponentUpdate(nextProps, nextState){
		console.log('shouldComponentUpdate(nextProps, nextState)',nextProps, nextState)
		return true
	}
	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log('getSnapshotBeforeUpdate(prevProps, prevState)',prevProps, prevState)
		return 123
	}
	componentDidUpdate(prevProps, prevState,snapshot){
		console.log('componentDidUpdate(prevProps, prevState,snapshot)',prevProps, prevState,snapshot)
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
		console.log('app render...')
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