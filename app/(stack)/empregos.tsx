import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Empregos() {
    const router = useRouter();

    const vagas = [
        {
            cargo: 'Desenvolvedor Full Stack',
            empresa: 'Tech Solutions Ltda',
            tipo: 'CLT',
            salario: 'R$ 6.000 - R$ 8.000',
            urgente: true,
        },
        {
            cargo: 'Auxiliar Administrativo',
            empresa: 'Comercial Cotia',
            tipo: 'CLT',
            salario: 'R$ 2.500 - R$ 3.000',
            urgente: false,
        },
        {
            cargo: 'Técnico em Enfermagem',
            empresa: 'Hospital Municipal',
            tipo: 'Concurso',
            salario: 'R$ 3.500',
            urgente: true,
        },
        {
            cargo: 'Professor de Matemática',
            empresa: 'Rede Municipal de Ensino',
            tipo: 'Concurso',
            salario: 'R$ 4.200',
            urgente: false,
        },
    ];

    const recursos = [
        {
            titulo: 'PAT Cotia',
            descricao: 'Posto de Atendimento ao Trabalhador',
            contato: '(11) 4148-5000',
        },
        {
            titulo: 'SINE Municipal',
            descricao: 'Sistema Nacional de Emprego',
            contato: '(11) 4148-5100',
        },
        {
            titulo: 'Cursos Profissionalizantes',
            descricao: 'Centro de Qualificação Profissional',
            contato: '(11) 4148-5200',
        },
    ];

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>← Voltar</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>💼 Empregos</Text>
                <Text style={styles.headerSubtitle}>Oportunidades e Desenvolvimento Profissional</Text>
            </View>

            <ScrollView 
                style={styles.content}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Vagas Disponíveis</Text>
                    {vagas.map((vaga, index) => (
                        <View key={index} style={styles.vagaCard}>
                            <View style={styles.vagaHeader}>
                                <Text style={styles.vagaCargo}>{vaga.cargo}</Text>
                                {vaga.urgente && (
                                    <View style={styles.urgenteBadge}>
                                        <Text style={styles.urgenteText}>URGENTE</Text>
                                    </View>
                                )}
                            </View>
                            <Text style={styles.vagaEmpresa}>🏢 {vaga.empresa}</Text>
                            <View style={styles.vagaDetails}>
                                <View style={styles.vagaDetailItem}>
                                    <View style={[
                                        styles.tipoBadge,
                                        vaga.tipo === 'CLT' ? styles.tipoCLT : styles.tipoConcurso
                                    ]}>
                                        <Text style={styles.tipoText}>{vaga.tipo}</Text>
                                    </View>
                                </View>
                                <Text style={styles.vagaSalario}>💰 {vaga.salario}</Text>
                            </View>
                            <TouchableOpacity style={styles.candidatarButton}>
                                <Text style={styles.candidatarButtonText}>Ver Detalhes</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Recursos e Apoio</Text>
                    {recursos.map((recurso, index) => (
                        <View key={index} style={styles.recursoCard}>
                            <View style={styles.recursoIcon}>
                                <Text style={styles.recursoIconText}>📞</Text>
                            </View>
                            <View style={styles.recursoContent}>
                                <Text style={styles.recursoTitulo}>{recurso.titulo}</Text>
                                <Text style={styles.recursoDescricao}>{recurso.descricao}</Text>
                                <TouchableOpacity 
                                    onPress={() => Linking.openURL(`tel:${recurso.contato.replace(/\D/g, '')}`)}
                                >
                                    <Text style={styles.recursoContato}>{recurso.contato}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Text style={styles.statNumber}>120+</Text>
                        <Text style={styles.statLabel}>Vagas/Mês</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statNumber}>85%</Text>
                        <Text style={styles.statLabel}>Taxa de Emprego</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statNumber}>30+</Text>
                        <Text style={styles.statLabel}>Empresas</Text>
                    </View>
                </View>

                <View style={styles.infoBox}>
                    <Text style={styles.infoTitle}>💡 Dica Importante</Text>
                    <Text style={styles.infoText}>
                        Mantenha seu cadastro atualizado no PAT e SINE para receber 
                        notificações de vagas compatíveis com seu perfil. Participe 
                        dos cursos de qualificação profissional oferecidos gratuitamente 
                        pela prefeitura.
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
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 16,
    },
    vagaCard: {
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
        borderLeftColor: '#B11116',
        borderWidth: 1,
        borderColor: '#60737E',
    },
    vagaHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    vagaCargo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        flex: 1,
    },
    urgenteBadge: {
        backgroundColor: '#B11116',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    urgenteText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: 'bold',
    },
    vagaEmpresa: {
        fontSize: 14,
        color: '#60737E',
        marginBottom: 12,
    },
    vagaDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    vagaDetailItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    tipoBadge: {
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    tipoCLT: {
        backgroundColor: '#60737E',
    },
    tipoConcurso: {
        backgroundColor: '#60737E',
    },
    tipoText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    vagaSalario: {
        fontSize: 14,
        color: '#B11116',
        fontWeight: 'bold',
    },
    candidatarButton: {
        backgroundColor: '#B11116',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    candidatarButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
    recursoCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
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
    recursoIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#60737E',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    recursoIconText: {
        fontSize: 24,
    },
    recursoContent: {
        flex: 1,
    },
    recursoTitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 4,
    },
    recursoDescricao: {
        fontSize: 13,
        color: '#60737E',
        marginBottom: 4,
    },
    recursoContato: {
        fontSize: 14,
        color: '#B11116',
        fontWeight: '600',
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
