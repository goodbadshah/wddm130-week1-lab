function handleInput() {
    var name = prompt("Enter Your Name: ");
    var hobby = prompt("Enter Your Favourite Hobby: ");
    var colour = prompt("Enter Your Favourite Colour: ");

    var msg = `Your name is ${name}, your favourite hobby is ${hobby}, and your favourite colour is ${colour}.`;
    document.getElementById("opArea").innerHTML = msg;
}