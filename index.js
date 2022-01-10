"use strict";

const onClick = () => {
    let joke = document.getElementById('joke');
    callUrl('https://api.chucknorris.io/jokes/random')
        .then((v) => {
            joke.innerText = v.value;
        })
}

async function callUrl(url) {
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    } catch (err) {
        console.log('something is wrong', err)
    }
}
