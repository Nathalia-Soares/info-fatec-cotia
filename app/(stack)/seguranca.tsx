import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Seguranca() {
    const router = useRouter();

    const emergencias = [
        {
            servico: 'Polícia Militar',
            numero: '190',
            icone: '🚓',
        },
        {
            servico: 'Bombeiros',
            numero: '193',
            icone: '🚒',
        },
        {
            servico: 'SAMU',
            numero: '192',
            icone: '🚑',
        },
        {
            servico: 'Guarda Municipal',
            numero: '153',
            icone: '🛡️',
        },
    ];

    const delegacias = [
        {
            nome: 'Delegacia Central de Cotia',
            endereco: 'Av. Prof. Manoel José Pedroso, 1000',
            telefone: '(11) 4616-1234',
            horario: '24 horas',
        },
        {
            nome: 'Delegacia da Mulher',
            endereco: 'Rua São Paulo, 500',
            telefone: '(11) 4616-5678',
            horario: 'Seg-Sex: 8h-18h',
        },
    ];

    const dicas = [
        'Mantenha portas e janelas trancadas',
        'Não divulgue informações pessoais em redes sociais',
        'Evite circular com objetos de valor à mostra',
        'Ilumine bem a frente da sua casa',
        'Conheça seus vizinhos e crie uma rede de apoio',
    ];

    const ligarEmergencia = (numero: string) => {
        Linking.openURL(`tel:${numero}`);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>← Voltar</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>🛡️ Segurança</Text>
                <Text style={styles.headerSubtitle}>Serviços de Emergência e Proteção</Text>
            </View>

            <ScrollView 
                style={styles.content}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.alertBox}>
                    <Text style={styles.alertIcon}>⚠️</Text>
                    <Text style={styles.alertText}>
                        Em caso de emergência, ligue imediatamente para os números abaixo
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Números de Emergência</Text>
                    <View style={styles.emergenciaGrid}>
                        {emergencias.map((emergencia, index) => (
                            <TouchableOpacity 
                                key={index} 
                                style={styles.emergenciaCard}
                                onPress={() => ligarEmergencia(emergencia.numero)}
                            >
                                <Text style={styles.emergenciaIcone}>{emergencia.icone}</Text>
                                <Text style={styles.emergenciaServico}>{emergencia.servico}</Text>
                                <View style={styles.numeroBox}>
                                    <Text style={styles.numeroText}>{emergencia.numero}</Text>
                                </View>
                                <Text style={styles.ligarText}>Toque para ligar</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Delegacias</Text>
                    {delegacias.map((delegacia, index) => (
                        <View key={index} style={styles.delegaciaCard}>
                            <Text style={styles.delegaciaNome}>{delegacia.nome}</Text>
                            <View style={styles.delegaciaInfo}>
                                <Text style={styles.delegaciaLabel}>📍 Endereço:</Text>
                                <Text style={styles.delegaciaTexto}>{delegacia.endereco}</Text>
                            </View>
                            <View style={styles.delegaciaInfo}>
                                <Text style={styles.delegaciaLabel}>📞 Telefone:</Text>
                                <TouchableOpacity 
                                    onPress={() => ligarEmergencia(delegacia.telefone.replace(/\D/g, ''))}
                                >
                                    <Text style={styles.delegaciaTelefone}>{delegacia.telefone}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.delegaciaInfo}>
                                <Text style={styles.delegaciaLabel}>🕐 Horário:</Text>
                                <Text style={styles.delegaciaTexto}>{delegacia.horario}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Dicas de Segurança</Text>
                    <View style={styles.dicasContainer}>
                        {dicas.map((dica, index) => (
                            <View key={index} style={styles.dicaItem}>
                                <View style={styles.dicaNumero}>
                                    <Text style={styles.dicaNumeroText}>{index + 1}</Text>
                                </View>
                                <Text style={styles.dicaTexto}>{dica}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Text style={styles.statNumber}>-15%</Text>
                        <Text style={styles.statLabel}>Criminalidade (2024)</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statNumber}>24/7</Text>
                        <Text style={styles.statLabel}>Atendimento</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statNumber}>50+</Text>
                        <Text style={styles.statLabel}>Viaturas</Text>
                    </View>
                </View>

                <View style={styles.infoBox}>
                    <Text style={styles.infoTitle}>ℹ️ Aplicativo Segurança Cotia</Text>
                    <Text style={styles.infoText}>
                        Baixe o aplicativo oficial da Guarda Municipal de Cotia para 
                        fazer denúncias, solicitar rondas e acompanhar boletins de 
                        ocorrência em tempo real.
                    </Text>
                </View>
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
        backgroundColor: '#60737E',
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
        marginBottom: 8,
    },
    headerSubtitle: {
        fontSize: 16,
        color: '#FFFFFF',
        opacity: 0.9,
    },
    content: {
        flex: 1,
    },
    contentContainer: {
        padding: 20,
        paddingBottom: 40,
    },
    alertBox: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        marginBottom: 24,
        flexDirection: 'row',
        alignItems: 'center',
        borderLeftWidth: 4,
        borderLeftColor: '#B11116',
        borderWidth: 1,
        borderColor: '#B11116',
    },
    alertIcon: {
        fontSize: 24,
        marginRight: 12,
    },
    alertText: {
        flex: 1,
        fontSize: 14,
        color: '#B11116',
        fontWeight: '600',
        lineHeight: 20,
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 16,
    },
    emergenciaGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    emergenciaCard: {
        width: '48%',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        borderLeftWidth: 4,
        borderWidth: 1,
        borderColor: '#60737E',
    },
    emergenciaIcone: {
        fontSize: 40,
        marginBottom: 8,
    },
    emergenciaServico: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        marginBottom: 8,
    },
    numeroBox: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        marginBottom: 8,
        backgroundColor: '#B11116',
    },
    numeroText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    ligarText: {
        fontSize: 11,
        color: '#60737E',
    },
    delegaciaCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        elevation: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        borderLeftWidth: 4,
        borderLeftColor: '#60737E',
        borderWidth: 1,
        borderColor: '#60737E',
    },
    delegaciaNome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 12,
    },
    delegaciaInfo: {
        marginBottom: 8,
    },
    delegaciaLabel: {
        fontSize: 12,
        color: '#60737E',
        marginBottom: 2,
    },
    delegaciaTexto: {
        fontSize: 14,
        color: '#000000',
    },
    delegaciaTelefone: {
        fontSize: 14,
        color: '#B11116',
        fontWeight: '600',
    },
    dicasContainer: {
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
    dicaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    dicaNumero: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#60737E',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    dicaNumeroText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    dicaTexto: {
        flex: 1,
        fontSize: 14,
        color: '#000000',
        lineHeight: 20,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    statBox: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 4,
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        borderWidth: 1,
        borderColor: '#60737E',
    },
    statNumber: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#B11116',
        marginBottom: 4,
    },
    statLabel: {
        fontSize: 12,
        color: '#60737E',
        textAlign: 'center',
    },
    infoBox: {
        backgroundColor: '#60737E',
        borderRadius: 12,
        padding: 16,
        borderLeftWidth: 4,
        borderLeftColor: '#B11116',
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 8,
    },
    infoText: {
        fontSize: 14,
        color: '#FFFFFF',
        lineHeight: 22,
        opacity: 0.9,
    },
});
