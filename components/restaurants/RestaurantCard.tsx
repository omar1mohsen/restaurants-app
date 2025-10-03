import React from "react";
import { Card } from 'react-native-paper';
import StarIcon from "@/assets/icons/star.svg"
import { Text, View } from "react-native";
import colors from "@/infrastructure/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { Address, CloseWrapper, RatingWrapper, Title } from "@/assets/styles/resturant-info";
import { router } from "expo-router";

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
  restaurant: Restaurant | any;
}

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
      <Card elevation={5} style={{ marginBottom: 16 }}>
        <Card.Cover source={{ uri: photos[0] }} />
        <Card.Content style={{padding:10 }}>
          <Title>{name}</Title>
          <RatingWrapper>
            {[...Array(Math.floor(4))].map((item,index)=>(
              <StarIcon width={20} height={20} fill="gold" key={`star_${index}`} />
            ))}
            {isClosedTemporarily && (
              <CloseWrapper >
                <Ionicons name="warning" size={20} color={colors.ui.error} />
                <Text style={{color:colors.ui.error,fontWeight:700}}>CLOSED TEMPORARILY</Text>
              </CloseWrapper>
            )}
          </RatingWrapper>
          <Address>{address}</Address>
        </Card.Content>
      </Card>
  );
};


export default RestaurantCard