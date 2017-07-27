var app = (function app() {
  "use strict";

  var ajouter, list, input, radio, creerItems, checkAction, creerLi, creerUl;

  window.onload = function() {

    ajouter = document.getElementById('ajouter');
    list = document.getElementById('list');
    input = document.getElementById('input');
    ajouter.onclick = checkAction;
  };


  checkAction = function checkAction() {
    var radioChecked = document.querySelector('input:checked');

    if (!radioChecked) {
      creerLi(list);
    } else {
      // var test = creerUl(radioChecked.parentElement);
      // console.log(test);
      creerLi(creerUl(radioChecked.parentElement));
    }

  };

  creerLi = function creerLi(parent) {
    var li = document.createElement("li");

    li.innerHTML = input.value;
    radio = document.createElement("input");
    radio.type = 'radio';
    radio.name = "radio";
    li.appendChild(radio);

    return parent.appendChild(li);
  };

  creerUl = function creerUl(li) {
    var ul;
    ul = document.createElement("ul");
    return li.appendChild(ul);
  };

}());
