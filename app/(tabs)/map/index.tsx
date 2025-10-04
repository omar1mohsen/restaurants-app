import MapCallout from "@/components/map/MapCallout";
import SearchbarComponent from "@/components/map/Searchbar";
import { LocationContext } from "@/services/location/location.context";
import { RestaurantsContext } from "@/services/resturants/restaurants.context";
import { router } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

const Index = () => {
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantsContext);
  const { lat, lng, viewport } = location;
  const [letDelta, setLetDelta] = useState(0);

  const [selectedRestaurant, setSelectedRestaurant] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLetDelta(northeastLat - southwestLat);
  }, [viewport, location]);

  const handleMarkerPress = (restaurant: any) => {
    setSelectedRestaurant(restaurant);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedRestaurant(null);
  };

  return (
    <>
      <SearchbarComponent />
      <MapView
        style={styles.map}
        region={{
          latitude: lat,
          latitudeDelta: letDelta,
          longitude: lng,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants?.map((restaurant) => (
          <Marker
            key={restaurant.name}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng,
            }}
            onPress={() => handleMarkerPress(restaurant)}
          />
        ))}
      </MapView>

      {/* Bottom Drawer */}
      <Modal
        visible={isDrawerOpen}
        animationType="slide"
        transparent
        onRequestClose={closeDrawer}
      >
        <Pressable style={styles.overlay} onPress={closeDrawer} />
        <View style={styles.drawer} >
          {selectedRestaurant && (
            <TouchableOpacity
                onPress={() => {
                    router.push({
                        pathname: "/(tabs)/restaurants/[id]",
                        params: { id:selectedRestaurant.name },
                    });
                    setIsDrawerOpen(false);
                    setSelectedRestaurant(null)
                }}
            >

            <MapCallout restaurant={selectedRestaurant} />
            </TouchableOpacity>
          )}
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    height:"110%",
  },
  drawer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    maxHeight: "70%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
});

export default Index;
