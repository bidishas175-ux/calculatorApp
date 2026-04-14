 
        let display = document.getElementById('display');
        let currentExpression = '';

        function appendToDisplay(value) {
            currentExpression += value;
            display.textContent = currentExpression || '0';
        }

        function clearDisplay() {
            currentExpression = '';
            display.textContent = '0';
        }

        function deleteLast() {
            currentExpression = currentExpression.slice(0, -1);
            display.textContent = currentExpression || '0';
        }

        function calculate() {
            try {
                let expression = currentExpression.replace(/×/g, '*').replace(/÷/g, '/');
                let result = eval(expression);
                if (isNaN(result) || !isFinite(result)) {
                    display.textContent = 'Error';
                    currentExpression = '';
                } else {
                    display.textContent = result;
                    currentExpression = result.toString();
                }
            } catch (e) {
                display.textContent = 'Error';
                currentExpression = '';
            }
        }

        document.addEventListener('keydown', (event) => {
            const key = event.key;
            if (/[0-9]/.test(key)) appendToDisplay(key);
            else if (key === '+') appendToDisplay('+');
            else if (key === '-') appendToDisplay('-');
            else if (key === '*') appendToDisplay('*');
            else if (key === '/') appendToDisplay('/');
            else if (key === '.') appendToDisplay('.');
            else if (key === '(') appendToDisplay('(');
            else if (key === ')') appendToDisplay(')');
            else if (key === 'Enter') calculate();
            else if (key === 'Escape') clearDisplay();
            else if (key === 'Backspace') deleteLast();
        });
    