import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View styles={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textInput}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} title='로그인'></Button>
        <Button style={styles.button} title='회원가입'></Button>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderColor: "#737373",
    borderWidth: 1,
  },
  inputContainer: {
    marginHorizontal: 30,
  },
  buttonContainer: {
    marginVertical: 20,
    marginHorizontal: 40,
  },
  button: {
    backgroundColor: "#737373",
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
});
