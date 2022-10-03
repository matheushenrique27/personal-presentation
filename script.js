document.querySelector(".hamburguer").addEventListener("click", () => 
    document.querySelector(".container").classList.toggle("show-menu")
);
document.querySelector("#quantity").addEventListener("change", priceUpdate)
document.querySelector("#script-needed").addEventListener("change", priceUpdate)
document.querySelector("#layout-yes").addEventListener("change", priceUpdate)
document.querySelector("#layout-no").addEventListener("change", priceUpdate)
document.querySelector("#deadline").addEventListener("change", p => {
    const deadLine = document.querySelector("#deadline").value
    document.querySelector("label[for=deadline]").innerHTML = `Prazo: ${deadLine} semanas`
    priceUpdate()
})

function priceUpdate() {
    const quantityOfPages = document.querySelector("#quantity").value
    const scriptNeeded = document.querySelector("#script-needed").checked
    const layoutInclude = document.querySelector("#layout-yes").checked
    const deadline = document.querySelector("#deadline").value

    let price = quantityOfPages * 150;
    let urgencyTax =  1 - deadline * 0.15;
    price *= 1 + urgencyTax;

    if(scriptNeeded) price *= 1.2
    if(layoutInclude) price += 600
    

    document.querySelector("#price").innerHTML = `R$ ${price.toFixed(2)}`
}