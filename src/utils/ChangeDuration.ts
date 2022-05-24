const changeDuration = (changeDurationTxt : String) =>
{
    if(changeDurationTxt === 'Daily')
    {
        return "Days";
    }
    else if(changeDurationTxt === 'Weekly')
    {
        return "Weeks"
    }
    else
    {
        return "Months";
    }
}

export default {
    changeDuration
}
