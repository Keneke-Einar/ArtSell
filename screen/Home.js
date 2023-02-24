import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
import Category from "./components/Home/Category";
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";


const HomeScreen = () => {
  const [startHeaderHeight, setStartHeaderHeight] = useState(80);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "rgba(230,230,240,1)" }}>
        {/* Top navigation bar view */}
        <View
          style={{ height: startHeaderHeight, backgroundColor: "transparent" }}
        >
          <LinearGradient
            colors={["rgba(255,255,255,1)", "transparent"]}
            style={styles.gradient}
            start={[0, 0]}
            end={[0, 1]}
          />
          <View style={styles.SearchViewStyle}>
            <FontAwesome5 name="search" size={20} style={{ marginRight: 10 }} />
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Search"
              placeholderTextColor="grey"
              style={styles.textBox}
            />
          </View>
        </View>
        {/* Page content */}
        <ScrollView style={styles.scrollView}>
          <View style={{ paddingTop: 20 }}>
            <Text style={styles.categoryName}>You May Like</Text>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Category
                  imageUri={require("../assets/SliderElement.jpg")}
                  name="Thing1"
                  price="900"
                  author="frogshop"
                />
                <Category
                  imageUri={require("../assets/SliderElement.jpg")}
                  name="Thing2"
                  price="200"
                  author="frogshop"
                />
                <Category
                  imageUri={require("../assets/SliderElement.jpg")}
                  name="Thing3"
                  price="800"
                  author="frogshop"
                />
              </ScrollView>
            </View>
            <Text style={styles.categoryName}>Recently Watched</Text>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Category
                  imageUri={require("../assets/SliderElement.jpg")}
                  name="Thing1"
                  price="900"
                  author="frogshop"
                />
                <Category
                  imageUri={require("../assets/SliderElement.jpg")}
                  name="Thing2"
                  price="200"
                  author="frogshop"
                />
                <Category
                  imageUri={require("../assets/SliderElement.jpg")}
                  name="Thing3"
                  price="800"
                  author="frogshop"
                />
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  categoryName: {
    fontSize: 24,
    fontWeight: "700",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textBox: {
    flex: 1,
    fontWeight: "700",
    backgroundColor: "white",
  },
  SearchViewStyle: {
    zIndex: 3,
    flexDirection: "row",
    borderRadius: 20,
    padding: 10,
    backgroundColor: "white",
    marginHorizontal: 20,
    shadowOffset: { width: 0, height: 0 },
    // shadowColor: "black",
    // shadowOpacity: 0.2,
    elevation: 1,
    marginTop: Platform.OS == "android" ? 30 : null,
  },
  gradient: {
    zIndex: 2,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});
