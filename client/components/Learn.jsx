import React from 'react'
import { connect } from 'react-redux'

import { fetchTrees} from '../actions'

import {Link} from 'react-router-dom'

class Learn extends React.Component {
  state={
    isFlipped:false,
    counter: 0
  }


  componentDidMount () {
    this.props.dispatch(fetchTrees())
  }


  clickHandlerForFlashCard = ()=>{
    this.setState({
      isFlipped: true
    }) 
  }

  doubleClickHandlerForFlashCard = () =>{
    this.setState({
      isFlipped: false
    })
  }

  increaseCounter = () =>{
    
    if (this.state.counter == this.props.trees.length -1){
      this.setState({
        counter: 0
      })
    } else {
      this.setState({
        counter: this.state.counter + 1
      })
    }
  }

  reduceCounter = () =>{
    if (this.state.counter == 0){
      this.setState({
        counter: 0
      })
    } else {
      this.setState({
        counter: this.state.counter -1
      })
    }
  }
     
     
  renderTree = (tree) => {
    return this.state.isFlipped ?  <h2>{tree.name}{tree.description}</h2>  : <img src={tree.image}/>
  }
    
    
    render () {

      const tree = this.props.trees[this.state.counter]

      return (
        <>
        <Link to={'/'}>Home</Link>
        <div className='learn'>
          
          <div className='flashCard'  onClick = {this.clickHandlerForFlashCard} onDoubleClick = {this.doubleClickHandlerForFlashCard} >
            
            {tree && this.renderTree(tree)}
          </div>
          <button className='leftButton' onClick={this.reduceCounter}>Last Card</button>
          <button className='rightButton' onClick={this.increaseCounter}>Next Card</button>
        </div>
        </>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    trees: globalState.trees
  }
}

export default connect(mapStateToProps)(Learn)