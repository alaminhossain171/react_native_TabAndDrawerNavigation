import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../../Screens/Dashboard/Dashboard';
import Schedule from '../../Screens/Schedule/Schedule';
import MainNavigationString from '../../Constants/MainNavigationString';
const StackDashbord = createNativeStackNavigator();

const DashboardStack = () => {
    return (
        <StackDashbord.Navigator screenOptions={{ headerShown: false }} initialRouteName={MainNavigationString.DASHBORD}>
            <StackDashbord.Screen name={MainNavigationString.DASHBORD} component={Dashboard} />
            <StackDashbord.Screen name={MainNavigationString.SCHEDULE} component={Schedule} />
        </StackDashbord.Navigator>
    )
}

export default DashboardStack