let allProduct=document.querySelectorAll(".products-boxs .product")

let perviewProductBox=document.querySelector(".preview-products");
let perviewProducts=document.querySelectorAll(".preview-products .preview");


allProduct.forEach((product)=>{
    product.onclick=(e)=>{
        let pNumber=product.getAttribute('data-name');
        perviewProducts.forEach((preview)=>{
            if(preview.getAttribute('data-name')==pNumber){
                preview.classList.add("show")
            }
        })
        perviewProductBox.classList.add('active');
    }
});


let allClose=document.querySelectorAll(".fa-times");
allClose.forEach((clo)=>{
    clo.onclick=()=>{
        perviewProducts.forEach((e)=>{
            e.classList.remove("show")
        })
        perviewProductBox.classList.remove('active');
    }
})
