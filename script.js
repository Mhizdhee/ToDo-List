window.addEventListener('load', ()=> {
    let list = JSON.parse(localStorage.getItem("list")) || [];

const myForm = document.querySelector(".form");
const myInput = document.querySelector("#input");
const buttonElem = document.querySelector("#push");
const myListItem = document.querySelector(".listItem");

// list.forEach(task=>{
//     addButton(task)
// })

myForm.addEventListener("submit", (event) => {
  event.preventDefault(); //it prevents the page from being refreshed

  

  
});

buttonElem.addEventListener("click", addButton);

function addButton(task) {
    let newTasks = myInput.value;// this stores the input

//   if(task){
//   newTasks = task.name
  

// } 

if(!newTasks){
    alert("field cannot be empty");// this gives an error message when the input field is empty
    return;
  }

  
  const liElem = document.createElement("li"); // this create a list item 
 
  liElem.innerText = newTasks; // asssign our input value to the list element
  myListItem.prepend(liElem); //  the prepend shows the most recent item on the list 
  myInput.value = ""; //makes the input element empty when we press enter i.e reset our input field
  liElem.style.border = "none";
  liElem.style.backgroundColor = "lightblue";
  const editBtnElem = document.createElement("div");
  editBtnElem.classList.add(".fa-pen-to-square");
  editBtnElem.innerHTML=`<i class="fa-solid fa-pen-to-square"></i>`;
  liElem.appendChild(editBtnElem);// this append the edit icon to the list element

  editBtnElem.addEventListener("click", ()=>{
    liElem.

    updateLocalStorage();
  })

  const delBtnElem = document.createElement("div");
  delBtnElem.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  liElem.appendChild(delBtnElem);//this append the del icon  to the list element/
//   delBtnElem.classList.add("div");
  
  delBtnElem.addEventListener("click", ()=>{
    liElem.remove();
    updateLocalStorage();
})
    
 
updateLocalStorage();
}

function updateLocalStorage(){
    const liElems =document.querySelectorAll("li")
    list = []
    liElems.forEach(liElem=>{
        list.push({
            name: liElem.innerText,
            checked: false
           
        })
    })
    localStorage.setItem("list", JSON.stringify(list));

}
 


});