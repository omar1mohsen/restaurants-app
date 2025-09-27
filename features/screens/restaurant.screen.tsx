import SearchbarComponent from "@/components/sharedComponents/Searchbar";
import React, { useContext } from "react";
import { FlatList,View } from "react-native";
import  RestaurantCard  from "../components/RestaurantCard";
import styled from "styled-components";
import { Wrapper } from "../components/layout";
import { RestaurantsContext } from "@/services/resturants/restaurants.context";
import { ActivityIndicator } from "react-native-paper";
import colors from "@/infrastructure/theme/colors";

const RestaurantScreen = () => {
  const {restaurants,isLoading,error} = useContext(RestaurantsContext);

    const RestaurantsContainer = styled(FlatList).attrs({
      contentContainerStyle:{
        padding:16
      }
    })``

    if(isLoading){
      return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <ActivityIndicator size={50} animating={true} color={colors.brand.secondary} />
        </View>
      )
    }


  return (
    <Wrapper>
      <SearchbarComponent />
      <RestaurantsContainer
        data={restaurants}
        renderItem={({item})=><RestaurantCard restaurant={item}/>}
        keyExtractor={(item:any)=>item.name}
      />
        
    </Wrapper>
  );
};


export default RestaurantScreen;
