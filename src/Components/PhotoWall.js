import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


function PhotoWall(props){
  return (
<div>
          <Link className="addIcon"  to="/AddPhoto"> </Link>

          <div className="photoGrid">
          {props.posts
            .sort(function(x,y){
              return y.id- x.id //descending order
            })
            .map((post,index) => <Photo key={index} post={post} {...props} index={index}/>)}
        </div>
</div> );
}


PhotoWall.propTypes={
  posts:PropTypes.array.isRequired,
  //onRemovePhoto:PropTypes.func.isRequired
}//these are the props we declared in main.js

export default PhotoWall
