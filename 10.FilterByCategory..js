let products=[
    {name:"Shirt", category:"Clothing"},
    {name:"Pants", category:"Clothing"},
    {name:"Hat", category:"Accessories"},
    {name:"Sunglasses", category:"Accessories"},
];
let filterByCategory=(product)=>{
    let clothingProducts=(category)=>{
        let newProductArr=product.filter((el)=>{
            if(el['category']===category){
                return el;
            }
        });
        return newProductArr;
    };
    return clothingProducts;
}
let clothingProducts=filterByCategory(products);
let newProductArr=clothingProducts("Clothing");
console.log(newProductArr);