import React,{Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'

class Main extends Component {
    constructor(){
      super()
      this.state = {
        posts:[{
           id: 0,
           description: "beautiful landscape",
           imageLink: "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
           "3919321_1443393332_n.jpg"
           }, {
           id: 1,
           description: "Aliens???",
           imageLink: "https://img.purch.com/rc/640x415/aHR0cDovL3d3dy5zcGFjZS5jb20vaW1hZ2VzL2kvMDAwLzA3Mi84NTEvb3JpZ2luYWwvc3BhY2V4LWlyaWRpdW00LWxhdW5jaC10YXJpcS1tYWxpay5qcGc=" +
           "08323785_735653395_n.jpg"
           }, {
           id: 2,
           description: "On a vacation!",
           imageLink: "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg"
         }],//whenever we udate the array we change the state of the component
      }
      this.removePhoto = this.removePhoto.bind(this);//this is always properly bound

    //  console.log("constructor");
    }
//we want when clicked on remove it should retrigger the render method!
    removePhoto(postRemoved){
      console.log(postRemoved.description)
      this.setState((state) => ({//state is the current state
        posts:state.posts.filter(post => post!==postRemoved)//posts becomes posts minus the postRemoved waali post and return the updated state
      }))//function in setstate return new object which serves as updated state
    }
    //STEPS FOLLOWED TO UPDATE STATE:
    //to access the above method in every photo Component
    //pass method removePhoto to PhotoWall as prop.
    //from photowall to every single photo
    //that same function then given as a event handler to every single button
    //when we click remove button it triggers onclick handler and it calls
    //function removePhoto passing in its post as an argument and
    //that post itslf that we clicked remove button on using it to
    //update state of our component by filtering it out from array
    //of current state and updating array.

   addPhoto(postSubmitted){
     this.setState(state => ({
         posts: state.posts.concat([postSubmitted])
     }))
   }



    componentDidMount(){//if in future use want to fetch data from database do it inside component did mount
    //console.log("componentDidMount()");
    }

    //componentWillMount() is executed before rendering
    //componentDidMount() is invoked immediately after a component is mounted (inserted into the tree)
    //componenDidUpdate() is invoked after re render/or any updates are made and render is called again

    componentDidUpdate(prevProps,prevState) {
      //alert("re-rendered");
      console.log(prevState.posts);
      console.log(this.state);
    }

    render() {//console.log("render");
      return (<div>

         <Route exact path ="/" render={() => (
           <div>
                  <Title title={'Photowall'}/>
                  <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate} />
          </div>

        )}/>

      <Route path="/AddPhoto" render={({history}) => (
        <AddPhoto onAddPhoto={(addedPost) => {
          this.addPhoto(addedPost)
          history.push('/')
        }}/>
      )}/>

    </div>)

    }//**there in PhotoWall there are two props one for mapping over current state as an array this.state and another as a function removePhoto
}


export default Main
