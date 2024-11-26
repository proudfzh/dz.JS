
document.addEventListener("DOMContentLoaded", function() 
{
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    
    let currentInput = "";
    let operator = "";
    let operand1 = null;

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.getAttribute("data-value");

            if (value === "C") {
                // Очистка дисплея
                currentInput = "";
                operator = "";
                operand1 = null;
                display.value = "";
            } else if (value === "=") {
                // Вычисление результата
                if (operand1 !== null && operator && currentInput) {
                    const operand2 = parseFloat(currentInput);
                    let result;
                    switch (operator) {
                        case "+":
                            result = operand1 + operand2;
                            break;
                        case "-":
                            result = operand1 - operand2;
                            break;
                        case "*":
                            result = operand1 * operand2;
                            break;
                        case "/":
                            if (operand2 === 0 )
                            {
                                result = "Ошибка";
                                break;   
                            }
                            result = operand1 / operand2;
                            break;
                    }
                    
                    display.value = result;
                    currentInput = result;
                }
            } else if (["+", "-", "*", "/"].includes(value)) {
                // Установка оператора
                if (currentInput) {
                    operand1 = parseFloat(currentInput);
                    operator = value;
                    currentInput = "";
                }
            } 
            else {
                // Если на экране "Ошибка", очищаем дисплей перед вводом новой цифры
                if (display.value === "Ошибка") {
                    currentInput = ""; // Сбрасываем текущий ввод
                }
            
                // Добавляем цифру или точку
                currentInput += value;
             display.value = currentInput;
            }
            
        });
    });
});
