import { StyleSheet, Text, View, TextInput, 
    Dimensions, Button, Platform, 
    TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { FC, useState } from "react";

const { width } = Dimensions.get("screen");

const platform = Platform.OS === 'ios' ? 'ios' : 'android';

const App: FC = () => {

	const [text, setText] = useState<string>("");
	const [result, setResult] = useState<string>("~your result~");
	const textHandler = (text: string): void => {
		let newText = text.replace(/-/g, "");
		console.log(newText);
		newText = newText.replace(/,/g, "");
		console.log(newText);
		newText = newText.replace(/ /g, "");
		console.log(newText);
		newText = newText.replace(/\./g, "");

		if (newText == "0") newText = "1";
    if (newText == "") setResult("~your result~");

		console.log(newText);
		setText(newText);
	};
	const buttomHandler = (): void => {
		console.log("press");
    if (text == ""){
      setResult("~Please enter a number~")
    }else {
      const newResult = Math.floor(Math.random() * parseInt(text, 10)) + 1;
		  setResult(newResult.toString());
    }
	};


	return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Text style={styles.header}>How much options?</Text>
        <TextInput 
          style={platform === "ios" ? styles.textInputIos :styles.textInputAnd}
          keyboardType="numeric"
          onChangeText={(text) => {textHandler(text);}}
          placeholder="ex: 6666"
          value={text}/>
        <View style={platform === "ios" ? styles.buttomIos :styles.buttomAnd}>
        <Button
          onPress={buttomHandler}
          title="Generate"
          color={platform === "ios" ? "#fff" : "#841584"}
        />
        </View>
        <View style={platform === "ios" ? styles.resultIos :styles.resultAnd}>
          <Text style={platform === "ios" ? styles.resultTextIos :styles.resultTextAnd}>{result}</Text>
        </View>
        
		  </View>
    </TouchableWithoutFeedback>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	header: {
		fontSize: 20,
	},
	textInputAnd: {
		padding: 10,
		marginTop: 30,
		fontSize: 20,
		width: width / 2,
		height: 50,
    
		elevation: 3,
		shadowColor: "#222",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
		marginBottom: 10,

	},
  textInputIos:{
    padding: 10,
		marginTop: 30,
		fontSize: 20,
		width: width / 2,
		height: 50,

    borderWidth: 3,
    borderColor: "#aaa",
    borderRadius: 10,
    marginBottom: 15,
  },	
  resultAnd: {
		marginTop: 30,
    borderColor: "#aaa",
		borderBottomWidth: 2,
		padding: 5,
		paddingHorizontal: 20,
		
	},
  resultIos: {
    marginTop: 30,
    borderColor: "#aaa",
		borderBottomWidth: 2,
		padding: 5,
		paddingHorizontal: 20,
  },
  resultTextAnd:{
    color: "#777",
    fontSize: 20,
  },
  resultTextIos:{
    color: "#777",
    fontSize: 20,
    padding: 10,
  },
  buttomAnd: {
    backgroundColor: "#841584",
  },
  buttomIos: {
    backgroundColor: "#841584",
    borderRadius: 7,
  },
});
