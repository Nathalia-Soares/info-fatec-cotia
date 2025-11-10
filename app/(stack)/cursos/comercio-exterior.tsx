import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export const COURSE_META = {
  code: 'CE',
  duration: '3 anos',
  shift: 'Diurno/Noturno',
  coordinator: 'Prof. Me. Valter Yogui',
  url: 'https://fateccotia.cps.sp.gov.br/comercio-exterior'
};

export default function ComercioExterior() {
  const router = useRouter();
  const url = COURSE_META.url;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Comércio Exterior</Text>
        <Text style={styles.headerSubtitle}>FATEC Cotia</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.meta}>Duração: {COURSE_META.duration}   •   Turno: {COURSE_META.shift}</Text>
        <Text style={styles.meta}>Coordenador: {COURSE_META.coordinator}</Text>

        <Text style={styles.sectionTitle}>Sobre o Curso</Text>
        <Text style={styles.paragraph}>
          O Tecnólogo em Comércio Exterior gerencia operações de importação e exportação de bens e serviços, atuando em 
          empresas nacionais e internacionais. Desenvolve estratégias comerciais, negocia com fornecedores e clientes 
          estrangeiros, elabora contratos internacionais e gerencia processos aduaneiros. Atua também em logística 
          internacional, câmbio, seguros e análise de mercados externos.
        </Text>

        <Text style={styles.sectionTitle}>Mercado de Trabalho</Text>
        <Text style={styles.paragraph}>
          O Tecnólogo em Comércio Exterior pode atuar em empresas importadoras e exportadoras, trading companies, 
          consultorias, despachantes aduaneiros, instituições financeiras e órgãos governamentais. Pode exercer as 
          funções de analista de comércio exterior, coordenador de importação e exportação, analista de logística 
          internacional, consultor em comércio exterior e gestor de negócios internacionais.
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