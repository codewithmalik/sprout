import { Image, ImageBackground, StyleSheet, StatusBar, Text, View, Platform } from "react-native";

import AppButton from "../components/AppButton";

import logo from "../assets/logo.png";
import BackgroundImage from "../assets/backgroudImage.png";

import colors from "../config/colors";
import fonts from "../config/fonts";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundImage} resizeMode="cover" style={styles.image}>
        <Image source={logo} style={styles.imageStyle} />
        <Text style={styles.welcomeStyle}>Welcome</Text>
        <AppButton
          title={"Sign Up"}
          marginTop={5}
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
        />
        <AppButton
          title={"Log In"}
          marginTop={45}
          backgroundColor={colors.primary}
          textColor={colors.white}
          onPress={() => {
            navigation.navigate("LoginScreen");
          }}
        />
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  imageStyle: {
    width: 220,
    height: 220,
    marginBottom: 60,
  },

  welcomeStyle: {
    marginTop: 0,
    marginBottom: 40,
    color: colors.primary,
    fontSize: fonts.large,
    fontWeight: "700",
    textAlign: "center",
  },
});
