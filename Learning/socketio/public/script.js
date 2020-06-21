let socket = io()

let boomBtn = document.getElementById('boom')   //event from client to the server
boomBtn.onclick = function(){
   socket.emit('boom')
}

socket.on('whizz',()=>{                         //event from server to the client
   let div = document.createElement('div')
   div.innerText = 'whizz'
   document.body.appendChild(div)
})