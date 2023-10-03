import {React, useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Platform, StatusBar, TextInput, Button, Alert } from 'react-native';
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { RFValue } from "react-native-responsive-fontsize";
// Importe os componentes

SplashScreen.preventAutoHideAsync();

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default function CreateStoryScreen() {
  const[fontsLoaded,setFontsLoaded] = useState(false);
  const[previewImage, setPreviewImage] = useState('image_1');
  const[ dropdownHeight, setDropDownHeight] = useState(40);
  const [open, setOpen] = useState(false);

const loadFontsAsync = async () => {
  await Font.loadAsync(customFonts);
  setFontsLoaded(true);
}

useEffect(() =>{
loadFontsAsync();
})

if (fontsLoaded) {
  SplashScreen.hideAsync();
  // Adicione o dicionário para guardar as imagens

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea}/>
      <View style={styles.appTitle}>
        <View style={styles.appIcon}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.iconImage}
          ></Image>
        </View>
        <View style={styles.appTitleTextContainer}>
          <Text style={styles.appTitleText}>Nova História</Text>  
        </View>
      </View>
      <View style={styles.fieldsContainer}>
            <ScrollView>
              <Image
                source={preview_images[previewImage]}
                style={styles.previewImage}
              ></Image>
              
              <View style={{ height: RFValue(dropdownHeight) }}>
                <DropDownPicker
                  // Adicione as propriedades 

                  containerStyle={{
                    height: 40,
                    borderRadius: 20,
                    marginBottom: 10
                  }}

                  onOpen={() => {
                     setDropDownHeight(170);
                  }}
                  onClose={() => {
                    setDropDownHeight(40);
                  }}
                  style={{ backgroundColor: "transparent" }}
                  itemStyle={{
                    justifyContent: "flex-start"
                  }}
                  dropDownStyle={{ backgroundColor: "#2f345d" }}
                  labelStyle={{
                    color: "white",
                    fontFamily: "Bubblegum-Sans"
                  }}
                  arrowStyle={{
                    color: "white",
                    fontFamily: "Bubblegum-Sans"
                  }}
                />
              </View>

              {/* Adicione a entrada para o título */}

              {/* Adicione a entrada para a descrição */}

              {/* Adicione a entrada para a história */}

              {/* Adicione a entrada para a moral da história */}
              

              
            </ScrollView>
          </View>
          <View style={{ flex: 0.08 }} />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  containerLight: {
    flex: 1,
    backgroundColor: "white"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  appTitleTextLight: {
    color: "black",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  fieldsContainer: {
    flex: 0.85
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain"
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    fontFamily: "Bubblegum-Sans"
  },
  inputFontLight: {
    height: RFValue(40),
    borderColor: "black",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "black",
    fontFamily: "Bubblegum-Sans"
  },
  dropdownLabel: {
    color: "white",
    fontFamily: "Bubblegum-Sans"
  },
  dropdownLabelLight: {
    color: "black",
    fontFamily: "Bubblegum-Sans"
  },
  inputFontExtra: {
    marginTop: RFValue(15)
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5)
  },
  submitButton: {
    marginTop: RFValue(20),
    alignItems: "center",
    justifyContent: "center"
  }
});