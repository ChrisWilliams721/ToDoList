import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-web";
import MainLayout from "../layouts/MainLayout";

export default function AboutScreen() {
  return (
    <MainLayout>
      <View>
        <Text>AboutScreen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </MainLayout>
  );
}
