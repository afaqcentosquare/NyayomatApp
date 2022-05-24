const numberFormat = (value : number) =>
{
    if(value !== null)
    {
        const re = '\\d(?=(\\d{' + 3 + '})+' + '\\D' + ')';
        // @ts-ignore
        const num = value.toFixed(Math.max(0, ~~2));
        const str = num.replace(new RegExp(re, 'g'), '$&' + ',');
        return str;
    }
    else
    {
        return "0.00";
    }
};

export default {
    numberFormat
}
