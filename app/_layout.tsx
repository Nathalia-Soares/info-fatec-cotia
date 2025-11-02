import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="login" options={{ title: "Login" }} />
            <Stack.Screen name="cadastro" options={{ title: "Cadastro" }} />
            <Stack.Screen name="perfil" options={{ title: "Perfil" }} />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="(stack)" />
        </Stack>
    );
}
