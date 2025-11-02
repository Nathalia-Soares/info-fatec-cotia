import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabssLayout() {
    return (
        <Tabs screenOptions={{ 
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#FFFFFF',
                borderTopWidth: 1,
                borderTopColor: '#60737E',
                height: 60,
                paddingBottom: 8,
                paddingTop: 8,
            },
            tabBarActiveTintColor: '#B11116',
            tabBarInactiveTintColor: '#60737E',
        }}>
            <Tabs.Screen 
                name="index" 
                options={{ 
                    title: "Início",
                    tabBarIcon: ({ color }) => (
                        <Text style={{ fontSize: 24 }}>🏠</Text>
                    ),
                }} 
            />
        </Tabs>
    )
}