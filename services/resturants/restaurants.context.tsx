import { createContext, useEffect, useState } from "react";
import {restaurantsRequest, restaurantsTransform} from "./restaurants.service";


type RestaurantsContextType = {
  restaurants: any[];  
  isLoading: boolean;
  error: string | null;
};

export const RestaurantsContext = createContext<RestaurantsContextType>({
  restaurants: [],
  isLoading: false,
  error: null,
});

export const RestaurantsContextProvider = ({ children }: { children: React.ReactNode }) => {
   const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const { location } = useContext(LocationContext);

  const retrieveRestaurants = () => {
    setIsLoading(true);
    setRestaurants([]);

    restaurantsRequest()
      .then(restaurantsTransform)
      .then((results) => {
        setError(null);
        setIsLoading(false);
        setRestaurants(results);
      })
      .catch((err) => {
        setRestaurants([]);
        setIsLoading(false);
        setError(err);
      });
  };
  useEffect(() => {
      retrieveRestaurants();
  }, []);
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants:restaurants,
        isLoading: isLoading,
        error: error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
