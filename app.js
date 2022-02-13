let playerHealth = 100;
let friends = [];
let enemies = [];
let slays = [];
let playerItems = ["cell-phone", "senor pointy"];
let city ;
let location;
let watcher ;

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


toPatrolOrToNot();



function toPatrolOrToNot(){
    const toPatrolOrToNot = prompt(`\nWhat is your response? [Y] 'Yeah let's get out there!' or [N] 'No way dude, I'm not ready for that!'\n`)
    if (toPatrolOrToNot === "Y"){
        console.log("Your Watcher is very pleased. He hands you a cross necklace and some holy water and you guys head out.");
        playerItems.push("cross necklace", "holy water");
        console.log("While you are out you see a couple but something seems off about one of them...Yep one is a vamp.\n")
        const toSaveOrNot = prompt (`Do you [S] save them or [P] pretend not to see anything?`);
        if (toSaveOrNot === "S"){
            console.log("The vamp goes in for the bite but you are too quick and you save the poor sap who thought they had met someone nice for once.");
            console.log("The poor sap, Gene, is now your friend.");
            friends.push("Gene");
        }else if(toSaveOrNot === "P"){
            console.log("The vamp goes in for the bite and your Watcher tries to intervene. Oops now the poor sap who was with the vamp is dead and your Watcher is too!")
            console.log("Your heart is now broken...");
            watcher === false;
            if(friends.length > 0){
                console.log(`Luckily you have friends...`)
                displayFriends()
                console.log("Your friend boosts your mental health and you remember there is a Watchers Council you can track down.");
                console.log("Now you must journey to find a new Watcher\n")
                const goToWatchersCouncil = prompt (`Do you [G] go to Watchers Council or [N] not?`)
                if(goToWatchersCouncil === "G"){
                    console.log("Good choice. You can't do this without guidance. You're just a baby slayer, after all.")
                    console.log("The council appoints you a new Watcher, Wesley")
                    watcher === true;
                }else if(goToWatchersCouncil === "N"){
                    console.log("You're going rogue eh?\n")
                    console.log("Good luck with that!")
                    console.log("You are trying to make it back to your hotel but are low on cash and food, your health is waning and you just lost a friend.")
                    friends.pop()
                    console.log("As you're dumpster diving, you notice someone is watching you...\n")
                    console.log("You think you'll have to pull out your slaying powers but you're lucky this time.\n")
                    console.log("It is the bad vamp turned good, Spike. You are too desperate to turn his help down.")
                    friends.push("Spike");
                    console.log("Spike gets you some food and lets you know that the Watchers council will be sending you a new Watcher, Wesley.\n")
                    playerHealth =+ 10;
                    watcher === true;

                }
            }else if(friends.length = 0){
                console.log("A friend would really come in handy...\n")
                console.log("Looks like you don't have any :(")
                displayFriends()
                console.log("You need to find help fast");
                const findFriend = prompt (`Luck for you someone is lurking in the shadows...do you [A] approach or [R] run from the shadow lurker?`)
                if(findFriend === "A"){
                    console.log("Lucky for you, it is the bad vamp turned good, Spike!")
                    friends.push("Spike");
                    console.log("Spike helps link you up with the Watchers council and your now you have him and yourWacther Wesley is here to help you.");
                }else if(findFriend === "R"){
                    console.log("Nice try. It is the bad vamp turned good, Spike. He's got hundreds of years on you and he outruns you.");
                    console.log("He doesn't scare easily and is there to help whether you want it or not.\n")
                    friends.push("Spike");
                    console.log("He lets you know that the Watchers council will be sending you a new Watcher, Wesley.")
                    watcher === true;

                }
            }
        }
    
    } 
    else if (toPatrolOrToNot === "N"){
        console.log("Hermes is bummed. He decides to patrol on his own and sends you away with a cross necklace and a scornful look :(");
        playerItems.push("cross necklace");
        console.log("On your way home you encounter a vamp.")
        const toSlayOrNot = promt(`Do you [S] slay or [R] run?`)
        if (toSlayOrNot === "S"){
            console.log("You guys battle a bit but he is no match for you! Check and slay.")
            slays.push("vamp");
        }else if(toSlayOrNot == "R"){
            console.log("He is a big one! You take off running.")
            console.log("The vamp catches up and you get some good hits in but he has you pinned...")
            console.log("Thank glob for Giles! You see him pop appear behind the dust that once was the vamp.")
            playerHealth -= 10;

        }
    }
}

function boogleMaps(){
    const mapChoice = prompt(`Do you look up the nearest [L] library or do you hightail it to the nearest [W] winery?`)
    if(mapChoice === "L" && city === "Bend"){
        console.log("Look at you, a regular Bend, Oregon Buffy!")
        console.log("You immediately find your Watcher, Hermes von Giles frantically fumbling with books and is relieved when he notices you there.")
        console.log("'Oh my there you are!'")
        watcher === true;
    }else if(mapChoice === "W" && city === "Bend"){
        console.log("I don't blame you. Being a slayer is going to be tough.");
        console.log("Oh snap! Your new Watcher, Hermes von Giles, is a wine lover too! You guys bond over some funky red wine. Good times, but it gives you a headache!")
        watcher === true;
        playerHealth -= 5;
    }else if(mapChoice === "L" && city === "Sunnydale"){
        console.log("Smart choice. You arrive at the library, see good old Giles there.")
        console.log("He is happy to see you. He feeds you, gives you some lunch, yum thanks G.")
        watcher === true;
        playerHealth += 10;
    }else if(mapChoice === "W" && city === "Sunnydale"){
        console.log("Well a winery in Sunnydale isn't your normal haunt...");
        console.log(`Your enemy ${enemies[0]} is there in a murderous rampage, seeking revenge on you but hurting others.`);
        console.log(`You guys battle, you take a hit but ultimately you slay the demon.`)
        console.log("Your new watcher finds you and is happy to see you're already at work.")
        watcher === true;
        playerHealth -= 10;
        slays.push("Gragnok");
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
        slays.push("paramore of Grognok")
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

function lose(){
    if (playerHealth = 0){
        console.log("No more health...Game over!")
    }
}   
