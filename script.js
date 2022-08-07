function calc(){
    let num1 = document.getElementById('fnum').value;
    let num2 = document.getElementById('snum').value;
    let opn = document.getElementById('ops').value;
    let ans;
    

    switch (opn){
        case 'add':
            ans = parseInt(num1) + parseInt(num2);
            break;
        
        case 'sub':
            ans = parseInt(num1) - parseInt(num2);
            break;
                
        case 'multi':
            ans = parseInt(num1) * parseInt(num2);
            break;

        case 'div':
            ans = parseInt(num1) / parseInt(num2);
            break;    

        case 'percent':
            ans = (parseInt(num1)/100) * parseInt(num2);
            break;

        default:
            window.alert("Error missing operation")
            break;
    }
    document.getElementById("result").innerHTML = 'result = ' + ans;

}

