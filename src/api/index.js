import axios from 'axios';

//get coins info
export async function getCoinsData() {
	try {
		const response = await axios.get('https://coinranking1.p.rapidapi.com/coins', {
			headers: {
			'X-RapidAPI-Key': '3105332e11msh264d437b14b7e68p1e62d8jsnb3ffd57a961a',
			'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
			},
		});

		return response.data.data

	} catch(error) { 
		console.log(error)
	}
}

//get coin inf
export async function getCoinData(coinID) {
	try {
		const response = await axios.get(`https://coinranking1.p.rapidapi.com/coin/${coinID}`, {
			headers: {
			'X-RapidAPI-Key': '3105332e11msh264d437b14b7e68p1e62d8jsnb3ffd57a961a',
			'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
			},
		});

		return response.data.data

	} catch(error) { 
		console.log(error)
	}
}


//get coin history
export async function getCoinHistory(coinID, timePeriod) {
	try {																								
		const response = await axios.get(`https://coinranking1.p.rapidapi.com/coin/${coinID}/history?timeperiod=${timePeriod}`, {
			params: { timePeriod: timePeriod },
			headers: {
			'X-RapidAPI-Key': '3105332e11msh264d437b14b7e68p1e62d8jsnb3ffd57a961a',
			'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
			},
		});

		return response.data.data

	} catch(error) { 
		console.log(error)
	}
}


//get coins news info
export async function cryptoNewsData(newsCategory)  {
	try {
		const response = await axios.get(`https://bing-news-search1.p.rapidapi.com/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=50	`, {
			headers: {
			'X-BingApis-SDK': 'true',
			'X-RapidAPI-Key': '3105332e11msh264d437b14b7e68p1e62d8jsnb3ffd57a961a',
			'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
			},
		});

		return response.data
	} catch(error) {
		console.log(error)
	}
}