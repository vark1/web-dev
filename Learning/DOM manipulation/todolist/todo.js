window.onload = function () {

   let newtask = document.getElementById('newtask')
   let addtask = document.getElementById('addtask')
   let todolist = document.getElementById('todolist')

   addtask.onclick = function (){
      let li = document.createElement('li')

      //Add the X button
      let xBtn = document.createElement('button')
      xBtn.innerText = 'X'
      xBtn.onclick = function (event){
         event.target.parentElement.remove()
      }

      //Add the order button
      let upBtn = document.createElement('button')
      upBtn.innerText = "^"
      upBtn.onlick = function (event){
         //event.target = the up button
         //event.target.parentElement = the <li> item
         //event.target.parentElement.parentElement is the todolist
         console.log("moved up") 
         event.target.parentElement.parentElement.insertBefore(
            event.target.parentElement, //insert this element
            event.target.parentElement.previousElementSibling  //Before its previous element
         )
      }


      //Add the task text
      let taskSpan = document.createElement('span')
      taskSpan.innerText = newtask.value


      li.appendChild(xBtn)
      li.appendChild(upBtn)
      li.appendChild(taskSpan)
      todolist.appendChild(li)
   }
}