let api =  document.getElementById('api');
let val1 = document.getElementById('val1');
let val2 = document.getElementById('val2');
let val3 = document.getElementById('val3');
let name1 = document.getElementById('name1');
let outPut = document.getElementById('outPut');
let nameBtn = document.getElementById('nameBtn');


const WeatherTimer = async ()=>{

    const promise = await fetch('http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json');
    const data = await promise .json();
     console.log(data.init);
         return data;
}

const NameApi = async()=>{
   
const promise = await fetch(`https://api.agify.io?name=${name1}`)
const data = await promise.json();
return data;

}

const BoredApi = async()=>{
    const promise = await fetch('https://www.boredapi.com/api/activity')
    const data = await promise.json();
    return data;
}

document.getElementById('api').addEventListener('change', async function() {
    let apiValue = this.value;
    let outputText = '';


    
        switch(apiValue) {
            case '1':
             const weather = await WeatherTimer();
             outputText = `Product: ${JSON.stringify(weather.product)}`; 
             outputText += `\n\nInit: ${JSON.stringify(weather.init)}`;
             outputText += `\n\nData: ${JSON.stringify(weather.dataseries[1].timepoint)}`;
                break;
            case '2':
                const name  = await NameApi();
                const name1 = 'Mike'
                outputText = `Predicted age for ${name1}: ${name.age}`;
                break;
            case '3':
                const act = await BoredApi();
                outputText = act.activity;
                break;
            default:
                outputText = 'Please select an API to call.';
                break;
        }
  
    document.getElementById('outPut').textContent = outputText;
});
