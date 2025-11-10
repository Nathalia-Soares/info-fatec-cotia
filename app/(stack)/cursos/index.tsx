import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { COURSE_META as GE } from './gestao-empresarial';
import { COURSE_META as GPI } from './gestao-da-producao-industrial';
import { COURSE_META as CD } from './ciencia-de-dados';
import { COURSE_META as DSM } from './desenvolvimento-de-software-multiplataforma';
import { COURSE_META as DP } from './design-de-produto';
import { COURSE_META as CE } from './comercio-exterior';

const courses = [
  { slug: 'gestao-empresarial', meta: GE },
  { slug: 'gestao-da-producao-industrial', meta: GPI },
  { slug: 'ciencia-de-dados', meta: CD },
  { slug: 'desenvolvimento-de-software-multiplataforma', meta: DSM },
  { slug: 'design-de-produto', meta: DP },
  { slug: 'comercio-exterior', meta: CE },
];

export default function CursosIndex() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cursos</Text>
        <Text style={styles.headerSubtitle}>FATEC Cotia — Conheça os cursos</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {courses.map((c) => (
          <Link key={c.slug} href={`/(stack)/cursos/${c.slug}`} asChild>
            <TouchableOpacity style={styles.card}>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{c.meta.code} — {formatTitle(c.slug)}</Text>
                <Text style={styles.cardSubtitle}>{c.meta.duration} • {c.meta.shift}</Text>
                <Text style={styles.cardDescription}>Coordenador: {c.meta.coordinator}</Text>
              </View>
              <Text style={styles.arrow}>→</Text>
            </TouchableOpacity>
          </Link>
        ))}
      </ScrollView>
    </View>
  );
}

function formatTitle(slug: string) {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { backgroundColor: '#B11116', paddingTop: 60, paddingBottom: 20, paddingHorizontal: 20 },
  headerTitle: { color: '#FFFFFF', fontSize: 22, fontWeight: '700' },
  headerSubtitle: { color: '#FFFFFF', opacity: 0.95, marginTop: 6 },
  contentContainer: { padding: 20, paddingBottom: 40 },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 6,
    borderLeftColor: '#60737E',
    elevation: 2,
  },
  cardContent: { flex: 1 },
  cardTitle: { fontSize: 16, fontWeight: '700', color: '#000000' },
  cardSubtitle: { color: '#60737E', marginTop: 4 },
  cardDescription: { color: '#60737E', marginTop: 6, fontSize: 13 },
  arrow: { fontSize: 20, color: '#B11116' },
});