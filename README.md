# Currency Converter App

This is a **React Native** app designed to convert Indian Rupees (INR) to various currencies with accurate real-time rates. The app includes a text box where the amount in INR is entered, and by clicking on different currency buttons, the converted amount is displayed.

## Features

- **Currency Conversion**: Enter any amount in INR, and the app will convert it to the selected currency.
- **Real-time Rates**: Uses an API from [exchangerates.io](https://exchangerates.io) to fetch the latest exchange rates.
- **User Notifications**: Integrated with the Snackbar package to provide feedback or alerts to users.

## How to Use

1. **Enter Amount**: Type the amount you want to convert in the text box.
2. **Select Currency**: Click on any of the currency buttons (e.g., USD, EUR, GBP) to convert the INR amount.
3. **View Results**: The converted amount will be displayed in a result text box.
4. **Notifications**: Any errors or status updates will be shown via Snackbar notifications at the bottom of the screen.

## About the API

The app uses the [exchangerates.io](https://exchangerates.io) API to fetch the latest exchange rates. Here's how it works:

- **Fetch Rates**: When the user clicks a currency button, the app sends a request to the API, retrieving the latest exchange rate for the selected currency.
- **Display Conversion**: The retrieved rate is then used to calculate and display the equivalent amount in the selected currency.

### Example API Usage

```javascript
fetch('https://api.exchangerates.io/latest?base=INR')
  .then(response => response.json())
  .then(data => {
    const rate = data.rates['USD']; // Example for USD
    const convertedAmount = amountInINR * rate;
    setConvertedAmount(convertedAmount);
  })
  .catch(error => {
    showSnackbar('Error fetching exchange rates');
  });
