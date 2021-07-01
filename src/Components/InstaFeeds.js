import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Feed from './Feed'
import './instaFeeds.css'

const InstaFeeds = ({token, ...props}) => {
    const [feeds, setFeedsData] = useState([]);
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        // this is to avoid memory leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,username&limit=${props.limit}&access_token=${tokenProp.current}`)
                .then((resp) => {
                    setFeedsData(resp.data.data)
                    localStorage.setItem('newUsername', resp.data.data[0].username);
                    console.log(localStorage.getItem('newUsername'));
                })
          } catch (err) {
              console.log('error', err)
          }

        }

        // manually call the fecth function
        fetchInstagramPost();

        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    return (
        <>
            <h3>Bienvenue sur le profil de {localStorage.getItem('newUsername')}</h3>
            <h5>Voici ces {props.limit} derniers posts</h5>
            <div className="container">
                {feeds.map((feed) => (
                    <Feed key={feed.id} feed={feed} />
                ))}
            </div>
        </>
    );
}

export default InstaFeeds;