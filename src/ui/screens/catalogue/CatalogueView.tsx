import React, {useEffect, useState} from 'react';
import colors from '../../../config/colors';
import {BackBtnHeader} from '../../components/headers/BackBtnHeader';
import {SafeAreaView, StyleSheet, ToastAndroid} from 'react-native';
import Strings from '../../../config/strings';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BrowseController from '../browse/BrowseController';
import RequestController from '../request/RequestController';
import ReceivedController from '../received/ReceivedController';
import { GILROY } from '../../../config';
const Tab = createMaterialTopTabNavigator();
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {browseResObj, receivedResObj, requestResObj} from '../../../models/api_response/CatalogResModel';
import UserInfoPreference from '../../../utils/UserInfoPreference';
import Common from '../../../utils/Common';
import MainApis from '../../../repo/main/MainApis';
import {routeObj} from '../../../models/api_response/Routes';

type Props = {}


export const CatalogueView = React.memo<Props>((props) =>
{
    const [index, setIndex] = React.useState(0);
    const [routes,setRoutes] = useState<Array<routeObj>>([]);
    const [filterDataSource,setFilterDataSource] = useState<Array<browseResObj>>([]);
    const [masterDataSource, setMasterDataSource] = useState<Array<browseResObj>>([]);
    const [requestListData,setRequestListData] = useState<Array<requestResObj>>([]);
    const [receiveListData,setReceivedListData] = useState<Array<receivedResObj>>([]);
    const [search,setSearch] = useState("");

    const [browseProgress,setBrowseProgress] = useState(true);
    const [reqProgress,setReqProgress] = useState(true);
    const [receiveProgress,setReceiveProgress] = useState(true);

    const [browseNoDataTxt,setBrowseNoDataTxt] = useState(false);
    const [reqNoDataTxt,setReqNoDataTxt] = useState(false);
    const [receiveNoDataTxt,setReceiveNoDataTxt] = useState(false);

    const getBrowseData = async () =>
    {
        try
        {
            const user_id = await UserInfoPreference.getData(Common.LOGIN_ID);
            const user_token = await UserInfoPreference.getData(Common.ACCESS_TOKEN);

            // @ts-ignore
            MainApis.getBrowseCatalog(user_id,user_token)
                .then((response) =>
                {
                    if(response.status === 200)
                    {
                        setBrowseNoDataTxt(false);
                        setBrowseProgress(false);
                        setFilterDataSource(response.data.browse);
                        setMasterDataSource(response.data.browse);

                    }
                    else if(response.status === 204)
                    {
                        setBrowseNoDataTxt(true);
                        setBrowseProgress(false);
                    }
                    else
                    {
                        ToastAndroid.show("something went wrong",ToastAndroid.LONG);
                    }
                })
        }
        catch (e)
        {
            console.log("BrowseException : " + e);
        }

    }

    const getReqData = async () =>
    {
        try
        {
            const user_id = await UserInfoPreference.getData(Common.LOGIN_ID);
            const user_token = await UserInfoPreference.getData(Common.ACCESS_TOKEN);

            // @ts-ignore
            MainApis.getReqCatalog(user_id,user_token)
                .then((response) =>
                {
                    if(response.status === 200)
                    {
                        setReqNoDataTxt(false);
                        setReqProgress(false);
                        setRequestListData(response.data.requested);
                    }
                    else if(response.status === 204)
                    {
                        setReqNoDataTxt(true)
                        setReqProgress(false)
                    }
                    else
                    {
                        ToastAndroid.show("something went wrong",ToastAndroid.LONG);
                    }
                })
        }
        catch (e)
        {
            console.log("BrowseException : " + e);
        }

    }

    const getReceiveData = async () =>
    {
        try
        {
            const user_id = await UserInfoPreference.getData(Common.LOGIN_ID);
            const user_token = await UserInfoPreference.getData(Common.ACCESS_TOKEN);

            // @ts-ignore
            MainApis.getReceiveCatalog(user_id,user_token)
                .then((response) =>
                {
                    if(response.status === 200)
                    {
                        setReceiveNoDataTxt(false);
                        setReceiveProgress(false);
                        setReceivedListData(response.data.received);
                    }
                    else if(response.status === 204)
                    {
                        setReceiveNoDataTxt(true);
                        setReceiveProgress(false);
                    }
                    else
                    {
                        ToastAndroid.show("something went wrong",ToastAndroid.LONG);
                    }
                })
        }
        catch (e)
        {
            console.log("BrowseException : " + e);
        }

    }

    const searchFilterFunction = (text : string) =>
    {
        if (text)
        {
            const newData = masterDataSource.filter(function (item)
            {
                const itemData = item.asset_name ? item.asset_name.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > - 1;
            });
            setFilterDataSource(newData);
            setSearch(text);
        }
        else
        {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilterDataSource(masterDataSource);
            setSearch(text);
        }
    };

    const swipeFun = () =>
    {
        routes.map((data) =>
        {
            if(data.key === 'browse')
            {
                setBrowseProgress(true);
                setBrowseNoDataTxt(false)
                setFilterDataSource([]);
                getBrowseData().then(r => r);
            }
            else if(data.key === 'request')
            {
                setReqProgress(true);
                setReqNoDataTxt(false)
                setRequestListData([]);
                getReqData().then(r => r);

            }
            else
            {
                setReceiveProgress(true)
                setReceiveNoDataTxt(false)
                setReceivedListData([]);
                getReceiveData().then(r => r);
            }

        })

    }

    const updateReqList = () =>
    {
        setReqNoDataTxt(false);
        setReqProgress(true);
        setRequestListData([])
        getReqData().then(r => r)
    }

    useEffect(() =>
    {
        setRoutes([
            { key: 'browse', title: 'Browse' },
            { key: 'request', title: 'Requested' },
            { key: 'receive', title: 'Received' },
        ])
        getBrowseData().then(r => r);
        getReqData().then(r => r);
        getReceiveData().then(r => r);
    },[])

    // @ts-ignore
    const renderScene = ({ route }) =>
    {
        switch (route.key) {
            case 'browse':
                return(
                    <BrowseController
                        browseProgress={browseProgress}
                        browseNoDataTxt={browseNoDataTxt}
                        updateState={filterDataSource}
                        searchTxt={(e) => searchFilterFunction(e)}
                        search={search}/>
                )
            case 'request':
                return (
                    <RequestController
                        reqProgress={reqProgress}
                        reqNoDataTxt={reqNoDataTxt}
                        updateList={updateReqList}
                        requestListsData={requestListData}/>
                )
            case 'receive':
                return (
                    <ReceivedController
                        receiveProgress={receiveProgress}
                        receiveNoDataTxt={receiveNoDataTxt}
                        receiveListsData={receiveListData}/>
                )
            default:
                return null;
        }
    };

    const renderTabBar = ({...props}) =>
    (
        <TabBar
            onTabPress={swipeFun}
            position={props.position}
            jumpTo={props.jumpTo}
            layout={props.layout}
            navigationState={props.navigationState}
            tabStyle={{backgroundColor:colors.white}}
            labelStyle={{color:colors.black,fontFamily:GILROY.semi_bold,fontSize:13,fontWeight:'400'}}
            indicatorStyle={{ backgroundColor: colors.commonBtn, height: 4,borderRadius:8,bottom:-2}} style={{backgroundColor:colors.white}}
            />
    )

    // @ts-ignore
    return(
        <SafeAreaView style={styles.catalogueMainCont}>
            <BackBtnHeader
                backBtnHeaderCont={styles.catalogBackBtn}
                backBtnVisible={true}
                title={Strings.catalogue.catalogueHeaderTxt}/>
            <TabView
                navigationState={{index, routes}}
                renderTabBar={renderTabBar}
                renderScene={renderScene}
                onIndexChange={setIndex}
                swipeEnabled={false}/>
        </SafeAreaView>
    )
})


const styles = StyleSheet.create({
    catalogueMainCont : {
        flex:1,
        backgroundColor:colors.backgroundColor
    },
    catalogBackBtn : {
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0
    },
    catalogueSubCont : {
        flex:1,
        paddingStart:15,
        paddingEnd:15
    },
    catalogueSearchCont : {
        marginTop:20,
        marginBottom:20
    }
})
