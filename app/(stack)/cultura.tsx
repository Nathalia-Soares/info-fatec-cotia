import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Cultura() {
    const router = useRouter();

    const eventos = [
        {
            titulo: 'Biblioteca Municipal Batista Cepelos',
            descricao: 'Livros, atividades culturais e espaço de leitura para a comunidade',
            local: 'Centro de Cotia',
        },
        {
            titulo: 'Feira de Artesanato',
            descricao: 'Todo último domingo do mês na praça principal',
            local: 'Praça da República',
        },
        {
            titulo: 'Festival de Música',
            descricao: 'Evento anual com artistas locais e regionais',
            local: 'Parque da Cidade',
        },
    ];

    const patrimonios = [
        {
            nome: 'Igreja Matriz Nossa Senhora do Monte Serrat',
            ano: '1723',
            info: 'Patrimônio histórico e arquitetônico da cidade',
        },
        {
            nome: 'Casa do Padre Inácio',
            ano: '1750',
            info: 'Museu que preserva a história dos primeiros colonizadores',
        },
    ];

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>← Voltar</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>🎭 Cultura</Text>
                <Text style={styles.headerSubtitle}>Eventos e Patrimônios Culturais</Text>
            </View>

            <ScrollView 
                style={styles.content}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Eventos Culturais</Text>
                    {eventos.map((evento, index) => (
                        <View key={index} style={styles.itemCard}>
                            <Text style={styles.itemTitle}>{evento.titulo}</Text>
                            <Text style={styles.itemDescription}>{evento.descricao}</Text>
                            <View style={styles.itemFooter}>
                                <Text style={styles.itemLocation}>📍 {evento.local}</Text>
                            </View>
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Patrimônios Históricos</Text>
                    {patrimonios.map((patrimonio, index) => (
                        <View key={index} style={styles.itemCard}>
                            <View style={styles.patrimonioHeader}>
                                <Text style={styles.itemTitle}>{patrimonio.nome}</Text>
                                <View style={styles.yearBadge}>
                                    <Text style={styles.yearText}>{patrimonio.ano}</Text>
                                </View>
                            </View>
                            <Text style={styles.itemDescription}>{patrimonio.info}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.infoBox}>
                    <Text style={styles.infoTitle}>💡 Saiba Mais</Text>
                    <Text style={styles.infoText}>
                        Cotia possui uma rica história cultural, sendo fundada em 1723. 
                        A cidade preserva tradições japonesas e portuguesas, refletidas 
                        em festivais e na gastronomia local.
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
        borderLeftColor: '#B11116',
        borderWidth: 1,
        borderColor: '#60737E',
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 8,
    },
    itemDescription: {
        fontSize: 14,
        color: '#60737E',
        lineHeight: 20,
        marginBottom: 8,
    },
    itemFooter: {
        marginTop: 4,
    },
    itemLocation: {
        fontSize: 13,
        color: '#B11116',
        fontWeight: '600',
    },
    patrimonioHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    yearBadge: {
        backgroundColor: '#60737E',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    yearText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 12,
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
