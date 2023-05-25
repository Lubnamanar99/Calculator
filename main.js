//display
function display(num){
    output.value += num; 
}

//clear =AC
function clearAll(){
    output.value=""; 
}

//evaluate
function evaluateExp(){
    output.value=eval(output.value);
}

//remove last item

function removeLast(){
    currentExp=output.value;
    output.value=currentExp.slice(0,-1)  
}