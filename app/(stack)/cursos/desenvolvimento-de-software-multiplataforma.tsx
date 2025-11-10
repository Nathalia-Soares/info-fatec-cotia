import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export const COURSE_META = {
  code: 'DSM',
  duration: '3 anos',
  shift: 'Noturno',
  coordinator: 'Prof. Me. Alexandre Calabro Simon',
  url: 'https://fateccotia.cps.sp.gov.br/desenvolvimento-de-software-multiplataforma'
};

export default function DesenvolvimentoSoftware() {
  const router = useRouter();
  const url = COURSE_META.url;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Desenvolvimento de Software Multiplataforma</Text>
        <Text style={styles.headerSubtitle}>FATEC Cotia</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.meta}>Duração: {COURSE_META.duration}   •   Turno: {COURSE_META.shift}</Text>
        <Text style={styles.meta}>Coordenador: {COURSE_META.coordinator}</Text>

        <Text style={styles.sectionTitle}>Sobre o Curso</Text>
        <Text style={styles.paragraph}>
          O Tecnólogo em Desenvolvimento de Software Multiplataforma projeta, desenvolve, testa e realiza manutenção de 
          sistemas computacionais de informação em multiplataformas. Trabalha com ferramentas de produtividade e linguagens 
          de programação para internet, dispositivos móveis e plataformas emergentes, aplicando princípios de usabilidade, 
          acessibilidade e performance. Utiliza técnicas de inteligência artificial e ciência de dados no desenvolvimento 
          de aplicações.
        </Text>

        <Text style={styles.sectionTitle}>Mercado de Trabalho</Text>
        <Text style={styles.paragraph}>
          O Tecnólogo em Desenvolvimento de Software Multiplataforma pode atuar em empresas de desenvolvimento de software, 
          consultorias, startups e no setor público. Pode exercer as funções de desenvolvedor full stack, desenvolvedor 
          mobile, desenvolvedor web, analista de sistemas, arquiteto de software e consultor em tecnologia da informação.
        </Text>

        <TouchableOpacity style={styles.linkButton} onPress={() => Linking.openURL(url)}>
          <Text style={styles.linkButtonText}>Abrir página oficial</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { backgroundColor: '#B11116', paddingTop: 60, paddingBottom: 20, paddingHorizontal: 20 },
  backButton: { marginBottom: 8 },
  backButtonText: { color: '#FFFFFF', fontSize: 16 },
  headerTitle: { color: '#FFFFFF', fontSize: 20, fontWeight: '700' },
  headerSubtitle: { color: '#FFFFFF', opacity: 0.9, marginTop: 4 },
  contentContainer: { padding: 20, paddingBottom: 40 },
  meta: { color: '#60737E', fontSize: 13, marginBottom: 6 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#000000', marginTop: 12, marginBottom: 8 },
  paragraph: { color: '#60737E', fontSize: 14, lineHeight: 20, marginBottom: 12 },
  listItem: { color: '#000000', fontSize: 14, marginBottom: 6 },
  linkButton: { backgroundColor: '#60737E', padding: 14, borderRadius: 12, alignItems: 'center', marginTop: 12 },
  linkButtonText: { color: '#FFFFFF', fontWeight: '700' },
});