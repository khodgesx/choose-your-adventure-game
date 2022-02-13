let playerHealth = 100;
let friends = [];
let enemies = [];
let slays = [];
let playerItems = ["cell-phone", "senor pointy"];
let city ;
let location;

const prompt = require('prompt-sync')();
const username = prompt('Hiya, what is your name?');

console.log(`Hello ${username}`);
console.log("I hate to break it to you, but you're one of the chosen ones. \n You're a slayer, 'arry!")
console.log(`You're on the run because weird things keep happening...All you have is your trusty y-phone and a backpack with ${playerItems[1]} and a few bucks.`)
console.log("\nYou get to the bus station and can take the 6 bus to Bend, Oregon or the 666 bus to Sunnydale, California");
console.log("Which bus do you choose?");

busDecision();

console.log(`Well now you must find your Watcher...pull up your ${playerItems[0]} and search Boogle Maps.`);
console.log(`Find the nearest library, Watchers love to read.`)

boogleMaps();

console.log("After meeting your Watcher, he asks if you are ready for your first night of patrol.\n")

console.log("\nWhat is your response? [Y] 'Yeah let's get out there!' or [N] 'No way dude, I'm not ready for that!'\n")
toPatrolOrToNot();


function toPatrolOrToNot(){
    if (toPatrolOrToNot === "Y"){
        console.log("Hermes is very pleased. He hands you a cross necklace and some holy water and ");
        playerItems.push("cross necklace", "holy water");
    } 
    if (toPatrolOrToNot === "N"){
        console.log("Hermes is bummed. He decides to patrol on his own and sends you away with a cross necklace and a scornful look");
        playerItems.push("cross necklace");
    }
}

function boogleMaps(){
    const mapChoice = prompt(`Do you look up the nearest [L] library or do you hightail it to the nearest [W] winery?`)
    if(mapChoice === "L" && city === "Bend"){
        console.log("Look at you, a regular Bend, Oregon Buffy!")
        console.log("You immediately find your Watcher, Hermes von Giles frantically fumbling with books and is relieved when he notices you there.")
        console.log("'Oh my there you are!'")
        friends.push("Hermes von Giles");
    }else if(mapChoice === "W" && city === "Bend"){
        console.log("I don't blame you. Being a slayer is going to be tough.");
        console.log("Oh snap! Your new Watcher, Hermes von Giles, is a wine lover too! You guys bond over some funky red wine. Good times, but it gives you a headache!")
        friends.push("Hermes von Giles");
        playerHealth -= 5;
    }else if(mapChoice === "L" && city === "Sunnydale"){
        console.log("Smart choice. You arrive at the library, see good old Giles there.")
        console.log("He is happy to see you. He feeds you, gives you some lunch, yum thanks G.")
        playerHealth += 10;
    }else if(mapChoice === "W" && city === "Sunnydale"){
        console.log("Well a winery in Sunnydale isn't your normal haunt...");
        console.log(`Your enemy ${enemies[0]} is there in a murderous rampage, seeking revenge on you but hurting others.`);
        console.log(`You guys battle, you take a hit but ultimately you slay the demon.`)
        console.log("Your new watcher finds you and is happy to see you're already at work.")
        playerHealth -= 10;
        slays += 1;
        enemies.pop();
    }
}

function busDecision(){
    const busChoice = prompt('The 6 to [B] Bend or the 666 to [S] Sunnydale?');
    if(busChoice === "B"){
        console.log("\nGood choice but don't think you'll be avoiding the Hellmouth that easily");
        console.log("\nLong bus ride but you made it.");
        console.log("On the bus you make a friend, Leela. She shares her snacks with you.")
        playerHealth += 10;
        friends.push("Leela");
        city = "Bend";
    }else if(busChoice === "S"){
        console.log("\nStraight to the Hellmouth for you. No fear!");
        console.log("\nYou immediately encounter a demon wreaking havoc on the bus, you slay away! But now his demon wife Grognok is out to get you. Oopsie.");
        console.log("The demon got one swing in before the slay, ouch.");
        playerHealth -=10;
        enemies.push("Grognok");
        city = "Sunnydale";
    }else{
        console.log("You are frozen by indecision. Hopefully you decide before the ticket counter worker decides for you...")
    }
    
    
}

function displayHealth(){
    console.log(`You health level is at ${playerHealth}`)
    if (playerHealth < 10){
        console.log("Find some nourishment!")
    }else if(playerHealth >50 && playerHealth < 100){
        console.log("You're health is ok, but don't push your luck...")
    }else{
        console.log("Feeling good and healthy! Noice.");
    }
}
function displayFriends(){
    for(let i=0; i < friends.length; i++){
        if(friends.length >0){
            console.log(`Your friends are ${friends[i]}, lucky you.`)
        }else{
            console.log("Don't be shy, make some friends!");
        }
        
    }

}
 
function displayEnemies(){
    for(let i=0; i < enemies.length; i++){
        if(enemies.length > 0){
            console.log(`Watch out for ${enemies[i]}. They are not happy with you.`)
        }else{
            console.log("Treading lightly eh? No enemies yet!")
        }
       
    }

}
 
function displaySlays(){
    for(let i=0; i < slays.length; i++){
        if(slays.length > 0){
            console.log(`Hellmouth be damned. It is already? You're doing great with the slays: ${slays[i]}\n`);
        }else{
            console.log("Keep an eye out for vamps and demons and help Buffy slay them all!\n");
        }
        
    }

}

   
