const generateResult = () => {
    var yearInput = document.getElementById('year').value;
    yearInput = Number(yearInput);
    var monthInput = document.getElementById('month').value;
    monthInput = Number(monthInput);
    var dayInput = document.getElementById('day').value;
    dayInput = Number(dayInput);

    var today = new Date();

    let sum = 0;
    sum += yearInput;
    sum += monthInput;
    sum += dayInput;
    sum += today.getFullYear();
    sum += (today.getMonth() + 1);
    sum += today.getDate();

    const resultElement = document.querySelector('#result');
    switch (sum % 4) {
        case 0:
            resultElement.innerText = '大吉'
            break;
        case 1:
            resultElement.innerText = '小吉'
            break;
        case 2:
            resultElement.innerText = '凶'
            break;
        case 3:
            resultElement.innerText = '吉'
            break;
        default:
            resultElement.innerText = '凶'
            break;
    }
}