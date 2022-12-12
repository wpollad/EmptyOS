const display = document.querySelector('#display');
buttons = Array.from(document.getElementsByClassName('button'));

    buttons.map( button => {
        button.addEventListener('click', (b) =>{
            switch(b.target.innerText){
                case 'C':
                    display.innerText = ' ';
                    break;
                case '←':
                    display.innerText = display.innerText.slice(0, -1);
                    break;
                case '=':
                    try{
                        display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText = 'Error. Press C.'
                    }
                    break;
                default:
                    display.innerText += b.target.innerText;
            }
        })
    }) 

