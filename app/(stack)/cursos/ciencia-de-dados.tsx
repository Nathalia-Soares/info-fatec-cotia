import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export const COURSE_META = {
  code: 'CD',
  duration: '3 anos',
  shift: 'Noturno',
  coordinator: 'Prof. Me. Johne Marcus Jarske',
  url: 'https://fateccotia.cps.sp.gov.br/ciencia-de-dados'
};

export default function CienciaDeDados() {
  const router = useRouter();
  const url = COURSE_META.url;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ciência de Dados</Text>
        <Text style={styles.headerSubtitle}>FATEC Cotia</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.meta}>Duração: {COURSE_META.duration}   •   Turno: {COURSE_META.shift}</Text>
        <Text style={styles.meta}>Coordenador: {COURSE_META.coordinator}</Text>

        <Text style={styles.sectionTitle}>Sobre o Curso</Text>
        <Text style={styles.paragraph}>
          O Tecnólogo em Ciência de Dados é o profissional que atua em todas as etapas do processo de tratamento de dados: 
          coleta, preparação, análise e apresentação. Ele desenvolve produtos de dados nas áreas de inteligência de negócio, 
          inteligência artificial, aprendizado de máquina, análise preditiva, entre outras. Atua também em processos de ETL 
          (extração, transformação e carga de dados), engenharia de dados e implementação de sistemas de big data.
        </Text>

        <Text style={styles.sectionTitle}>Mercado de Trabalho</Text>
        <Text style={styles.paragraph}>
          O Tecnólogo em Ciência de Dados pode atuar em empresas de diversos setores, como tecnologia, finanças, varejo, 
          saúde, entre outros. Pode exercer as funções de cientista de dados, analista de dados, engenheiro de dados, 
          analista de business intelligence, especialista em machine learning e consultor de dados.
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
  headerTitle: { color: '#FFFFFF', fontSize: 26, fontWeight: 'bold' },
  headerSubtitle: { color: '#FFFFFF', opacity: 0.9, marginTop: 4 },
  contentContainer: { padding: 20, paddingBottom: 40 },
  meta: { color: '#60737E', fontSize: 13, marginBottom: 6 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#000000', marginTop: 12, marginBottom: 8 },
  paragraph: { color: '#60737E', fontSize: 14, lineHeight: 20, marginBottom: 12 },
  listItem: { color: '#000000', fontSize: 14, marginBottom: 6 },
  linkButton: { backgroundColor: '#60737E', padding: 14, borderRadius: 12, alignItems: 'center', marginTop: 12 },
  linkButtonText: { color: '#FFFFFF', fontWeight: '700' },
});