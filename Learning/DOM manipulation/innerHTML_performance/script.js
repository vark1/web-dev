window.onload = function (){
   let num = this.document.getElementById('num')
   let list = this.document.getElementById('list')
   let print = this.document.getElementById('print')

   print.onclick = function (){
      let start = new Date().getTime()

      let N = parseInt(num.value)
      //2nd way:  let listHTML = ''
      for (let i = 1; i <= N; i++){
         //1st way:  list.innerHTML += '<li>' + i + '</li>'      //This also works but takes a lot of time as the list is printed and nulled out again and again for each and every one of the elements
         // never append innerHTML inside a for loop. Always try to reduce the number of times we are calling innerHTML
         //2nd way:  listHTML += '<li>' + i + '</li>'
         let item = document.createElement('li')   //3rd way
         item.innerText = i
         list.appendChild(item)
      }
      //2nd way:  list.innerHTML = listHTML

      console.log(new Date().getTime() - start)
   }
}