import axios from 'axios';

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

export async function getCoinsData() {
	try {
		const response = await axios.get(baseUrl, {
			params: {

			},
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

// export const getCoinsData = async () => {
// 	try {
// 		const response = await axios.get(baseUrl, {
// 				'method':'GET',
// 				params: {
// 				referenceCurrencyUuid: 'yhjMzLPhuIDl',
// 				timePeriod: '24h',
// 				'tiers[0]': '1',
// 				orderBy: 'marketCap',
// 				orderDirection: 'desc',
// 				limit: '50',
// 				offset: '0'
// 				},
// 				headers: {
// 					'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
// 					'X-RapidAPI-Key': '3105332e11msh264d437b14b7e68p1e62d8jsnb3ffd57a961a',
// 				},

// 			}
// 		);
// 		console.log(response)
//     // return response.data.data	

// 	} catch (err) {
// 		console.log(err);
// 	}
// };



// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'X-RapidAPI-Key': '3105332e11msh264d437b14b7e68p1e62d8jsnb3ffd57a961a',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });