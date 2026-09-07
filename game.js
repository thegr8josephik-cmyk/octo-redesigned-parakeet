// SYSTEM HUNTER: ASCENSION v2.0
const SUF=['','K','M','B','T','Qa','Qi','Sx','Sp','Oc'];
const fmt=n=>{if(n<1000)return Math.floor(n)+'';let i=0;while(n>=1000&&i<SUF.length-1){n/=1000;i++}return n.toFixed(2)+SUF[i]};
const R=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const $=id=>document.getElementById(id);
const GROW=60000;
console.log('Game initialized');
