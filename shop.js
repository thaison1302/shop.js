const btn = document.querySelectorAll("button")
// console.log(btn);
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img")
        var productName = product.querySelector("a").innerText
        var productPrice = product.querySelector("spam").innerText
        // console.log(productPrice,productImg,productName);
        addcart(productPrice,productImg,productName)
    })

});

function addcart(productPrice,productImg,productName){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for ( var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML== productName){
            
            alert(" Bạn đã chọn sản phẩm này rồi")
            return
        }
    }
    var trcontent = '<tr><td style="display: flex; align-items: center;"><img style="width:60px; height: 60px;" src="'+productImg+'" alt=""><span class"title">'+productName+'</span></td><td><span class"price">'+productPrice+'</span></td><td><input style="width: 40px;outline: none;" type="number" value="1" min="1" max="10"></td><td style="cursor: pointer;"><span class"delete">Xoá</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    // console.log(cartTable);
    cartTable.append(addtr)
    carttotal()
    deleteCart()
}

function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    // console.log(cartItem.length);
    var totalC =0
    for ( var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        // console.log(inputValue);
        var productPrice = cartItem[i].querySelector(".price").innerHTML
        // console.log(productPrice);
        totalA = inputValue*productPrice*1000
        // totalB = totalA.toLocateString('de-DE')
        // console.log(totalB);
        totalC = totalC + totalA
        totalD = totalC.toLocateString('de-DE')
    }
    var cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML = totalD
    // console.log(cartTotalA);

}

function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for ( var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".delete")
        productT[i].addEventListener("click",function(event){
           var cartDelete = event.target
           var cartItemR = cartDelete.parentElement.parentElement
           cartItemR.remove()
        //    console.log(cartItemR);
        })
        
        

    }
}
