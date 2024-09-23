import { Text, View, TouchableOpacity, Alert } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import * as Location from 'expo-location';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  const [step, setStep] = useState(0);
  const router = useRouter();
  const [locationGranted, setLocationGranted] = useState(false);
  const [notificationGranted, setNotificationGranted] = useState(false);

  useEffect(() => {
    const checkOnboarding = async () => {
      const onboardingCompleted = await AsyncStorage.getItem('onboardingCompleted');
      if (onboardingCompleted) {
        router.replace("/(home)"); // Redireciona para /home se o onboarding já foi concluído
      }
    };

    checkOnboarding();
  }, []);

  const handleNext = async () => {
    if (step === 1) {
      // Solicitar permissão de localização
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        setLocationGranted(true);
        setStep(step + 1);
      } else {
        Alert.alert('Permissão de Localização', 'É necessário permitir o acesso à sua localização.');
      }
    } else if (step === 2) {
      // Solicitar permissão de notificações
      const { status } = await Notifications.requestPermissionsAsync();
      if (status === 'granted') {
        setNotificationGranted(true);
        // Salvar estado de conclusão do onboarding
        await AsyncStorage.setItem('onboardingCompleted', 'true');
        // Redirecionar para a página inicial após a aprovação
        router.replace("/(home)"); // Usando replace aqui
      } else {
        Alert.alert('Permissão de Notificações', 'É necessário permitir o envio de notificações.');
      }
    } else {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const renderContent = () => {
    return (
      <View style={{ flex: 1 }}>
        {/* Título no topo */}
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Text style={{ fontSize: 32, fontWeight: "800", marginTop: 20 }}>Boas-Vindas à ecco</Text>
        </View>

        {/* Texto no centro */}
        <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}>
          {step === 0 && (
            <Text style={{ textAlign: "center", fontSize: 16, lineHeight: 24 }}>
              Descubra produtos incríveis com descontos de até 60% nas lojas parceiras.
            </Text>
          )}
          {step === 1 && (
            <Text style={{ textAlign: "center", fontSize: 16, lineHeight: 24 }}>
              Precisamos da sua localização para personalizar sua experiência.
            </Text>
          )}
          {step === 2 && (
            <Text style={{ textAlign: "center", fontSize: 16, lineHeight: 24 }}>
              Precisamos da sua autorização para enviar notificações.
            </Text>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      {renderContent()}

      {/* Botões de navegação no final */}
      <View style={{ justifyContent: "flex-end", marginBottom: 20 }}>
        {/* Botão de Anterior, se não for a primeira sessão */}
        {step > 0 && (
          <TouchableOpacity
            style={{
              marginBottom: 10,
              padding: 16,
              borderRadius: 8,
              alignItems: "center",
              backgroundColor: "#555",
            }}
            onPress={handlePrev}
          >
            <Text style={{ color: "#fff", fontSize: 16 }}>Anterior</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={{
            backgroundColor: "#000",
            padding: 16,
            borderRadius: 8,
            alignItems: "center",
          }}
          onPress={handleNext}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>
            {step < 2 ? "Próximo" : "Explorar"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
