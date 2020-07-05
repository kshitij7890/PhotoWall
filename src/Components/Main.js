 import React,{Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {removePost} from '../redux/actions'

class Main extends Component {
    constructor(){
      super() //to use this operator
    }

    render() {//console.log("render");
      console.log(this.props)
      return (<div>
         <h1>
           <Link to="/"> Photowall </Link>
         </h1>
         <Route exact path ="/" render={() => (
           <div>
                  <PhotoWall {...this.props} />
          </div>

        )}/>

      <Route path="/AddPhoto" render={({history}) => (
        <AddPhoto {...this.props} onHistory={history}/>
      )}/>

    </div>)

    }//**there in PhotoWall there are two props one for mapping over current state as an array this.state and another as a function removePhoto
}


export default Main
