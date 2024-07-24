import { ClothingSupport, IncidentalsSupport, FoodGroceriesSupport, FoodRestaurantSupport, LodgingHotelSupport, LodgingBilletingSupport, LodgingGroupSupport, LodgingAllowanceSupport, TransportationTaxiSupport, TransportationOtherSupport } from "src/app/core/api/models";

export type AllSupportsType = 

  ClothingSupport | IncidentalsSupport     | FoodGroceriesSupport
    | FoodRestaurantSupport
    | LodgingHotelSupport
    | LodgingBilletingSupport
    | LodgingGroupSupport
    | LodgingAllowanceSupport
    | TransportationTaxiSupport
    | TransportationOtherSupport
   