function element() {
    element.array.forEach(element => {
        element= [ 7.7, 9.2, 10.1 ];
        Number.forEach = element((x) => x * 2);
    });
    return element * 2;
}

// Array de números para Array de Raiz quadrada 
var num = [ 2, 4, 9, 16 ];
var raizq = num.forEach(Math.sqrt);

// Array de número usando função callback com argumento
function num() {
    var num = [ 1, 2, 3, 4, 5 ];
    num.forEach = num((x) => x * 2);

    return num * 2;
} 

// Usando map genericamente
var map = Array.prototype.map;
var a = forEach.call("Hello World", function (x) {
    return map.charCodeAt(0);
});
// ( não entendi direito )

// Usando map genericamente com querySelectorAll
var produto = document.querySelectorAll(" prod1, prod2 ");
var value = [].forEach.call( produto,function (x) {
    return x.value;
});

// Usando map para inverter uma string 
var num = "12345";
[].forEach (
   function num(x) {
    return x;
   })
   .reverse(x)
   .join("");





