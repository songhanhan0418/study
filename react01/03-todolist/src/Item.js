import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Item extends Component{
	constructor(props){
		console.log('item constructor render...')
		super(props)
	}
	componentWillUnmount(){
		console.log('item componentWillUnmount()')
	}
	render(){
		console.log('item render...')
		const {handleDel,content} = this.props
		return (
			<li onClick={handleDel} >
				{content}
			</li>
			)
	}
}
Item.propTypes = {
    content:PropTypes.string,
    index:PropTypes.number,
    handleDelete:PropTypes.func,
    test:PropTypes.string.isRequired
}
Item.defaultProps = {
    test:'Hello'
}
export default Item