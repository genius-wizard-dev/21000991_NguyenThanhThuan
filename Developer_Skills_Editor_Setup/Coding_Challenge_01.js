const printForecast = (arr) => {
    let forecast = '';
    arr.forEach((element, index) => {
        forecast += `${element}°C in ${index + 1} days ... `;
    });
    console.log(forecast.trim());    
}

const arr_01 = [17, 21, 23];
const arr_02 = [12, 5, -5, 0, 4];

console.log('Data_01')
printForecast(arr_01);
console.log('Data_02')
printForecast(arr_02);