import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ProfilePreview from '../Components/ProfilePreview';
import PostBox from '../Components/PostBox';
import SocialPost from '../Components/SocialPost';
import axios from 'axios';

function Feed() {

  const [nombreUsuario, setNombreUsuario] = useState(null);
  const apiUrl = 'https://randomuser.me/api/?results=3';

  useEffect( () => {

      axios.get(apiUrl).then((response) => {
          setNombreUsuario(response.data.results[0]);
      }).catch((error) => {
          console.error('Error');
      });
  },[]);

    return (
      <main className='bg-secondary-subtle'>
        <div className='container p-3'>
          <div className='row'>
            <div className='col-md-5 p-3 rounded-5'>
              <ProfilePreview />
            </div>
            <div className='col-md-7 p-3 rounded-5'>
              <PostBox />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-5'></div>
            <div className='col-md-7 p-3 rounded-5'>
              <SocialPost nombrePersona={'Mr. Beast'} />
            </div>
          </div>
        </div>
      </main>
    );
}

export default Feed;