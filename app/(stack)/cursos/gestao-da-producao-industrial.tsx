import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export const COURSE_META = {
  code: 'GPI',
  duration: '3 anos',
  shift: 'Diurno/Noturno',
  coordinator: 'Prof. Me. Hamilton Fernandes de Moraes Júnior',
  url: 'https://fateccotia.cps.sp.gov.br/gestao-da-producao-industrial'
};

export default function GestaoProducaoIndustrial() {
  const router = useRouter();
  const url = COURSE_META.url;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Gestão da Produção Industrial</Text>
        <Text style={styles.headerSubtitle}>FATEC Cotia</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.meta}>Duração: {COURSE_META.duration}   •   Turno: {COURSE_META.shift}</Text>
        <Text style={styles.meta}>Coordenador: {COURSE_META.coordinator}</Text>

        <Text style={styles.sectionTitle}>Sobre o Curso</Text>
        <Text style={styles.paragraph}>
          O Tecnólogo em Gestão da Produção Industrial planeja, programa e controla a produção industrial nos seus diversos 
          processos, bem como a manutenção e a gestão de sistemas de qualidade. Desenvolve e implanta ações relativas à 
          melhoria de processos, segurança e sustentabilidade, gerencia recursos humanos, físicos e financeiros, dimensionando 
          sua utilização e aplicação, busca da redução de custos, aumento da produtividade e da qualidade dos produtos.
        </Text>

        <Text style={styles.sectionTitle}>Mercado de Trabalho</Text>
        <Text style={styles.paragraph}>
          O Tecnólogo em Gestão da Produção Industrial tem vasto campo de atuação profissional. Pode atuar em indústrias de 
          transformação; empresas prestadoras de serviços; empresas de consultoria, assessoria e auditoria; instituições de 
          ensino, mediante formação requerida pela legislação vigente. Podem exercer as funções de supervisor, gerente ou 
          coordenador de produção industrial, supervisor da qualidade, analista da qualidade, planejador ou controlador de 
          produção, analista de processos, entre outras.
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
  headerTitle: { color: '#FFFFFF', fontSize: 22, fontWeight: '700' },
  headerSubtitle: { color: '#FFFFFF', opacity: 0.9, marginTop: 4 },
  contentContainer: { padding: 20, paddingBottom: 40 },
  meta: { color: '#60737E', fontSize: 13, marginBottom: 6 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#000000', marginTop: 12, marginBottom: 8 },
  paragraph: { color: '#60737E', fontSize: 14, lineHeight: 20, marginBottom: 12 },
  listItem: { color: '#000000', fontSize: 14, marginBottom: 6 },
  linkButton: { backgroundColor: '#60737E', padding: 14, borderRadius: 12, alignItems: 'center', marginTop: 12 },
  linkButtonText: { color: '#FFFFFF', fontWeight: '700' },
});