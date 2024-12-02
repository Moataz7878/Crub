let productName = document.getElementById('ProductName')
let productPrice = document.getElementById('ProductPrice')
let productCategory = document.getElementById('ProductCategory')
let productDesc = document.getElementById('ProductDesc')
let button = document.getElementById('button')
let Search = document.getElementById('Search')
let tbody = document.getElementById('tbody')
let iconTrue = document.getElementsByClassName('true')
let iconFalse = document.getElementsByClassName('false')
let ProductNameIcon = document.querySelectorAll('.ProductNameIcon i')
let ProductPriceIcon = document.querySelectorAll('.ProductPriceIcon i')
let ProductCategoryIcon = document.querySelectorAll('.ProductCategoryIcon i')
let ProductDescIcon = document.querySelectorAll('.ProductDescIcon i')
let UpdateDone = document.getElementById('UpdateDone')
let butUpdate = document.querySelectorAll('#UpdateDone');
let productList=[]

productName.addEventListener('keydown',function(){
    validationform()

})
productPrice.addEventListener('keyup',function(){
    validationform()
 
})
productCategory.addEventListener('keyup',function(){
    validationform()
   
})
productDesc.addEventListener('keyup',function(){
    validationform()
})


if (localStorage.getItem('product') !== null) {
    productList = JSON.parse(localStorage.getItem('product'))
    getallProduct()
}
function display(){

  let  products={
        productName:productName.value,
        productPrice:productPrice.value,
        productCategory:productCategory.value,
        productDesc:productDesc.value
    }
    productList.push(products)
    localStorage.setItem('product',JSON.stringify(productList))
}
function updata(index){
        for (let i = 0; i < productList.length; i++) {
            if (i == index) {
             productName.value=productList[i].productName
             productPrice.value=productList[i].productPrice
             productCategory.value=productList[i].productCategory
             productDesc.value=productList[i].productDesc
             UpdateDone.style.display = "block"
             button.style.display = "none"
             UpdateDone.addEventListener('click',function(){
             if (validationform() == true) {
                for (let i = 0; i < iconTrue.length; i++) {
                    let elementicon = iconTrue[i];
                    elementicon.style.display="none"
                    console.log(elementicon);
                    
                }
                        productList.splice(i,1,{
                            productName:productName.value,
                            productPrice:productPrice.value,
                            productCategory:productCategory.value,
                            productDesc:productDesc.value
                        })
                        localStorage.setItem('product',JSON.stringify(productList))
                        console.log(productList);
                        
                        getallProduct()
                        clearFrom()
                        return;
             }
        
             })
            }
             
         }
}
function clearFrom(){
    productName.value =""
    productPrice.value=""
    productCategory.value=""
    productDesc.value=""
}

button.addEventListener("click",function(){
   if ( validationform() == true) {
    for (let i = 0; i < iconTrue.length; i++) {
        let elementicon = iconTrue[i];
        elementicon.style.display="none"
        
    }
    display()
    getallProduct()
    clearFrom()
   }
   



})

function getallProduct(){
     UpdateDone.style.display = "none"
        button.style.display = "block"
   let cartoona =`` 
   for (let i = 0; i < productList.length; i++) {
    
   cartoona +=`<tr class="text-center">
<td >${i}</td>
<td >${productList[i].productName}</td>
<td>${productList[i].productPrice}</td>
<td>${productList[i].productCategory}</td>
<td>${productList[i].productDesc}</td>
<td class="px-2">
<button type="button" class="btn btn-outline-info mt-1" onclick="updata(${i})">update</button>
</td>
<td>
<button type="button" class="btn btn-outline-danger mt-1" onclick="deleteProduct(${i})">delete</button>
</td>
</tr>`
   }
   tbody.innerHTML=cartoona
}
function deleteProduct(index){
  console.log(index);
  for (let i = 0; i < productList.length; i++) {
    if (i == index) {
        productList.splice(index,1)
    localStorage.setItem('product',JSON.stringify(productList))
        getallProduct()
    }
    
  }
  
}


