"use strict";

// Variables started

let selectOption = document.querySelector('#regionName');
let baseURL = "https://islomapi.uz/api/present/day";
let tong = document.querySelector('.tong');
let quyosh = document.querySelector('.quyosh');
let peshin = document.querySelector('.peshin');
let asr = document.querySelector('.asr');
let shom = document.querySelector('.shom');
let xufton = document.querySelector('.xufton');


// Variables ended

function mainRenderData(object){
    object.forEach((el)=>{
        let div = document.createElement('div');
        div.classList.add('prayer-time');
        div.innerHTML=`
        
        <h3>Tong</h3>
        <img src="./assets/images/svg/isha-prayer 1.svg" alt="bomdod">
        <h2>${el.tong_saharlik}</h2>
        `
    })
}

function renderData(loop){
    loop.forEach((el)=>{
        let div = document.createElement('option')
        div.setAttribute('value',`${el}`)
        div.innerHTML = `
            ${el}
        `

        selectOption.append(div);
    })
}

renderData(provencie)

async function findTime(el){
    try{
        let response = await fetch(baseURL+`?region=${el}`)
        let result = await response.json()
        mainRenderData(result)
    }catch(err){
        console.log(err);
    }
}

selectOption.addEventListener('change',(e)=>{
    findTime(e.target.value)
})