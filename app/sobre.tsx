import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Stack } from 'expo-router';

export default function Sobre() {
  const linkedinUrl = 'https://www.linkedin.com/in/nath%C3%A1lia-soares-77430328b';
  const githubUrl = 'https://github.com/Nathalia-Soares';

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>Sobre</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../assets/profile.jpg')}
          style={styles.avatar}
        />

        <Text style={styles.name}>Nathália Soares</Text>
        <Text style={styles.role}>Desenvolvedora de Software Backend</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre</Text>
          <Text style={styles.paragraph}>
            Nathália é desenvolvedora com experiência em backend (Java, Kotlin, Spring Boot), banco de dados relacionais (MySQL, Postgres), não-relacionais (MongoDB e Redis), computação em nuvem (AWS, Azure), metodologias ágeis (Scrum, Kanban) e interesse em arquiteturas escaláveis, robustas e resilientes, testes automatizados e CI/CD. Finalista da Feteps 2024, com o projeto "DeVerGente - Rede social para pessoas neurodivergentes", além de ter atuado como monitora das disciplinas de Desenvolvimento de Software Multiplataforma na Fatec Cotia.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiência</Text>

          <Text style={styles.subtitle}>Software Engineer I — Grupo OLX</Text>
          <Text style={styles.subtitleDate}>Agosto/2025 - Período atual</Text>
          <Text style={styles.paragraph}>
            Atua no desenvolvimento e manutenção de soluções internas, com foco em backend. Contribui para a implementação de boas práticas de engenharia, padrões de código, integração contínua e melhorias de performance. Participa do ciclo completo do desenvolvimento, incluindo automação, testes e deploy.
          </Text>

          <Text style={styles.subtitle}>Software Engineer Intern — Grupo OLX</Text>
          <Text style={styles.subtitleDate}>Maio/2024 - Agosto/2025</Text>
          <Text style={styles.paragraph}>
            Atuou como estagiária em engenharia de software, apoiando o desenvolvimento de funcionalidades e melhorias em sistemas internos. Participou de atividades práticas de backend, integração com APIs, estruturação de bancos de dados, versionamento e qualidade de código. Colaborou com a equipe em rotinas de CI/CD, testes e monitoramento.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Formação</Text>
            <Text style={styles.subtitle}>Desenvolvimento de Software Multiplataforma — Fatec Cotia</Text>
            <Text style={styles.subtitleDate}>Fevereiro/2023 - Período atual</Text>
            <Text style={styles.paragraph}>
            Formação voltada ao desenvolvimento full stack, arquitetura de sistemas, banco de dados, engenharia de software e computação em nuvem.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contato</Text>
          <Text style={styles.paragraph}>nathalia.oliveira24@fatec.sp.gov.br</Text>
        </View>

        <View style={styles.buttonsRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(linkedinUrl)}
          >
            <Text style={styles.buttonText}>LinkedIn</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.ghostButton]}
            onPress={() => Linking.openURL(githubUrl)}
          >
            <Text style={[styles.buttonText, styles.ghostText]}>GitHub</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    paddingBottom: 40,
  },
  header: {
    backgroundColor: '#B11116',
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  headerInner: {
    alignItems: 'flex-start',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
  },
  card: {
    marginTop: 50,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderLeftWidth: 6,
    borderLeftColor: '#B11116',
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginTop: -60,
    marginBottom: 12,
    backgroundColor: '#eee',
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
  },
  role: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  section: {
    width: '100%',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
    marginTop: 8,
  },
  subtitleDate: {
    fontSize: 13,
    color: '#60737E',
    marginBottom: 6,
  },
  paragraph: {
    color: '#333',
    lineHeight: 20,
    fontSize: 14,
  },
  buttonsRow: {
    flexDirection: 'row',
    marginTop: 18,
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: '#B11116',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  ghostButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#B11116',
    marginRight: 0,
    marginLeft: 8,
  },
  ghostText: {
    color: '#B11116',
  },
});
