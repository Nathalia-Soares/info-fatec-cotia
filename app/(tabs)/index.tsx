import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
    const router = useRouter();

    return(
        <View style={styles.container}>
            <StatusBar style="light" />
            
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <View>
                        <Text style={styles.headerTitle}>Info Fatec Cotia</Text>
                        <Text style={styles.headerSubtitle}>Conheça mais sobre nossa cidade</Text>
                    </View>
                    <TouchableOpacity 
                        style={styles.loginButton}
                        onPress={() => router.push('/perfil')}
                    >
                        <Text style={styles.loginButtonText}>👤 Perfil</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView 
                style={styles.content}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
            >
                <Link href="/(stack)/cultura" asChild>
                    <TouchableOpacity style={[styles.card, styles.cardCultura]}>
                        <View style={styles.cardIcon}>
                            <Text style={styles.iconText}>🎭</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>Cultura</Text>
                            <Text style={styles.cardDescription}>
                                Descubra os eventos culturais, museus e patrimônios históricos de Cotia
                            </Text>
                        </View>
                        <Text style={styles.arrow}>→</Text>
                    </TouchableOpacity>
                </Link>

                <Link href="/(stack)/educacao" asChild>
                    <TouchableOpacity style={[styles.card, styles.cardEducacao]}>
                        <View style={styles.cardIcon}>
                            <Text style={styles.iconText}>📚</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>Educação</Text>
                            <Text style={styles.cardDescription}>
                                Informações sobre escolas, universidades e programas educacionais
                            </Text>
                        </View>
                        <Text style={styles.arrow}>→</Text>
                    </TouchableOpacity>
                </Link>

                <Link href="/(stack)/cursos" asChild>
                    <TouchableOpacity style={[styles.card, styles.cardCursos]}>
                        <View style={styles.cardIcon}>
                            <Text style={styles.iconText}>🎓</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>Cursos</Text>
                            <Text style={styles.cardDescription}>
                                Conheça os cursos oferecidos pela FATEC Cotia
                            </Text>
                        </View>
                        <Text style={styles.arrow}>→</Text>
                    </TouchableOpacity>
                </Link>

                <Link href="/(stack)/empregos" asChild>
                    <TouchableOpacity style={[styles.card, styles.cardEmpregos]}>
                        <View style={styles.cardIcon}>
                            <Text style={styles.iconText}>💼</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>Empregos</Text>
                            <Text style={styles.cardDescription}>
                                Vagas de emprego, oportunidades e desenvolvimento profissional
                            </Text>
                        </View>
                        <Text style={styles.arrow}>→</Text>
                    </TouchableOpacity>
                </Link>

                <Link href="/(stack)/seguranca" asChild>
                    <TouchableOpacity style={[styles.card, styles.cardSeguranca]}>
                        <View style={styles.cardIcon}>
                            <Text style={styles.iconText}>🛡️</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>Segurança</Text>
                            <Text style={styles.cardDescription}>
                                Informações sobre segurança pública e serviços de emergência
                            </Text>
                        </View>
                        <Text style={styles.arrow}>→</Text>
                    </TouchableOpacity>
                </Link>

                <Link href="/sobre" asChild>
                    <TouchableOpacity style={[styles.card, styles.cardSobre]}>
                        <View style={styles.cardIcon}>
                            <Text style={styles.iconText}>ℹ️</Text>
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardTitle}>Sobre</Text>
                            <Text style={styles.cardDescription}>
                                Saiba mais sobre a desenvolvedora deste app
                            </Text>
                        </View>
                        <Text style={styles.arrow}>→</Text>
                    </TouchableOpacity>
                </Link>
            </ScrollView>
        </View>
    )
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
        elevation: 5,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
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
    loginButton: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
        elevation: 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    loginButtonText: {
        color: '#B11116',
        fontSize: 14,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
    },
    contentContainer: {
        padding: 20,
        paddingBottom: 40,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        borderLeftWidth: 5,
        borderWidth: 1,
        borderColor: '#60737E',
    },
    cardCultura: {
        borderLeftColor: '#B11116',
    },
    cardEducacao: {
        borderLeftColor: '#60737E',
    },
    cardEmpregos: {
        borderLeftColor: '#B11116',
    },
    cardSeguranca: {
        borderLeftColor: '#60737E',
    },
    cardCursos: {
        borderLeftColor: '#000000',
    },
    cardSobre: {
        borderLeftColor: '#0a84ff',
    },
    cardIcon: {
        marginRight: 16,
    },
    iconText: {
        fontSize: 40,
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 6,
    },
    cardDescription: {
        fontSize: 14,
        color: '#60737E',
        lineHeight: 20,
    },
    arrow: {
        fontSize: 24,
        color: '#B11116',
        marginLeft: 10,
    },
});