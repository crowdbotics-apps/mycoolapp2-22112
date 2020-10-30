import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <ImageBackground
      source={{
        uri:
          "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/download_1_rKBZkNh.png"
      }}
      style={styles.ImageBackground_1}
    >
      <Button title="menu" onPress={() => alert("Pressed!")} />
      <Image
        resizeMode="stretch"
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/download_1_mlaJTJZ.jpeg"
        }}
        style={styles.Image_9}
      />
      <Button title="start" onPress={() => alert("Pressed!")} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  ImageBackground_1: { color: "#341fd1" },
  Button_3: {},
  Image_9: { height: 275 },
  Button_6: {}
})
