var myAlphabet = ['A','B','C','D','E','F','G'];
function myAlphabetlength(){
    console.log(myAlphabet.length)
}
myAlphabetlength()
var Planets = ['Mercury','Venus','Earth','Mars','Jupiter']
for(var x = 0;x < 5;x++){
    console.log(Planets[x])
}
var wowDataTypes = [12, 'Hello', 15.5]
for(var y = 0;y < 3;y++){
    console.log(wowDataTypes[y])
}

var hello = function (){
    return 'Hello World!'
}
var x = hello()
console.log(x)
console.log(hello())