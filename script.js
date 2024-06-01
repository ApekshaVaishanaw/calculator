let string="";
let buttons = document.querySelectorAll('.button');
let buttons1 = document.querySelectorAll('button1');
let memoryValue = 0;
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'AC'){
        string = ""
        document.querySelector('.input').value = string;
    }
    else{
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    }
    })
    
})