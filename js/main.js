let pizza = document.querySelector("#pizzaorder")
let User = document.querySelector("#User")
let Phone = document.querySelector("#Phone")
let address = document.querySelector("#address")
let thin =document.querySelector("#thin")
let Medium =document.querySelector("#Medium")
let Thick = document.querySelector("#Thick")
let Dough_thickness = document.querySelector("#Dough_thickness")
let sm = document.querySelector(".sm")

let div = document.querySelector("#div")
let biv = document.querySelector(".biv")

let horseMeat = document.querySelector("#horseMeat");
const loop = document.querySelector(".loop");
let tomato = document.querySelector("#tomato");
let sausage = document.querySelector("#sausage");


let pizzakfc = [];

let arr = []
div.addEventListener("change", (e)=>{
  let brr = []
  const checkbox = document.querySelectorAll(".checkbox:checked");
    checkbox.forEach(check => {
        brr.push(check.id)
    })
    arr=brr
    console.log(arr);
})

let Arr = []
biv.addEventListener("change", (e)=>{
  let brr = []
  const checkbox = document.querySelectorAll(".checkboxs:checked");
    checkbox.forEach(check => {
        brr.push(check.id)
    })
    Arr=brr
    console.log(Arr);
})


let formHandler =(e) =>{
  e.preventDefault();

    const selectoption = [...Dough_thickness.options]
    .filter((x) => x.selected)
    .map((item) => {
        return item.value;
    })

   

    const selectedOptsSize = [...sm.options]
    .filter((x) => x.selected)
    .map((items) => {
        return items.value;
    })

    let sum = 0
const pizzavalue = {
  id:Math.random().toFixed(2),
  userName: User.value,
  phoneNumber: Phone.value,
  adress: address.value,
  Dough_thickness: Dough_thickness.value,

  pizzaThick:selectoption,
  pizzaSize:selectedOptsSize,
  onPizza:arr,
  addPizza:Arr,
  total: function(onPizza, addPizza, pizzaThick,size){
    onPizza = this.onPizza;
    addPizza = this.addPizza;
    pizzaThick = this.pizzaThick;
    size = this.pizzaSize;

   let  pizzaThickSum = 0
    if(pizzaThick == "thin"){
      pizzaThickSum = 10
    }else if(pizzaThick == "medium"){
      pizzaThickSum = 12
    }else if(pizzaThick == "thick"){
      pizzaThickSum = 15
    }

    let sizeSum = 0 
    if(size == '25sm'){
      sizeSum = 10
    }else if(size == '30sm'){
      sizeSum = 12
    }else if(size == '35sm'){
      sizeSum = 15
    }

    let onPizzaSum = onPizza.length * 5
    let addPizzaSum = onPizza.length * 3

    return sum = onPizzaSum + addPizzaSum + sizeSum+ pizzaThickSum
  }
};


  function getCheckboxValue(e) {
    console.log(e.target.id);
    
  
    if (e.target.checked) pizzaOrder.onPizza.push(e.target.id);
    else
      pizzaOrder.onPizza = pizzaOrder.onPizza.filter(
        (item) => item !== e.target.id
      );
  
    console.log(pizzaOrder.onPizza);
  }


 
  

  // checkbox.forEach((item) => {
  //   item.addEventListener("change", getCheckValue(item));
  // });


  pizzakfc.push(pizzavalue)
  mediumtext()
}




                                                                                                                                                          


  // let pizzakfc = [];

  function mediumtext() {
    let result = "";
    
    for (let i = 0; i < pizzakfc.length; i++) {
        console.log(pizzakfc[i].pizzaThick);
        result +=`
        <div class="cards  border border-dark" id="${pizzakfc[i].id}">
                         <div class="title d-flex justify-content-between align-items-center" >
                             <h4 class="m-2">Order:</h4>
                             <i class="ri-delete-bin-line delete fs-4 m-2" onlick="deleteCard(${pizzakfc[i].id})"></i>
                         </div>
                         <div class="info_user m-2">
                             <p><span class="fw-bold">Name: </span>${pizzakfc[i].userName}</p>
                             <p><span class="fw-bold">Phone: </span>${pizzakfc[i].phoneNumber}</p>
                             <p><span class="fw-bold">Address: </span>${pizzakfc[i].address}</p>
                         </div>
                         <hr>

                         <div class="">
                             <p><span class="">Dough thickness: </span>${pizzakfc[i].pizzaThick}</p>
                             <p><span class="">Size: </span>${pizzakfc[i].pizzaSize}</p>
                             <p><span class="">On Pizza: </span>${pizzakfc[i].onPizza}</p>
                             <p><span class="">Add: </span>${pizzakfc[i].addPizza}</p>
                         </div>

                         <hr>

                         <div class="text-end m-3">
                            <h4><span>Total: $${pizzakfc[i].total()} </span></h4>
                         </div>
                   </div>
        `

    }
    loop.innerHTML = result;
}
function deleteCard(elementId) {
  let delArr = pizza.filter((element) => {
      return +element.id !== elementId;
  })

  pizza = delArr;

  mediumtext();
}

form.addEventListener("submit", formHandler);