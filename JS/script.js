import {date, month, Month, day} from './description.js'

let link = 'http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=e4faef50d5169b10595eabd4cb49bb9c';


document.querySelector('.subTitle').textContent = date.getUTCDate() + ' ' + Month()

fetch(link)
    .then(function(resp) { 
        return resp.json(); 
    })
    .then(function(data) { 
        console.log(data);
        document.querySelector('.title').textContent = data.name;

        document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 270) + '&deg;';
        document.querySelector('.state').textContent = data.weather[0]['description'];  
        document.querySelector('.real_state').innerHTML = 'Ощущается как ' + Math.round(data.main.temp - 270) + '&deg;';
        
    })
    .catch(function() {
        console.log('error')
    })

    