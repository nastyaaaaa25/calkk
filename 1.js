let lastInputIsOperator = false;
let calculationDone = false; // Добавляем флаг

function appendToDisplay(value) {
    const display = document.getElementById('display');

    if (calculationDone) {
        display.value = ''; // Очищаем поле, если операция завершена
        calculationDone = false; // Сбрасываем флаг
    }

    const currentValue = display.value;

    if (isOperator(value)) {
        if (lastInputIsOperator) {
            // Если последний ввод был оператором, заменяем его на новый
            display.value = currentValue.slice(0, -1) + value;
        } else {
            display.value += value;
        }
        lastInputIsOperator = true;
    } else {
        display.value += value;
        lastInputIsOperator = false;
    }
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    lastInputIsOperator = false;
    calculationDone = false;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        let expression = display.value;

        // Убираем оператор в конце, если он есть
        if (lastInputIsOperator) {
            expression = expression.slice(0, -1);
        }

        const result = eval(expression);
        if (result === Infinity || result === -Infinity) {
            display.value = 'делить на 0 нельзя';
        } else {
            display.value = parseFloat(result.toFixed(7));
        }
        calculationDone = true; // Устанавливаем флаг
    } catch (error) {
        display.value = 'Ошибка';
    }
    lastInputIsOperator = false;
}

function calculatePercentage() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value) / 100;
        display.value = parseFloat(result.toFixed(7));
        calculationDone = true; // Устанавливаем флаг
    } catch (error) {
        display.value = 'Ошибка';
    }
    lastInputIsOperator = false;
}

function raisePower() {
    const display = document.getElementById('display');
    let value = display.value;
    try {
        const result = Math.pow(eval(value), 2);
        display.value = parseFloat(result.toFixed(7));
        calculationDone = true; // Устанавливаем флаг
    } catch (error) {
        display.value = 'Ошибка';
    }
    lastInputIsOperator = false;
}

function koren() {
    const display = document.getElementById('display');
    try {
        const value = eval(display.value);
        if (value < 0) {
            display.value = 'Ошибка, отрицательный корень';
        } else {
            const result = Math.sqrt(value);
            display.value = parseFloat(result.toFixed(7));
        }
        calculationDone = true; // Устанавливаем флаг
    } catch (error) {
        display.value = 'Ошибка';
    }
    lastInputIsOperator = false;
}
describe("pow", function() {
    it("корень из 4  = 2", function() {
        assert.equal(Math.sqrt(4), 2);
    });
    
    it("корень из 4  = 6", function() {
        assert.equal(Math.sqrt(4), 6);
    });
    
    it("3 в квадрате будет 9", function() {
        assert.equal(Math.pow(eval(3), 2),9)
    });
    it("3 в квадрате будет 10", function() {
        assert.equal(Math.pow(eval(3), 2),10)
    });

    it("2 в процентах = 0,02", function() {
        assert.equal(eval(2)/100, 0.02)
    });

    it("2 в процентах = 0,05", function() {
        assert.equal(Math.pow(eval(2)/100, 0.05))
    });

    it("5 - 2 = 3", function() {
        assert.equal(5-2,3)
    });

    it("5 - 2 = 2", function() {
        assert.equal(5-2,2)
    });

    it("5 + 2 = 7", function() {
        assert.equal(5+2,7)
    });

    it("5 + 2 = 8", function() {
        assert.equal(5+2,8)
    });

    it("6:2 = 3", function() {
        assert.equal(6/2 ,3)
    });

    it("6:2 = 2", function() {
        assert.equal(6/2 ,2)
    });

    it("6*2 = 12", function() {
        assert.equal(6*2 ,12)
    });

    it("6*2 = 13", function() {
        assert.equal(6*2 ,13)
    });
});  


