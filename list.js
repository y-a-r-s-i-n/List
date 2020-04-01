// Create div for input
let dv = document.createElement('div');
dv.setAttribute('id','div-1');
dv.setAttribute('class','text-center mt-3 ');

let inpt = document.createElement('input');
inpt.setAttribute('class', 'input');
inpt.setAttribute('placeholder', 'Değer girin');

// Create div for buttons
let dv2 = document.createElement('div');
dv2.setAttribute('id','div-2');
dv2.setAttribute('class','text-center mt-5 ');

let btn = document.createElement('button');
btn.setAttribute('type','button');
btn.setAttribute('id','button');
btn.setAttribute('class','btn btn-primary ');
btn.innerText = "Ekle";


let btn2 = document.createElement('button');
btn2.setAttribute('type','button');
btn2.setAttribute('id','button-delete');
btn2.setAttribute('onclick','deleteAll()');
btn2.setAttribute('class','btn btn-danger ml-2');
btn2.innerText = "Hepsini Sil";

//Create div for ul
let dv3 = document.createElement('div');
dv3.setAttribute('id','div-3');
dv3.setAttribute('class','mt-5');

let ulCrte = document.createElement('ul');
ulCrte.setAttribute('id','ul-id');
ulCrte.setAttribute('class', 'list-group');
ulCrte.setAttribute('style','list-style-type:none;');

// add elements to html
document.body.appendChild(dv2);

dv2.appendChild(inpt);

document.body.appendChild(dv);

dv.appendChild(btn);

dv.appendChild(btn2);

document.body.appendChild(dv3);

dv3.appendChild(ulCrte);


// add list item function
btn.addEventListener('click', function(e){
  if (inpt.value != '') {
  let liCrte = document.createElement('li'); 
  liCrte.setAttribute('id', 'li-id')
  liCrte.setAttribute('class','list-group-item text-center mx-5');
  liCrte.innerHTML = "<button class='btn fas fa-times float-right' onclick='deleteLst(this)' id='close-icon'></button>"
  liCrte.appendChild(document.createTextNode(inpt.value));
  
  ulCrte.appendChild(liCrte);
  inpt.value = '';
  }
  else {
    alert('Lütfen değer giriniz');
  }

});

function deleteLst (e) {

  e.parentElement.remove();

}

// delete all items function
function deleteAll() {
 let ul = document.querySelector('#ul-id');

 let uznlk = ul.children.length;

 for (let i=0 ; i < uznlk ; i++) {
  console.log(ul.children);
  let a = 0;
  ul.removeChild(ul.children[a]);

 }

}