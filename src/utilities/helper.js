export function formatTime(hours, minutes, seconds) 
{
    return `${hours}h:${minutes}m:${seconds}s`;
}


export function formatAsDollar(amount)
{
    // Use the toLocaleString method to format the number as currency
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
}

export function formatWithCommas(number)
{
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}