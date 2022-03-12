function numberFormat(priceTxt : number)
{
    const re = '\\d(?=(\\d{' + 3 + '})+' + '\\D' + ')';
    const num = priceTxt.toFixed(Math.max(0, ~~2));
    const str = parseInt(num.replace(new RegExp(re, 'g'), '$&' + ','));
    return str;
}

export default {
    numberFormat
}