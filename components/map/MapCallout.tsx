import React from "react";
import { Text, View } from "react-native";
import StarIcon from "@/assets/icons/star.svg"

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./restaurant-info-card.styles";
import { Restaurant } from "../restaurants/RestaurantCard";
import colors from "@/infrastructure/theme/colors";

interface Props {
    restaurant: Restaurant | any;
}

const MapCallout = ({restaurant}:Props) => {
  console.log("🚀 ~ MapCallout ~ restaurant:", restaurant)


if (!restaurant) return null;

  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <View style={{ width: 200,flexDirection:"row",alignItems:"center" }}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text>{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
             <StarIcon width={20} height={20} fill="gold" key={`star_${i}`} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
                <Text style={{color:colors.ui.error,fontWeight:700}}>CLOSED TEMPORARILY</Text>
            )}
            <View style={{marginLeft:16}}>
              <Icon source={{ uri: icon }} />
            </View>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </View>
  );
};

export default MapCallout;