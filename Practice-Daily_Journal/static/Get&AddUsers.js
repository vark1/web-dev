$(function(){
    let username = $('#user_input')
    let addUsername = $('#add_user')
    let getUsername = $('#get_user')
    let userList = $('#user_list')

    addUsername.click(function(){
        addUser(
            username.val(),
            function(addedUser){
                window.alert("Added " + addedUser.name +" to Database")
            }
        )
    })

    getUsername.click(function(){
        getUser(function (users){
            userList.empty()
            for(user of users){
                userList.append(createUserCard(user))
            }
        })
    })
})