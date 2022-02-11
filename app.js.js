let playerHealth = 100;
let friends = [];
let enemies = [];
let slays = [];
let playerItems = [];

const prompt = require('prompt-sync')();
const username = prompt('Hiya, what is your name?');

console.log(`Hello ${username}`);
console.log("You are at the bus station and can take the 6 bus to Bend, Oregon or the 666 bus to Sunnydale, California");
console.log("Which bus do you choose?");


function busDecision(){
    const busChoice = prompt('The 6 to [B] Bend or the 666 to [S] Sunnydale?');
    if(busChoice === "B"){
        console.log("Good choice but don't think you'll be avoiding the Hellmouth that easily");
        console.log("Long bus ride but you made it.");
        console.log("On the bus you make a friend, Leila. She shares her snacks with you.")
        playerHealth =+ 10;
        friends.push("Leela");
    }else if(busChoice === "S"){
        console.log("Straight to the Hellmouth for you. No fear!");
        console.log("You immediately slay a demon and now his demon wife Grognok is out to get you. Oops");
        console.log("The demon gets one swing in before the slay, ouch.");
        playerHealth -=10;
        enemies.push("Grognok");
    }else{
        console.log("You are frozen by indecision. Hopefully you decide before the ticket counter worker decides for you...")
    }
    displayStatus()
}
busDecision();
function displayStatus(){
    console.log(`You health level is at ${playerHealth}`)
    if (playerHealth < 10){
        console.log("Find some nourishment!")
    }else if(playerHealth >50 && playerHealth < 100){
        console.log("You're health is ok, but don't push your luck...")
    }else{
        console.log("Feeling good and healthy! Noice.");
    }
    for(let i=0; i < friends.length; i++){
        if(friends.length >0){
            console.log(`Your friends are ${friends[i]}, lucky you.`)
        }else{
            console.log("Don't be shy, make some friends!");
        }
        
    }
    for(let i=0; i < enemies.length; i++){
        if(enemies.length > 0){
            console.log(`Watch out for ${enemies[i]}. They are not happy with you.`)
        }else{
            console.log("Treading lightly eh? No enemies yet!")
        }
       
    }
    for(let i=0; i < slays.length; i++){
        if(slays.length > 0){
            console.log(`Hellmouth be damned. It is already? You're doing great with the slays: ${slays[i]}`)
        }else{
            console.log("Keep an eye out for vamps and demons and help Buffy slay them all!")
        }
        
    }
}