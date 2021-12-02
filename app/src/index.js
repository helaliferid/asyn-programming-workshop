import {load} from './lib/load';


const apiBaseUri = 'https://cat-fact.herokuapp.com';
const factsEndPoints = '/facts';
const fullURI=`${apiBaseUri}${factsEndPoints}`
const output=document.querySelector('#output');

load(fullURI)
   .then(data=>{
        output.innerHTML=data;
   })
   .catch(raison=>{
        output.innerHTML=raison
   })
   .finally(()=>{
        console.log('All things is completed')
   })

