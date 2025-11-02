import { Redirect } from 'expo-router';

export default function Index() {
    // Você pode adicionar lógica aqui para verificar se o usuário está logado
    // e redirecionar para (tabs) se estiver, ou para login se não estiver
    
    return <Redirect href="/login" />;
}
