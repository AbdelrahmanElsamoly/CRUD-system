var productName = document.getElementById("productname");
var ProductPrice = document.getElementById("productprice");
var productCategory = document.getElementById("productcategory");
var productDesc = document.getElementById("productdesc");
var valiid = document.querySelector(".validationn");
var ccheck;
var proArr;
if (localStorage.getItem("product store") != null) {
  proArr = JSON.parse(localStorage.getItem("product store"));
  productTable();
} else {
  proArr = [];
}
if (ccheck == true) {
  addProduct();
}
function addProduct() {
  var products = {
    namePro: productName.value,
    proPrice: ProductPrice.value,
    proCat: productCategory.value,
    proDes: productDesc.value,
  };
  proArr.push(products);
  localStorage.setItem("product store", JSON.stringify(proArr));
  productTable();
  clearPro();
}
function clearPro() {
  productName.value = "";
  ProductPrice.value = "";
  productCategory.value = "";
  productDesc.value = "";
  productName.classList.remove("is-invalid");
  productName.classList.remove("is-valid");
}
// display data
function productTable() {
  var cartoona = "";
  var numberr = 0;
  for (var i = 0; i < proArr.length; i++) {
    cartoona += `<tr class="table-primary">
    <td>${++numberr}</td>
    <td>${proArr[i].namePro}</td>
    <td>${proArr[i].proPrice}</td>
    <td>${proArr[i].proCat}</td>
    <td>${proArr[i].proDes}</td>
    <td>
      <button type="button"  class="btn btn-warning" onclick="update(${i}); removePro(${i})">Update</button>
    </td>
    <td>
      <button type="button" class="btn btn-danger" onclick="removePro(${i})">Delete</button>
    </td>
  </tr>`;
  }
  document.getElementById("producttable").innerHTML = cartoona;
}

function removePro(index) {
  proArr.splice(index, 1);
  localStorage.setItem("product store", JSON.stringify(proArr));
  productTable();
}

function update(index) {
  productName.value = proArr[index].namePro;
  ProductPrice.value = proArr[index].proPrice;
  productCategory.value = proArr[index].proCat;
  productDesc.value = proArr[index].proDes;
}

function search(char) {
  var cartoona = ``;
  var numberr = 0;
  for (var i = 0; i < proArr.length; i++) {
    if (proArr[i].namePro.toLowerCase().includes(char.toLowerCase()) == true) {
      cartoona += `<tr class="table-primary">
        <td>${++numberr}</td>
        <td>${proArr[i].namePro}</td>
        <td>${proArr[i].proPrice}</td>
        <td>${proArr[i].proCat}</td>
        <td>${proArr[i].proDes}</td>
        <td>
          <button type="button"  class="btn btn-warning" onclick="update(${i}); removePro(${i})">Update</button>
        </td>
        <td>
          <button type="button" class="btn btn-danger" onclick="removePro(${i})">Delete</button>
        </td>
      </tr>`;
    }
  }
  document.getElementById("producttable").innerHTML = cartoona;
}

var add = document.getElementById("add");
productName.addEventListener("blur", validation);
function validation() {
  var regex = /^[A-Z][a-z]{1,20}$/;
  if (regex.test(productName.value) == true) {
    ccheck = true;
    add.disabled = false;
    productName.classList.add("is-valid");
    productName.classList.remove("is-invalid");
    valiid.classList.add("d-none");
  } else {
    add.disabled = true;
    productName.classList.remove("is-valid");
    productName.classList.add("is-invalid");
    valiid.classList.remove("d-none");
  }
}
