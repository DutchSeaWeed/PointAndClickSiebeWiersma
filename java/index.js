document.getElementById("mainTitle").innerText = "Point and click adventure";

const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");
const offsetCharacter = 16;

gameWindow.onclick = function(e){
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";

    console.log(e.target.id);

    switch(e.target.id){
        case "door":
            console.log("door clicked")
            break
        case "fire":
            console.log("fire clicked")
            break
        default:
            console.log("Me when the when the me the me when")
            break
    }
}