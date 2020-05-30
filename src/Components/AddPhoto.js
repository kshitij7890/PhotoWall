import React, {Component} from 'react'

class AddPhoto extends Component {
  render() {
       return (
   <div>
       <div className="form">
         <h1>Photowall</h1>
         <form onSubmit={this.handleSubmit}>
              <input type ="text" placeholder="Link" name="link"/>
              <input type ="text" placeholder="Description" name="description"/>
              <button> Post </button>
         </form>
       </div>
   </div>
   )
   }
}

export default AddPhoto
