var allstudents = document.getElementsByClassName('student-item cf');
var itemsper = 10;
function showPage(num, list){
   for(let i = 0; i <list.length; i++){
      list[i].style.display = "none";
   }
   for(let i = (itemsper*(num-1)); i <(itemsper*(num) - 1); i++){ 
      list[i].style.display = "block";
      }
   }
showPage(1,allstudents);
//sets the page to always have 10 students and allows the user to see different students on the page


var page = document.getElementsByClassName("page")[0];
function appendPageLinks(list){
   for(let i = 1; i <list.length/itemsper + 1; i++){
      let but = document.createElement("button");
      but.className = "pagebuts"; 
      but.textContent = i; 
      page.appendChild(but);
      but.style.marginTop = "2em";
      but.style.marginRight = ".5em";
   }
}
appendPageLinks(allstudents);

//creates the buttons on the bottom of the screen to toggle between pages of students
let pages = allstudents;
page.addEventListener('click', (event)=>{
   if(event.target.className == "pagebuts"){
      showPage(event.target.textContent, pages);
   }
})
//creates the functionality of the buttons to actually toggle between screens
let header = document.getElementsByClassName("page-header")[0];

   let search = document.createElement("input");
   search.placeholder = "Search..."; 
   header.appendChild(search);
   search.style.marginLeft = "50em";
   let searchbut = document.createElement("button"); 
   searchbut.textContent = "🔎"; 
   header.appendChild(searchbut);
   searchbut.marginLeft = "4em";
//creates the search bar and search button and puts them on the screen
   function searchStudents(str, list){ 
      let update = []; 
      for(let i = 0; i < list.length; i++){
         let s = list[i].children[0].children[1].textContent; 
         if(s.indexOf(str)> -1){
            update.push(list[i]);
         }
      }
      return update;
   }
   //returns the new array of students that fit the search results 
   search.addEventListener("keyup", (event)=>{
      let searched = searchStudents(search.value, allstudents)
      var oldbuttons = document.querySelectorAll(".pagebuts");
      for(let i = 0; i<oldbuttons.length; i++){ 
         page.removeChild(oldbuttons[i]);
      }
      var oldpage = document.querySelectorAll("li");
      for(let i = 0; i<oldpage.length; i++){ 
         oldpage[i].style.display = "none";
      }
      pages = searched;
      appendPageLinks(searched);
      showPage(1,searched);
   }
   )
   //puts the search results on the screen for every key the user presses
   searchbut.addEventListener("click", (event)=>{
      let searched = searchStudents(search.value, allstudents)
      var oldbuttons = document.querySelectorAll(".pagebuts");
      for(let i = 0; i<oldbuttons.length; i++){ 
         page.removeChild(oldbuttons[i]);
      }
      var oldpage = document.querySelectorAll("li");
      for(let i = 0; i<oldpage.length; i++){ 
         oldpage[i].style.display = "none";
      }
      pages = searched; 
      appendPageLinks(searched);
      showPage(1,searched);
   }
   )
//puts the search results on the page when pressing the search button
