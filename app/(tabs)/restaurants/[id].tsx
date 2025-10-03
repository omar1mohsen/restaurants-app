// app/(tabs)/restaurants/[id].tsx
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { RestaurantsContext } from "@/services/resturants/restaurants.context";
import { ActivityIndicator, List } from "react-native-paper";
import colors from "@/infrastructure/theme/colors";
import RestaurantCard from "@/components/restaurants/RestaurantCard";
import { space } from "@/infrastructure/theme/spacing";
import { Wrapper } from "@/components/layout";
import styled from "styled-components";

export default function RestaurantDetails() {
  const { id } = useLocalSearchParams(); // get the dynamic param
  console.log("🚀 ~ RestaurantDetails ~ id:", id)
  const router = useRouter();
  const {restaurants} = useContext(RestaurantsContext);
  const [restaurant, setRestaurant] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const getRestaurantByName = (name: any) => {
    setIsLoading(true)
    setTimeout(() => {
      const foundRestaurant = restaurants.find((restaurant) => restaurant.name === name);
      setRestaurant(foundRestaurant);
      setIsLoading(false)
    }, 1000);
  }

  useEffect(() => {
    if (id && restaurants.length) {
        getRestaurantByName(id);
    }
  }, [id, restaurants]);

      if(isLoading){
      return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <ActivityIndicator size={50} animating={true} color={colors.brand.secondary} />
        </View>
      )
    }

    const RestaurantWrapper = styled(Wrapper)`
      padding:16px
    `

  return (
    <RestaurantWrapper>
        <RestaurantCard restaurant={restaurant} />
        <ScrollView style={{flex:1}}>
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          >
            <List.Item title="Eggs Benedict" />
            <List.Item title="Classic Breakfast" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}
          >
            <List.Item title="Burger w/ Fries" />
            <List.Item title="Steak Sandwich" />
            <List.Item title="Mushroom Soup" />
          </List.Accordion>

          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
          >
            <List.Item title="Spaghetti Bolognese" />
            <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
            <List.Item title="Steak Frites" />
          </List.Accordion>

          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
          >
            <List.Item title="Coffee" />
            <List.Item title="Tea" />
            <List.Item title="Modelo" />
            <List.Item title="Coke" />
            <List.Item title="Fanta" />
          </List.Accordion>
      </ScrollView>
    </RestaurantWrapper>
  );
}
