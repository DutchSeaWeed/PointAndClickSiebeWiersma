document.getElementById("mainTitle").innerText = "Point and Click adventure";
const offsetCharacter = 16;
const sec = 1000;
const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

const counterSpeech = document.getElementById("counterSpeech");
const counterCharacter = document.getElementById("counterCharacter");

const characterAudio = document.getElementById("characterAudio");
const counterAudio = document.getElementById("counterAudio");

gameWindow.onclick = function (e) {
    if (mainCharacterSpeech.style.opacity == 0) {
        var rect = gameWindow.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.

        mainCharacter.style.left = x - offsetCharacter + "px";
        mainCharacter.style.top = y - offsetCharacter + "px";

        console.log(e.target.id);
        switch (e.target.id) {
            case "closet":
                showMessage(mainCharacterSpeech, characterAudio, "where is my hoodie?");
                break;
            case "fire":
                showMessage(mainCharacterSpeech, characterAudio, "Why did i put my hand in the fire...?");
                break;
            case "otherCharacter":
                showMessage(mainCharacterSpeech, characterAudio, "damn this guy is ugly");
                setTimeout(function () { counterCharacter.style.opacity = 1; }, 4 * sec);
                setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "we look the same dumbass");
                setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "no i have a bigger.... nevermind");
                setTimeout(function () { counterCharacter.style.opacity = 0; }, 12 * sec);
                break;
            default:
                hideMessage(mainCharacterSpeech, characterAudio);
                hideMessage(counterSpeech, counterAudio);
                break;
        }
    }
}

function showMessage(targetBubble, targetAudio, message) {
    targetAudio.currentTime = 0;
    targetAudio.play();
    targetBubble.innerHTML = message;
    targetBubble.style.opacity = 1;
    setTimeout(hideMessage, 4 * sec, targetBubble, targetAudio);
}

function hideMessage(targetBubble, targetAudio) {
    targetAudio.pause();
    targetBubble.innerHTML = "...";
    targetBubble.style.opacity = 0;
}