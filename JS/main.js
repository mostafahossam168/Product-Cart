let allProduct=document.querySelectorAll(".products-boxs .product")
let nameProduct,srcImge,price;

allProduct.forEach((product)=>{
    product.addEventListener('click',()=>{
        srcImge=product.querySelector('img');
        nameProduct=product.querySelector('h3');
        price=product.querySelector(".price");
        //Call Function
        changePreview(srcImge,nameProduct,price);

        perviewProductBox.classList.add('active');
    })
})

let perviewProductBox=document.querySelector(".preview-products");
let perview=document.querySelector(".preview-products .preview");
let closePreview=perview.querySelector('.fa-times');

function changePreview(srcI,proNam,pri){
    let curentImg=perview.querySelector("img");
    curentImg.src=srcI.src;

    let curentName=perview.querySelector("h3");
    curentName.innerHTML=`Organic ${proNam.innerHTML}`; 

    let curentPrice=perview.querySelector(".price");
    curentPrice.innerHTML=pri.innerHTML;
}

closePreview.onclick=function(){
    perviewProductBox.classList.remove('active');
}
