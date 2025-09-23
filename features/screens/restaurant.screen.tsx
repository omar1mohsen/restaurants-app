import SearchbarComponent from "@/components/sharedComponents/Searchbar";
import React from "react";
import { FlatList, Platform, StatusBar, View } from "react-native";
import  RestaurantCard  from "../components/RestaurantCard";
import styled from "styled-components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Wrapper } from "../components/layout";

const RestaurantScreen = () => {

    const RestaurantsContainer = styled(FlatList).attrs({
      contentContainerStyle:{
        padding:16
      }
    })``

    const data = [
      {name:"Restaurant 1"},
      {name:"Restaurant 2"},
      {name:"Restaurant 3"},
      {name:"Restaurant 4"},
      {name:"Restaurant 5"},
      {name:"Restaurant 6"},
      {name:"Restaurant 7"},
      {name:"Restaurant 8"},
      {name:"Restaurant 9"},
      {name:"Restaurant 10"},
    ]

  return (
    <Wrapper>
      <SearchbarComponent />
      <RestaurantsContainer
        data={data}
        renderItem={({item})=><RestaurantCard/>}
        keyExtractor={(item:any)=>item.name}
      />
        
    </Wrapper>
  );
};


export default RestaurantScreen;
