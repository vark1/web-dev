$( () => {
   let item = $('#item')
   let list = $('#list')

   $('#prepend').click(function () {
      let text = item.val()
      list.prepend($(`<li>${text}</li>`))
   })

   $('#append').click(function () {
      let text = item.val()
      list.append($(`<li>${text}</li>`))
   })

   /* ------------------------------------- */

   let fetch = $('#fetch')
   let list1 = $('#people')
   let page = 1

   fetch.click(() => {
      $.get(`https://reqres.in/api/users?page=${page}`, (data) => {
         page++
         for (let person of data.data){
            list1.append(
               $(`<li>
               ${person.first_name} ${person.last_name}
               <img width=100 src="${person.avatar}">
               </li>`)
            )
         }
      })
   })
})