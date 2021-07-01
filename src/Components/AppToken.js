import React from 'react'

let AppToken = () => {
    function update() {
        localStorage.clear();
        let token_update = document.getElementById("token").value;
        let limit_update = document.getElementById("limit").value;
        localStorage.setItem('newToken', token_update);
        localStorage.setItem('newLimit', limit_update);
        console.log(token_update);
        console.log(limit_update);
    }

    return (
        <>
            <div>
            <div className="boxtoken">
                <p>
                    <label htmlFor="token">Saisir son token d'accès :  </label>
                    <input type="text" id="token" name="token"/>
                </p>
                <p>
                    <label htmlFor="limit">Choisir le nombre de post à afficher :  </label>
                    <select name="limit" id="limit">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50" selected>50</option>
                        <option value="75">75</option>
                        <option value="100">100</option>
                        <option value="125">125</option>
                        <option value="150">150</option>
                    </select>
                </p>

                <button onClick={update}>Valider les données</button>

            </div>
            </div>

        </>
    );
}

export default AppToken;