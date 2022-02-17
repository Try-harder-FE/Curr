getCurrencies ();

async function getCurrencies () {
    const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    const data = await response.json()
    const result = await data;
    console.log(result);
}
// fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').then(function (result) {
//     return result.json()
// }).then(function (data) {
//     console.log(data)
// })
