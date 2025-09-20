import React from "react";
import { Card } from 'react-native-paper';
import styled from "styled-components/native";
import StarIcon from "@/assets/icons/star.svg"


interface Restaurant {
  name?: string;
  icon?: string;
  photos?: string[];
  address?: string;
  isOpenNow?: boolean;
  rating?: number;
  isClosedTemporarily?: boolean;
}

interface Props {
  restaurant?: Restaurant;
}

const Title = styled.Text`
  font-family: ${(props:any)=>props.theme.fonts.heading};
  font-size: ${(props:any)=>props.theme.fontSizes.title};
  margin-bottom: ${(props:any)=>props.theme.space[2]}
`;
const Address = styled.Text`
  font-family: ${(props:any)=>props.theme.fonts.body};
  font-weight:700;
  font-size: ${(props:any)=>props.theme.fontSizes.caption};
  margin: ${(props:any)=>props.theme.space[2]} 0;

`;

const RatingWrapper = styled.View`
  flex-direction:row;
  gap:4px;
`

const RestaurantCard: React.FC<Props> = ({restaurant = {}}) => {
  const {
    name = "Some Restaurantsss",
    icon,
    photos = [
      "https://picsum.photos/700",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;


  return(
     <Card elevation={5} style={{marginBottom:16}}>
      <Card.Cover source={{ uri: photos[0] }} />
      <Card.Content style={{padding:10 }}>
        <Title>{name}</Title>
        <RatingWrapper>
          {[...Array(Math.floor(4))].map((item,index)=>(
            <StarIcon width={20} height={20} fill="gold" key={index} />
          ))}
        </RatingWrapper>
        <Address>{address}</Address>
      </Card.Content>
    </Card>
  );
};


export default RestaurantCard