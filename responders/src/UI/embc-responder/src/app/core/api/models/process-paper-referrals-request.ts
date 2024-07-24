/* tslint:disable */
/* eslint-disable */
import { ClothingSupport } from '../models/clothing-support';
import { FoodGroceriesSupport } from '../models/food-groceries-support';
import { FoodRestaurantSupport } from '../models/food-restaurant-support';
import { IncidentalsSupport } from '../models/incidentals-support';
import { LodgingAllowanceSupport } from '../models/lodging-allowance-support';
import { LodgingBilletingSupport } from '../models/lodging-billeting-support';
import { LodgingGroupSupport } from '../models/lodging-group-support';
import { LodgingHotelSupport } from '../models/lodging-hotel-support';
import { TransportationOtherSupport } from '../models/transportation-other-support';
import { TransportationTaxiSupport } from '../models/transportation-taxi-support';
export interface ProcessPaperReferralsRequest {
  referrals?: Array<
    | ClothingSupport
    | IncidentalsSupport
    | FoodGroceriesSupport
    | FoodRestaurantSupport
    | LodgingHotelSupport
    | LodgingBilletingSupport
    | LodgingGroupSupport
    | LodgingAllowanceSupport
    | TransportationTaxiSupport
    | TransportationOtherSupport
  > | null;
}
