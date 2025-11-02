import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Perfil() {
    const router = useRouter();

    // Dados do usuário (em produção, viriam de um contexto/estado global)
    const usuario = {
        nome: 'João Silva',
        email: 'joao.silva@email.com',
        telefone: '(11) 99999-9999',
    };

    const handleLogout = () => {
        // Aqui você implementaria a lógica de logout
        router.push('/login');
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>← Voltar</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>👤 Meu Perfil</Text>
            </View>

            <ScrollView 
                style={styles.content}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.profileCard}>
                    <View style={styles.avatarContainer}>
                        <Text style={styles.avatar}>👤</Text>
                    </View>
                    <Text style={styles.userName}>{usuario.nome}</Text>
                    <Text style={styles.userEmail}>{usuario.email}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Informações Pessoais</Text>
                    
                    <View style={styles.infoCard}>
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Nome</Text>
                            <Text style={styles.infoValue}>{usuario.nome}</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>E-mail</Text>
                            <Text style={styles.infoValue}>{usuario.email}</Text>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.infoRow}>
                            <Text style={styles.infoLabel}>Telefone</Text>
                            <Text style={styles.infoValue}>{usuario.telefone}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Configurações</Text>
                    
                    <TouchableOpacity style={styles.optionCard}>
                        <Text style={styles.optionIcon}>🔔</Text>
                        <Text style={styles.optionText}>Notificações</Text>
                        <Text style={styles.optionArrow}>→</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionCard}>
                        <Text style={styles.optionIcon}>🔒</Text>
                        <Text style={styles.optionText}>Alterar Senha</Text>
                        <Text style={styles.optionArrow}>→</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionCard}>
                        <Text style={styles.optionIcon}>❓</Text>
                        <Text style={styles.optionText}>Ajuda</Text>
                        <Text style={styles.optionArrow}>→</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionCard}>
                        <Text style={styles.optionIcon}>ℹ️</Text>
                        <Text style={styles.optionText}>Sobre</Text>
                        <Text style={styles.optionArrow}>→</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity 
                    style={styles.logoutButton}
                    onPress={handleLogout}
                >
                    <Text style={styles.logoutButtonText}>Sair da Conta</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        backgroundColor: '#B11116',
        paddingTop: 60,
        paddingBottom: 30,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    backButton: {
        marginBottom: 10,
    },
    backButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    content: {
        flex: 1,
    },
    contentContainer: {
        padding: 20,
        paddingBottom: 40,
    },
    profileCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 24,
        alignItems: 'center',
        marginBottom: 24,
        elevation: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: '#60737E',
    },
    avatarContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#60737E',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatar: {
        fontSize: 50,
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 8,
    },
    userEmail: {
        fontSize: 14,
        color: '#60737E',
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 12,
    },
    infoCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        elevation: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        borderWidth: 1,
        borderColor: '#60737E',
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
    },
    infoLabel: {
        fontSize: 14,
        color: '#60737E',
        fontWeight: '600',
    },
    infoValue: {
        fontSize: 14,
        color: '#000000',
    },
    divider: {
        height: 1,
        backgroundColor: '#60737E',
        opacity: 0.2,
    },
    optionCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        borderWidth: 1,
        borderColor: '#60737E',
    },
    optionIcon: {
        fontSize: 24,
        marginRight: 12,
    },
    optionText: {
        flex: 1,
        fontSize: 16,
        color: '#000000',
    },
    optionArrow: {
        fontSize: 20,
        color: '#60737E',
    },
    logoutButton: {
        backgroundColor: '#B11116',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        marginTop: 8,
    },
    logoutButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
