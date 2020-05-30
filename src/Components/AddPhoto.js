import React, {Component} from 'react'

class AddPhoto extends Component {
  render() {
       return (
   <div>
       <div className="form">
         <form onSubmit={this.handleSubmit}>
              <input type ="text" placeholder="Link" name="link"/>
              <input type ="text" placeholder="Desciption" name="description"/>
              <button> Post </button>
         </form>
       </div>
   </div>
   )
   }
}

export default AddPhoto
