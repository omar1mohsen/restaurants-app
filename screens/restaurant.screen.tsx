import SearchbarComponent from "@/components/sharedComponents/Searchbar";
import colors from "@/infrastructure/theme/colors";
import { RestaurantsContext } from "@/services/resturants/restaurants.context";
import React, { useContext } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components";
import { Wrapper } from "../components/layout";
import RestaurantCard from "../components/restaurants/RestaurantCard";
import { router } from "expo-router";

const RestaurantScreen = () => {
  const {restaurants,isLoading,error} = useContext(RestaurantsContext);
  console.log("🚀 ~ RestaurantScreen ~ restaurants:", restaurants)

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
        renderItem={({item}:any)=>(
          <TouchableOpacity
            onPress={()=>{
              router.push({
                pathname: "/(tabs)/restaurants/[id]",
                params: { id: item.name },
              })
            }}  
          >
            <RestaurantCard restaurant={item}/>
          </TouchableOpacity>
      )}
        keyExtractor={(item:any)=>item.name}
      />
        
    </Wrapper>
  );
};


export default RestaurantScreen;
