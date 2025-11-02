import { Stack } from "expo-router";

export default function StackLayout() {
    return (
        <Stack screenOptions={{ 
            headerShown: false,
            animation: 'slide_from_right',
        }}>
            <Stack.Screen name="cultura" />
            <Stack.Screen name="educacao" />
            <Stack.Screen name="empregos" />
            <Stack.Screen name="seguranca" />
        </Stack>
    );
}
