// CryptoPrices.js

export const fetchCryptoPrice = async (cryptoSymbol) => {
    try {
      // Define the API URL for fetching cryptocurrency prices.
      const apiUrl = `https://api.example.com/crypto-price/${cryptoSymbol}`;
  
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      // Assuming the API response contains the latest price in the 'price' property.
      const latestPrice = data.price;
  
      return latestPrice;
    } catch (error) {
      console.error('Error fetching cryptocurrency price:', error);
      throw error;
    }
  };
  