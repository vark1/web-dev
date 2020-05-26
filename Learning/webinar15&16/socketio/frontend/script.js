let socket = io()
socket.on('connected',()=>{
    console.log('connected' + socket.id)
})

$(function () {
    let msglist = $('#msglist')
    let sendbtn = $('#sendmsg')
    let msgbox = $('#msgbox')

    sendbtn.click(function(){
        socket.emit('send_msg', {message: msgbox.val() })
    })

    socket.on('recv_msg', function (data){
        console.log("Got msg")
        msglist.append($('<li>' + data.message + '</li>'))
    })
})

