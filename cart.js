const addProduct=()=>{
    const productName=document.getElementById('product-name')
    const productQuantity=document.getElementById('product-quantity')
    const product=productName.value;
    const quantity=productQuantity.value;
    productName.value='';
    productQuantity.value='';
    console.log(product, quantity);
    displayProducts(product,quantity)
}
const displayProducts=(product,quantity)=>{
    const ul =document.getElementById('product-container');
    const li =document.createElement('li');
    li.innerText=`${product}: ${quantity}`
    ul.appendChild(li)
}