import React from 'react'
import { connect } from 'react-redux'

import { fetchTrees} from '../actions'

export class App extends React.Component {
  state={
    isFlipped:false,
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
     
     
    
    
    render () {
      return (
        <div>
        {/* <div onClick = {this.clickHandlerForFlashCard} onDoubleClick = {this.doubleClickHandlerForFlashCard}className ='flashCard'>
          {this.props.trees.map((tree) => {
            return(
              this.state.isFlipped? <h2 key={tree.id}>{tree[0].name}</h2> : <img key={tree.id} src={tree.image}/> 
            )
          })} 
      </div> */}
      <div  onClick = {this.clickHandlerForFlashCard} onDoubleClick = {this.doubleClickHandlerForFlashCard} >
        {this.props.trees.filter(tree => tree.id === Math.floor(Math.random()* this.props.trees.length)+1).map((tree) => {
        return(
          <div key={tree.id}>
           {this.state.isFlipped ? <img src={tree.image}/> : <h2>{tree.name}</h2>}
          </div>
        )
      })}
      </div>



      
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    trees: globalState.trees
  }
}

export default connect(mapStateToProps)(App)

