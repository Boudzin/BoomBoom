import { useState } from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import axios from "axios";

const SignUp = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    styleMusique: "",
    email: "",
    password: "",
  });


  const submit = async () => {
    if (form.styleMusique === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }
    
    try {
      axios.post("http://172.20.10.4:5001/register",{
        email:form.email,
        password:form.password,
        styleMusique:form.styleMusique
      })
      .then((res)=>console.log("Reussi"))
      .catch((e)=>console.log(e));
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center items-center h-full px-4 "
          style={{
            minHeight: Dimensions.get("window").height - 100,
          }}
        >
          <Text className="text-2xl font-semibold text-[#734789] mt-10 font-psemibold">
            Inscrivez-vous
          </Text>

          <FormField
            title="Style de musique"
            value={form.styleMusique}
            handleChangeText={(e) => setForm({ ...form, styleMusique: e })}
            otherStyles="mt-10"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          
          <View className="flex justify-center items-center pt-5">
            <Text className="text-lg text-black font-pregular">
              Vous avez déja un compte ?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Connectez-vous
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
