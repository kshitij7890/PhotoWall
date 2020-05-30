import React, {Component} from 'react'

class AddPhoto extends Component {

  constructor() {
          super()
          this.handleSubmit = this.handleSubmit.bind(this) ///we always do this when this is used for a function for eg this.handleSubmit()
      }

//--------------------------constructor() finished-----------------------------//
      handleSubmit(event) {
          event.preventDefault();
          const imageLink = event.target.elements.link.value
          const description = event.target.elements.description.value
          const post = {
              id: Number(new Date()),
              description: description,
              imageLink: imageLink
          }
          if (description && imageLink){
              this.props.onAddPhoto(post)
            //  this.props.onHistory.push('/')
          }

      }
//--------------------------handleSubmit() finished-----------------------------//


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
//--------------------------render() finished-----------------------------//


}

export default AddPhoto
