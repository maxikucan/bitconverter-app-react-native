export const getValues = async(crypto, currency) =>{
    try {
        const values = await fetch(`https://rest.coinapi.io/v1/exchangerate/${crypto}/${currency}?apikey=257AE60F-BD4B-4F6B-AC48-44618B180731`)
        const data = await values.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
