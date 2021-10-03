var counterItem = 1;
var item = {};

function addItem(key) {
    if(item.hasOwnProperty(key)) {
      item[key] = item[key] + 1;
      var x = document.getElementById(key).innerText = item[key];
    } else {
      item[key] = counterItem;
      document.getElementById("js-to-do").innerHTML += 
            `<div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">${key}</h5>
              </div>
              <h4 class="btn btn-primary" id=${key}>${item[key]}</h4>
              <button class="delete btn btn-outline-danger" onclick="deleteElement()">Delete</button>
            </div>
          </div>`;
    }
}

function addElement() {
    const inputValue = document.getElementById("input").value;
    if (inputValue === '') {
        alert("Inputan kosong");
        return
    }
    addItem(inputValue);
}

function deleteElement() {
  const deleteElementByClass = document.getElementsByClassName("delete");
    for (var i = 0; i < deleteElementByClass.length; i++) {
      deleteElementByClass[i].onclick = function() {
        var isConfirmDelete = confirm("Konfirmasi!");
        if (isConfirmDelete == true) {
          this.parentElement.style.display = "none";
        }  
      }
    }
}
