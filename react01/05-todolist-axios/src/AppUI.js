import React,{Component,Fragment} from 'react'
import { Button,Row, Col,Input,List } from 'antd';

import './App.css'
const AppUI =(props)=>{
	const {handleChange,val,handleAdd,list,handleDel } = props;
	return (
		<div className='App'>
		    <Row>
		      <Col span={12}>
		      	<Input placeholder="请输入" onChange={handleChange} value={val}/>
		      </Col>
		      <Col span={12}>
		      	<Button type="primary" onClick={handleAdd} >点击</Button>
		      </Col>
			</Row>
			<List
				style={{marginTop:'10px'}}
				bordered
				dataSource={list}
				renderItem={(item,index) => (<List.Item onClick={()=>{handleDel(index)}}>{item}</List.Item>)}
			/>
		</div>
	)
}


export default AppUI;