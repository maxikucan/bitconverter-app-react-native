export const getValues = async(crypto, currency) =>{
    try {
        const values = await fetch(`https://rest.coinapi.io/v1/exchangerate/${crypto}/${currency}?apikey=${process.env.API_KEY}`);
        const data = await values.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
