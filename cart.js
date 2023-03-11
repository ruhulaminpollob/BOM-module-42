const addProduct=()=>{
    const productName=document.getElementById('product-name')
    const productQuantity=document.getElementById('product-quantity')
    const product=productName.value;
    const quantity=productQuantity.value;
    productName.value='';
    productQuantity.value='';
    console.log(product, quantity);
    displayProducts(product,quantity)
    saveLocalStorage(product,quantity)
}
const displayProducts=(product,quantity)=>{
    const ul =document.getElementById('product-container');
    const li =document.createElement('li');
    li.innerText=`${product}: ${quantity}`
    ul.appendChild(li)
}


const getSavedProduct=()=>{
    let cart={}
    const savedProduct=localStorage.getItem('cart');
    if (savedProduct) {
        cart=JSON.parse(savedProduct)
    }
    return cart;
}

const saveLocalStorage=(product,quantity)=>{
    const savedCart=getSavedProduct();
    savedCart[product]=quantity;
    const newCart=JSON.stringify(savedCart);
    localStorage.setItem('cart',newCart)    
}

const displayProductsFromLocalStorage=()=>{
    const savedCartProduct=getSavedProduct();
    for (const name in savedCartProduct) {
        const product=name;
        const quantity=savedCartProduct[name];
        console.log(quantity);
        displayProducts(product,quantity);
    }
}
displayProductsFromLocalStorage()
