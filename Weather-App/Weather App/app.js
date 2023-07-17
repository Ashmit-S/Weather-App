async function fetchWeatherData(user_input) {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0e64b3d095mshd4105db92b7a53dp1871bbjsnb71ae831d0df',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        user_input_cap = user_input.charAt(0).toUpperCase() + user_input.slice(1)
        const result = await fetch(url + user_input_cap, options);
        const response = await result.json();
        heading_city = document.querySelector('#city_header')
        heading_city.innerHTML = user_input_cap
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        console.log(response)


        const result_a = await fetch(url + 'Ahmedabad', options);
        const response_a = await result_a.json();
        atemp.innerHTML = response_a.temp
        awind.innerHTML = response_a.wind_speed
        ahumidity.innerHTML = response_a.humidity
        acloud.innerHTML = response_a.cloud_pct
        console.log(response_a)

        const result_b = await fetch(url + 'Bangalore', options);
        const response_b = await result_b.json();
        btemp.innerHTML = response_b.temp
        bwind.innerHTML = response_b.wind_speed
        bhumidity.innerHTML = response_b.humidity
        bcloud.innerHTML = response_b.cloud_pct

        const result_h = await fetch(url + 'Hyderabad', options);
        const response_h = await result_h.json();
        htemp.innerHTML = response_h.temp
        hwind.innerHTML = response_h.wind_speed
        hhumidity.innerHTML = response_h.humidity
        hcloud.innerHTML = response_h.cloud_pct

        const result_am = await fetch(url + 'Amritsar', options);
        const response_am = await result_am.json();
        amtemp.innerHTML = response_am.temp
        amwind.innerHTML = response_am.wind_speed
        amhumidity.innerHTML = response_am.humidity
        amcloud.innerHTML = response_am.cloud_pct

        const result_i = await fetch(url + 'Indore', options);
        const response_i = await result_i.json();
        itemp.innerHTML = response_i.temp
        iwind.innerHTML = response_i.wind_speed
        ihumidity.innerHTML = response_i.humidity
        icloud.innerHTML = response_i.cloud_pct
    } catch (error) {
        console.error(error);
    }
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    fetchWeatherData(user_input.value)
})

const cityDropdown = document.querySelectorAll('.dropdown-item');
cityDropdown.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        fetchWeatherData(e.target.id);
    })
});

fetchWeatherData('Delhi')





