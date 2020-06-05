//All the functions are defined here

//this sends a post req to /routes/users which handles requests related to users
function addUser(name, done){
    $.post('/routes/users', //path
    {
        name: name          //data
    },
    function (data){        //callback function
        done(data)
    }
    )
}

//this sends a get req to /routes/users which handles requests related to users
function getUser(done){
    $.get('/routes/users',function (data){
        done(data)
    })
}

function createUserCard(user){
    return $(`
        <div>
            <h4>${user.id}</h4>
            <h4>${user.name}</h4>
            <button>HELLO</button>
        </div>
    `)
}