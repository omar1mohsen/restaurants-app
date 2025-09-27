import styled from "styled-components/native";
import { Text, View } from "react-native";


export const Title = styled.Text`
  font-family: ${(props:any)=>props.theme.fonts.heading};
  font-size: ${(props:any)=>props.theme.fontSizes.title};
  margin-bottom: ${(props:any)=>props.theme.space[2]}
`;
export const Address = styled.Text`
  font-family: ${(props:any)=>props.theme.fonts.body};
  font-weight:700;
  font-size: ${(props:any)=>props.theme.fontSizes.caption};
  margin: ${(props:any)=>props.theme.space[2]} 0;

`;

export const RatingWrapper = styled.View`
  flex-direction:row;
  gap:4px;
`

export const CloseWrapper = styled.View`
flex:1;
flex-direction:row;
align-items:center;
gap:4px;
justify-content:flex-end;
font-weight:700;
`