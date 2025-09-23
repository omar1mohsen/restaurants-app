import { Platform, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

  const inAndroid = Platform.OS === "android";


const Wrapper = styled(SafeAreaView)`
      flex: 1;
      margin-top: ${inAndroid ? `${StatusBar.currentHeight}px` :"0px"};
    `


export { Wrapper}