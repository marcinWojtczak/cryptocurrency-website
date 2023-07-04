import axios from 'axios';



//get coins info
export async function getCoinsData() {
	try {
		const response = await axios.get('https://coinranking1.p.rapidapi.com/coins', {
			headers: {
			'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
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
			'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
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
			'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
			'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
			},
		});

		return response.data.data

	} catch(error) { 
		console.log(error)
	}
}

//get exchange data
export async function getExchangeData() {
	try {
		const response = await axios.get('https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges', {
			headers: {
				'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
  			'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
			}
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
			'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
			'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
			},
		});

		return response.data.data
	} catch(error) {
		console.log(error)
	}
}