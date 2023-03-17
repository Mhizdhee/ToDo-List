const myForm = document.querySelector(".form");
const myInput = document.querySelector("#input");
const buttonElem = document.querySelector("#push");
const myListItem = document.querySelector(".listItem");

let list = JSON.parse(localStorage.getItem("list"));
list.forEach(task=>{
    addButton(task)
})

myForm.addEventListener("submit", (event) => {
  event.preventDefault(); //it prevents the page from being refreshed
  
});

buttonElem.addEventListener("click", addButton);
let newTask = myInput.value;// this stores the input

function addButton(task) {
    let newTask = myInput.value;// this stores the input

//   if(task){
//     newTask = task.name

// }

  if(newTask === ""){
    alert("field cannot be empty");// this gives an error message when the input field is empty
    return;
  }

  
  const liElem = document.createElement("li"); // this create a list item 
 
  liElem.innerText = newTask; // asssign our input value to the list element
  myListItem.prepend(liElem); //  the prepend shows the most recent item on the list 
  myInput.value = ""; //makes the input element empty when we press enter i.e reset our input field
  liElem.style.border = "none";
  liElem.style.backgroundColor = "lightblue";
  const delBtnElem = document.createElement("div");
  delBtnElem.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  liElem.appendChild(delBtnElem);//this append the del icon  to the list element/


  delBtnElem.addEventListener("click", ()=>{
    liElem.remove();
    updateLocalStorage()
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




