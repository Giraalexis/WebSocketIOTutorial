console.log("chat js enabled");
const socket = io();

//DOM Element
let message = document.querySelector("#message");
let username = document.querySelector("#username");
let btn = document.querySelector("#send");
let output = document.querySelector("#output");
let actions = document.querySelector("#actions");

btn.addEventListener("click", function(){
    socket.emit('chat:message',{
        username: username.value,
        message: message.value
    });

});

socket.on('chat:message', function(data){
    output.innerHTML += `<p>
        <strong> ${data.username}</strong>: ${data.message}
    </p>`;
})