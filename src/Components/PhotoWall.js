import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';


function PhotoWall(props){
  return (
<div>
          <a className="addIcon" onClick={props.onNavigate} href="#AddPhoto"> </a>
        
          <div className="photoGrid">
          {props.posts.map((post,index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
        </div>
</div> );
}


PhotoWall.propTypes={
  posts:PropTypes.array.isRequired,
  onRemovePhoto:PropTypes.func.isRequired
}//these are the props we declared in main.js

export default PhotoWall
