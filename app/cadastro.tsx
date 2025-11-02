import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function Cadastro() {
    const router = useRouter();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleCadastro = () => {
        // Validações
        if (!nome || !email || !senha || !confirmarSenha) {
            alert('Por favor, preencha todos os campos obrigatórios');
            return;
        }

        if (senha !== confirmarSenha) {
            alert('As senhas não coincidem');
            return;
        }

        // Aqui você implementaria a lógica de cadastro
        console.log('Cadastro:', { nome, email, telefone, senha });
        
        // Após cadastro bem-sucedido
        alert('Cadastro realizado com sucesso!');
        router.push('/login');
    };

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <StatusBar style="light" />
            <ScrollView 
                contentContainerStyle={styles.scrollContainer}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <TouchableOpacity 
                        onPress={() => router.back()} 
                        style={styles.backButton}
                    >
                        <Text style={styles.backButtonText}>← Voltar</Text>
                    </TouchableOpacity>
                    <Text style={styles.logo}>👤</Text>
                    <Text style={styles.title}>Criar Conta</Text>
                    <Text style={styles.subtitle}>Preencha seus dados</Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Nome Completo *</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Seu nome completo"
                            placeholderTextColor="#60737E"
                            value={nome}
                            onChangeText={setNome}
                            autoCapitalize="words"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>E-mail *</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="seu@email.com"
                            placeholderTextColor="#60737E"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoComplete="email"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Telefone</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="(11) 99999-9999"
                            placeholderTextColor="#60737E"
                            value={telefone}
                            onChangeText={setTelefone}
                            keyboardType="phone-pad"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Senha *</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Mínimo 6 caracteres"
                            placeholderTextColor="#60737E"
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Confirmar Senha *</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite a senha novamente"
                            placeholderTextColor="#60737E"
                            value={confirmarSenha}
                            onChangeText={setConfirmarSenha}
                            secureTextEntry
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.infoBox}>
                        <Text style={styles.infoText}>
                            * Campos obrigatórios
                        </Text>
                    </View>

                    <TouchableOpacity 
                        style={styles.cadastroButton}
                        onPress={handleCadastro}
                    >
                        <Text style={styles.cadastroButtonText}>Criar Conta</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.loginLink}
                        onPress={() => router.push('/login')}
                    >
                        <Text style={styles.loginLinkText}>
                            Já tem uma conta? <Text style={styles.loginLinkBold}>Faça login</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
        paddingTop: 60,
    },
    header: {
        alignItems: 'center',
        marginBottom: 32,
    },
    backButton: {
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    backButtonText: {
        color: '#B11116',
        fontSize: 16,
        fontWeight: '600',
    },
    logo: {
        fontSize: 60,
        marginBottom: 16,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#B11116',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#60737E',
    },
    form: {
        width: '100%',
    },
    inputGroup: {
        marginBottom: 16,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#60737E',
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        color: '#000000',
    },
    infoBox: {
        backgroundColor: '#60737E',
        borderRadius: 12,
        padding: 12,
        marginBottom: 24,
        opacity: 0.1,
    },
    infoText: {
        fontSize: 12,
        color: '#000000',
        textAlign: 'center',
    },
    cadastroButton: {
        backgroundColor: '#B11116',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center',
        marginBottom: 16,
        elevation: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    cadastroButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loginLink: {
        padding: 16,
        alignItems: 'center',
    },
    loginLinkText: {
        color: '#60737E',
        fontSize: 14,
    },
    loginLinkBold: {
        color: '#B11116',
        fontWeight: 'bold',
    },
});
