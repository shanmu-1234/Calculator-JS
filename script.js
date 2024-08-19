let CurrentResult = '';

function addNumber(number){
    CurrentResult+=number;
    UpdateResult();
}

function ClearResult(){
    CurrentResult = '';
    UpdateResult();
}

function operate(operator){
    if(CurrentResult !==''){
        CurrentResult+=' '+operator+' ';
        UpdateResult();
    }
}

function addDecimal(){
    if(CurrentResult.indexOf('.')==-1){
        CurrentResult+='.';
        UpdateResult();
    }
}

function calculate(){
    if(CurrentResult !== ''){
        try{
            CurrentResult = eval(CurrentResult).toString();
            UpdateResult();
        }
        catch(error){
            CurrentResult = '';
            UpdateResult();
            alert("Invalid expression")
        }
    }
}

function UpdateResult(){
    document.getElementById("result").value=CurrentResult;
}