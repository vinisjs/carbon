import { Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Index() {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
    else router.push("/(home)"); // Redireciona para a rota (home)
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
          <Text style={{ textAlign: "center", fontSize: 16, lineHeight: 24 }}>
            Descubra produtos incríveis com descontos de até 60% nas lojas parceiras.
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16, lineHeight: 24, marginTop: 16 }}>
            Compre sacolas surpresa com itens selecionados especialmente para você e apoie a sustentabilidade.
          </Text>
          <Text style={{ textAlign: "center", fontSize: 16, lineHeight: 24, marginTop: 16 }}>
            Vamos te mostrar como funciona!
          </Text>
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
