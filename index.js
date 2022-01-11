"use strict";

async function onClick() {
    let joke = document.getElementById('joke');
    let res = await callUrl('https://api.chucknorris.io/jokes/random');
    joke.innerText = res.value;
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
