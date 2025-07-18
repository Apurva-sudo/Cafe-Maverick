function add1() {

    var emp = document.getElementById('subsandwich').innerHTML;
    if (emp == 'Empty') {
        alert ("Please select foood")
    }
    else {
    var snum = sandwich_number.value
    snum=snum*129;
    document.getElementById('sandwich_price2').innerHTML="Rs"+snum+".00";
    bill()
    }
}
function add2() {
    var emp = document.getElementById('subpasta').innerHTML;
    if (emp == 'Empty') {
        alert ("Please select foood")
    }
    else {
    var pnum = pasta_number.value
    pnum=pnum*59;
    document.getElementById('pasta_price2').innerHTML="Rs"+pnum+".00";
    bill()
    }
}
function add3() {
    var emp = document.getElementById('subcoffee').innerHTML;
    if (emp == 'Empty') {
        alert ("Please select foood")
    }
    else {
    var cnum = coffee_number.value
    cnum=cnum*90;  
    document.getElementById('coffee_price2').innerHTML="Rs"+cnum+".00";
    bill()
    }
}
function add4() {
    var emp4 = document.getElementById('subppizza').innerHTML;
    if (emp4 == 'Empty') {
        alert ("Please select foood")
    }
    else {
    var ppnum = ppizza_number.value
    ppnum=ppnum*109;
    document.getElementById('ppizza_price2').innerHTML="Rs"+ppnum+".00";
    bill()
    }
}
function add5() {
    var emp = document.getElementById('vsubppizza').innerHTML;
    if (emp == 'Empty') {
        alert ("Please select foood")
    }
    else {
    var vnum = vpizza_number.value
    vnum=vnum*99;
    document.getElementById('vpizza_price2').innerHTML="Rs"+vnum+".00";
    bill()
    }
}
function add6() {
    var emp = document.getElementById('submocktail').innerHTML;
    if (emp == 'Empty') {
        alert ("Please select foood")
    }
    else {
    var mnum = mocktail_number.value
    mnum=mnum*89;
    document.getElementById('mocktail_price2').innerHTML="Rs"+mnum+".00";
    bill()
    }   
}



function bill() {

    var p1 = parseInt(document.getElementById('sandwich_price2').innerHTML.replace('Rs',''));
    var p2 = parseInt(document.getElementById('pasta_price2').innerHTML.replace('Rs',''));
    var p3 = parseInt(document.getElementById('coffee_price2').innerHTML.replace('Rs',''));
    var p4 = parseInt(document.getElementById('ppizza_price2').innerHTML.replace('Rs',''));
    var p5 = parseInt(document.getElementById('vpizza_price2').innerHTML.replace('Rs',''));
    var p6 = parseInt(document.getElementById('mocktail_price2').innerHTML.replace('Rs',''));

    console.log(p1)
    console.log(p2)
    console.log(p3)
    console.log(p4)
    console.log(p5)
    console.log(p6)
    console.log(p1+p2+p3+p4+p5+p6)  

    var subtotal = p1+p2+p3+p4+p5+p6;

    document.getElementById('subtotal').innerHTML='Rs'+subtotal+'.00';

    var total = subtotal + 50;

    if (subtotal == 0) {
        document.getElementById('total').innerHTML='Rs00.00';
    }
    else {
    document.getElementById('total').innerHTML='Rs'+total+'.00';
    }
}


function popupbill() {
    var total = document.getElementById('total').innerHTML;

    if (total == 'Rs00.00') {
        alert ("You dont order any food.")
    }
    else {
    localStorage.setItem("total",total)
    alert ("Total Bill : " + total)
    window.open ('checkout.html')


    }
}