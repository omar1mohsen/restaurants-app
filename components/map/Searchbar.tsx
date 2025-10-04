import { LocationContext } from "@/services/location/location.context";
import { AntDesign } from "@expo/vector-icons";
import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

const SearchBarWrapper = styled(View)`
  padding: 16px;
  position: absolute;
  top: 40px;
  width: 100%;
  z-index:10;
`;

const SearchbarComponent = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = React.useState(keyword);

  useEffect(()=>{
    setSearchQuery(keyword)
  },[keyword])

  return (
    <SearchBarWrapper>
      <Searchbar
        placeholder="Search"
        icon={"map"}
        onChangeText={setSearchQuery}
        value={searchQuery}
        clearIcon={() => <AntDesign name="close" size={24} color="black" />}
        style={{
          // borderRadius:0,
          boxShadow: "0 0 8px 0 #0006",
        }}
        onEndEditing={() => search(searchQuery)}
      />
    </SearchBarWrapper>
  );
};

export default SearchbarComponent;
