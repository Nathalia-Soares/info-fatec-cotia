import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Educacao() {
    const router = useRouter();

    const instituicoes = [
        {
            nome: 'FATEC Cotia',
            tipo: 'Ensino Superior',
            cursos: 'Tecnologia da Informação, Análise e Desenvolvimento de Sistemas',
            destaque: true,
        },
        {
            nome: 'E.E. Prof. João Batista',
            tipo: 'Ensino Médio',
            cursos: 'Ensino Regular e Técnico',
            destaque: false,
        },
        {
            nome: 'EMEF Maria Clara',
            tipo: 'Ensino Fundamental',
            cursos: 'Fundamental I e II',
            destaque: false,
        },
    ];

    const programas = [
        {
            titulo: 'Bolsa Universitária',
            descricao: 'Programa municipal de auxílio para estudantes de baixa renda',
        },
        {
            titulo: 'Cursinho Pré-Vestibular',
            descricao: 'Curso preparatório gratuito oferecido pela prefeitura',
        },
        {
            titulo: 'Escola de Idiomas',
            descricao: 'Aulas gratuitas de inglês e espanhol para jovens',
        },
    ];

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>← Voltar</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>📚 Educação</Text>
                <Text style={styles.headerSubtitle}>Instituições e Programas Educacionais</Text>
            </View>

            <ScrollView 
                style={styles.content}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Instituições de Ensino</Text>
                    {instituicoes.map((instituicao, index) => (
                        <View 
                            key={index} 
                            style={[
                                styles.itemCard,
                                instituicao.destaque && styles.itemCardDestaque
                            ]}
                        >
                            {instituicao.destaque && (
                                <View style={styles.destaqueBadge}>
                                    <Text style={styles.destaqueText}>⭐ DESTAQUE</Text>
                                </View>
                            )}
                            <Text style={styles.itemTitle}>{instituicao.nome}</Text>
                            <View style={styles.tipoBadge}>
                                <Text style={styles.tipoText}>{instituicao.tipo}</Text>
                            </View>
                            <Text style={styles.itemDescription}>{instituicao.cursos}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Programas Educacionais</Text>
                    {programas.map((programa, index) => (
                        <View key={index} style={styles.programaCard}>
                            <View style={styles.programaIcon}>
                                <Text style={styles.programaIconText}>✓</Text>
                            </View>
                            <View style={styles.programaContent}>
                                <Text style={styles.itemTitle}>{programa.titulo}</Text>
                                <Text style={styles.itemDescription}>{programa.descricao}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Text style={styles.statNumber}>45+</Text>
                        <Text style={styles.statLabel}>Escolas</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statNumber}>98%</Text>
                        <Text style={styles.statLabel}>Taxa de Alfabetização</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statNumber}>15k+</Text>
                        <Text style={styles.statLabel}>Estudantes</Text>
                    </View>
                </View>

                <View style={styles.infoBox}>
                    <Text style={styles.infoTitle}>📖 Informação</Text>
                    <Text style={styles.infoText}>
                        Cotia investe continuamente em educação, oferecendo desde o ensino 
                        infantil até o superior, com destaque para a FATEC Cotia, referência 
                        em tecnologia na região.
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
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 16,
    },
    itemCard: {
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
    itemCardDestaque: {
        borderLeftColor: '#B11116',
        backgroundColor: '#FFFFFF',
        borderColor: '#B11116',
    },
    destaqueBadge: {
        backgroundColor: '#B11116',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        marginBottom: 8,
    },
    destaqueText: {
        color: '#FFFFFF',
        fontSize: 11,
        fontWeight: 'bold',
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 8,
    },
    tipoBadge: {
        backgroundColor: '#60737E',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
        marginBottom: 8,
    },
    tipoText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '600',
    },
    itemDescription: {
        fontSize: 14,
        color: '#60737E',
        lineHeight: 20,
    },
    programaCard: {
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
    programaIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#60737E',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    programaIconText: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    programaContent: {
        flex: 1,
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
