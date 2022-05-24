import React, {FC} from "react";
import { AllScreenStack } from "./AllScreenStack";
import SignInController from "../../ui/screens/signin/SignInController";
import MakeAppController from "../../ui/screens/makeapplication/MakeAppController";
import DiscoverController from '../../ui/screens/main/discover/DiscoverController';
import MakePaymentController from '../../ui/screens/makepayment/MakePaymentController';
import MyAssetsController from '../../ui/screens/myassets/MyAssetsController';
import CatalogueController from '../../ui/screens/catalogue/CatalogueController';
import PaymentConfirmController from '../../ui/screens/paymentconfirm/PaymentConfirmController';
import CheckoutController from '../../ui/screens/checkout/CheckoutController';
import ThankYouController from '../../ui/screens/thankyou/ThankYouController';
import OngoingAssetController from '../../ui/screens/ongoingassets/OngoingAssetController';
import DefaultAssetsController from '../../ui/screens/defaultassets/DefaultAssetsController';
import CompletedAssetController from '../../ui/screens/completedassets/CompletedAssetController';
import OngoingAssetDetailController from '../../ui/screens/ongoingassetdetail/OngoingAssetDetailController';
import defaultAssetDetailController from '../../ui/screens/defaultassetdetail/DefaultAssetDetailController';
import TransactionController from '../../ui/screens/transactions/TransactionController';
import MyNotificationController from '../../ui/screens/mynotify/MyNotificationController';
import TransactionDetailController from '../../ui/screens/transactiondetail/TransactionDetailController';
import CompleteAssetDetailController from '../../ui/screens/completeassetdetail/CompleteAssetDetailController';
import SplashController from '../../ui/screens/splash/SplashController';
import MyAccountController from '../../ui/screens/myaccount/MyAccountController';
import {StatusBars} from '../../ui/components/StatusBars';
import SignUpController from '../../ui/screens/signup/SignUpController';

type Props = {}

export const AllScreenRoutes : FC<Props> = ({}) =>
{
    return(
        <>
                <StatusBars/>
                <AllScreenStack.Navigator
                    initialRouteName={"Splash"}>

                        <AllScreenStack.Screen
                            name={"Splash"}
                            component={SplashController}
                            options={{headerShown: false}}/>

                        <AllScreenStack.Screen
                            name={"SignIn"}
                            component={SignInController}
                            options={{headerShown: false}}/>

                        <AllScreenStack.Screen
                            name={"SignUp"}
                            component={SignUpController}
                            options={{headerShown: false}}/>


                        <AllScreenStack.Screen
                            name={"Discover"}
                            component={DiscoverController}
                            options={{headerShown: false}}/>

                        <AllScreenStack.Screen
                            name={"MakeApp"}
                            component={MakeAppController}
                            options={{headerShown: false}}/>

                        <AllScreenStack.Screen
                            name={"MakePayment"}
                            component={MakePaymentController}
                            options={{headerShown: false}}/>

                        <AllScreenStack.Screen
                            name={"MyAssets"}
                            component={MyAssetsController}
                            options={{headerShown: false}}/>

                        <AllScreenStack.Screen
                            name={"chooseAssets"}
                            component={CatalogueController}
                            options={{headerShown: false}}/>

                        <AllScreenStack.Screen
                            name={"paymentConfirm"}
                            component={PaymentConfirmController}
                            options={{headerShown: false}}/>

                        <AllScreenStack.Screen
                            name={"checkout"}
                            component={CheckoutController}
                            options={{headerShown: false}}/>

                        <AllScreenStack.Screen
                            name={"thankYou"}
                            component={ThankYouController}
                            options={{headerShown: false}}/>

                        <AllScreenStack.Screen
                            name={"onGoingAssets"}
                            component={OngoingAssetController}
                            options={{headerShown: false}}/>

                        <AllScreenStack.Screen
                            name={"defaultedAssets"}
                            component={DefaultAssetsController}
                            options={{headerShown: false}}/>

                        <AllScreenStack.Screen
                            name={"completedAsset"}
                            component={CompletedAssetController}
                            options={{headerShown: false}}/>

                        <AllScreenStack.Screen
                            name={"onGoingAssetDetail"}
                            component={OngoingAssetDetailController}
                            options={{headerShown: false}}/>

                        <AllScreenStack.Screen
                            name={"transaction"}
                            component={TransactionController}
                            options={{headerShown: false}}/>

                        <AllScreenStack.Screen
                            name={"defaultAssetDetail"}
                            component={defaultAssetDetailController}
                            options={{headerShown: false}}/>

                        <AllScreenStack.Screen
                            name={"myNotify"}
                            component={MyNotificationController}
                            options={{headerShown: false}}/>

                        <AllScreenStack.Screen
                            name={"transactionDetail"}
                            component={TransactionDetailController}
                            options={{headerShown: false}}/>

                        <AllScreenStack.Screen
                            name={"completeAssetDetail"}
                            component={CompleteAssetDetailController}
                            options={{headerShown: false}}/>

                        <AllScreenStack.Screen
                            name={"myAccount"}
                            component={MyAccountController}
                            options={{headerShown: false}}/>

                </AllScreenStack.Navigator>
        </>
    )
}
