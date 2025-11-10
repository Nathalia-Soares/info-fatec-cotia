import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export const COURSE_META = {
  code: 'GE',
  duration: '3 anos',
  shift: 'Diurno/Noturno',
  coordinator: 'Prof. Esp. Elifas Fernandes Gorgonho Farias',
  url: 'https://fateccotia.cps.sp.gov.br/gestao-empresarial'
};

export default function GestaoEmpresarial() {
  const router = useRouter();
  const url = COURSE_META.url;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Gestão Empresarial</Text>
        <Text style={styles.headerSubtitle}>FATEC Cotia</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.meta}>Duração: {COURSE_META.duration}   •   Turno: {COURSE_META.shift}</Text>
        <Text style={styles.meta}>Coordenador: {COURSE_META.coordinator}</Text>

        <Text style={styles.sectionTitle}>Sobre o Curso</Text>
        <Text style={styles.paragraph}>
          O Tecnólogo em Gestão Empresarial atua na elaboração de planos de negócios, controle e assessoria administrativa. 
          Desenvolve análise de indicadores de desempenho empresarial e gerencia de recursos humanos, materiais e financeiros. 
          Implementa e gerencia sistemas de informações gerenciais com o objetivo de diagnosticar a situação da empresa e propor 
          soluções para o desenvolvimento de planos, programas e projetos empresariais.
        </Text>

        <Text style={styles.sectionTitle}>Mercado de Trabalho</Text>
        <Text style={styles.paragraph}>
          O Tecnólogo em Gestão Empresarial tem vasto campo de atuação profissional. Pode atuar em empresas privadas, públicas, 
          do terceiro setor, organizações não governamentais e empresas familiares, micro e pequenas empresas. Podem exercer 
          as funções de gerente administrativo, gerente financeiro, analista de processos, analista administrativo, consultor 
          de negócios e empreendedor.
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