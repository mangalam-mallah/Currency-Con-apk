export type Currency = {
  name: string;
  value: number; // This is the exchange rate against EUR
  flag: string;
  symbol: string;
};

export const fetchCurrencyRates = async (): Promise<Currency[]> => {
  try {
    const response = await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=73b66949a8d4fdd57ad020f96392237d');
    const data = await response.json();

    // Assuming the data structure from the API response
    const rates = data.rates;

    // Add the INR to EUR conversion rate
    const inrToEurRate = 1 / rates['INR'];

    // Define the currencies you want to support
    const currencies: Currency[] = [
      { name: 'DOLLAR', value: rates['USD'], flag: '🇺🇸', symbol: '$' },
      { name: 'EURO', value: 1, flag: '🇪🇺', symbol: '€' },
      { name: 'POUND', value: rates['GBP'], flag: '🇬🇧', symbol: '£' },
      { name: 'RUBEL', value: rates['RUB'], flag: '🇷🇺', symbol: '₽' },
      { name: 'AUS DOLLAR', value: rates['AUD'], flag: '🇦🇺', symbol: 'A$' },
      { name: 'CAN DOLLAR', value: rates['CAD'], flag: '🇨🇦', symbol: 'C$' },
      { name: 'YEN', value: rates['JPY'], flag: '🇯🇵', symbol: '¥' },
      { name: 'DINAR', value: rates['KWD'], flag: '🇰🇼', symbol: 'KD' },
      { name: 'BITCOIN', value: rates['BTC'], flag: '🎰', symbol: '₿' },
    ];

    // Convert all values from EUR base to INR base
    const currenciesInINR = currencies.map(currency => ({
      ...currency,
      value: currency.value * inrToEurRate, // Convert EUR-based rate to INR-based rate
    }));

    return currenciesInINR;
  } catch (error) {
    console.error('Error fetching currency rates:', error);
    return [];
  }
};
