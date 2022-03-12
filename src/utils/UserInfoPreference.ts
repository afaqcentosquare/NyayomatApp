import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (key : string, val : string) =>
{
    try
    {
        await AsyncStorage.setItem(key,val);
    }
    catch (error)
    {
        console.log("store data : " + error);
    }
};

const getData = async (key : string) =>
{
    try
    {
        const data = await AsyncStorage.getItem(key);
        return data ;
    }
    catch (error)
    {
        console.log("get data : " + error);
    }
};

const deleteAllData = async () =>
{
    try
    {
        await AsyncStorage.clear()
    }
    catch (error)
    {
        console.log("delete data : " + error);
    }
};


export default {
    storeData,
    getData,
    deleteAllData
}