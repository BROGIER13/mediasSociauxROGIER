import React from 'react'
import InstaFeeds from './InstaFeeds'

let AppGallery = () => {
    if(localStorage.getItem('newToken') == null){
        alert("Aucun token envoyé");
    }

    return (
        <>
            <div>
                <InstaFeeds token={localStorage.getItem('newToken')} limit={localStorage.getItem('newLimit')}/>
            </div>
        </>
    )
}
export default AppGallery;