Search.addEventListener('keyup',function(){
let cartoona =`` 

for (let i = 0; i < productList.length; i++) {
    if (productList[i].productName.toLowerCase().includes(Search.value.toLowerCase()) == true) {;
        cartoona +=`<tr class="text-center">
        <td >${i}</td>
        <td >${productList[i].productName}</td>
        <td>${productList[i].productPrice}</td>
        <td>${productList[i].productCategory}</td>
        <td>${productList[i].productDesc}</td>
        <td class="px-2">
        <button type="button" class="btn btn-outline-info mt-1  ">update</button>
        </td>
        <td>
        <button type="button" class="btn btn-outline-danger mt-1" onclick="deleteProduct(${i})">delete</button>
        </td>
        </tr>`
        
    }
    
}

tbody.innerHTML=cartoona

})
function validationform(){
    let namevalid ;
    let pricevalid;
    let categoryvalid ;
    let descvalid ;

    let valiname =/^[a-zA-Z]{3,15}$/
    if (valiname.test(productName.value)==true) {
        for (let i = 0; i < ProductNameIcon.length; i++) {
            const element = ProductNameIcon[i];
            if (element.className.includes('true')) {
                element.style.display="block"
            }else{
                element.style.display="none"
            }
            
        }
        namevalid=true;
        
    }else{
        for (let i = 0; i < ProductNameIcon.length; i++) {
            const element = ProductNameIcon[i];
            if (element.className.includes('false')) {
                element.style.display="block"
            }else{
                element.style.display="none"
            }
        }
        namevalid=false;
    }

    let valiprice =/^[0-9]{1,11}$/;
    
    if (valiprice.test(productPrice.value)==true) {
        
        for (let i = 0; i < ProductPriceIcon.length; i++) {
            let element = ProductPriceIcon[i];

            if (element.className.includes('true')) {

                element.style.display="block"
             
            }else{
                element.style.display="none"
            }
            
        }
        pricevalid=true;
    }else{
        for (let i = 0; i < ProductPriceIcon.length; i++) {
            const element = ProductPriceIcon[i];
            if (element.className.includes('false')) {
                element.style.display="block"
            }else{
                element.style.display="none"
            }
            
        }
        pricevalid=false;
    }

    let valiCategory =/^[a-zA-Z]{1,8}[0-9]{0,4}$/;
    if (valiCategory.test(productCategory.value)==true) {
        for (let i = 0; i < ProductCategoryIcon.length; i++) {
            const element = ProductCategoryIcon[i];
            if (element.className.includes('true')) {
                element.style.display="block"
            }else{
                element.style.display="none"
            }
            
        }
        categoryvalid=true;
    }else{
        for (let i = 0; i < ProductCategoryIcon.length; i++) {
            const element = ProductCategoryIcon[i];
            if (element.className.includes('false')) {
                element.style.display="block"
            }else{
                element.style.display="none"
            }
            
        }
        categoryvalid=false;
    }

    let vailDesc = /^[a-zA-Z]{3,40}$/
    if (vailDesc.test(productDesc.value)==true) {
        for (let i = 0; i < ProductDescIcon.length; i++) {
            const element = ProductDescIcon[i];
            if (element.className.includes('true')) {
                element.style.display="block"
            }else{
                element.style.display="none"
            }
            
        }
        descvalid=true;
    }else{
        for (let i = 0; i < ProductDescIcon.length; i++) {
            const element = ProductDescIcon[i];
            if (element.className.includes('false')) {
                element.style.display="block"
            }else{
                element.style.display="none"
            }
            
        }
        descvalid=false;
    }
  
if (namevalid==true&&pricevalid==true&&categoryvalid==true&&descvalid==true) {
 
    return true
}

    return false

}
