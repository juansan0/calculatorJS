var display = document.getElementById('display');
var buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '⌫':
                display.innerText = display.innerText.slice(0, -1);
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
                break;
            default:
                if (display.innerText == 'Error' || display.innerText == 'function Error() { [native code] }') {
                    display.innerText = '';
                    display.innerText += e.target.innerText;
                }
                else{
                    display.innerText += e.target.innerText;
                }
                break;
        }
    })
})