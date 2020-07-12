import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Dashboard from "./Dashboard";
import JobDetails from "./JobDetails";
const SwitchNavigator = createAppContainer(createSwitchNavigator(
    {
        Dashboard: {
            screen: ({navigation}) => <Dashboard navigation={navigation}/>,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            }),
        },
        JobDetails: {
            screen: ({navigation}) => <JobDetails navigation={navigation}/>,
            navigationOptions: ({navigation}) => ({
                headerShown: false
            }),
        },
    },
    {
        initialRouteName: 'Dashboard'
    }
));
const App = () => (
    <SwitchNavigator />
);
export default App;
