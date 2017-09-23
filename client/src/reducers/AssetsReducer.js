export default function() {
  return [
    { entity: "Denver Basecamp", type: "Car Loan", make: "Ford", model: "Bronco", vin: 49281736102, expires: "Dec 21, 2017", insured: "true" },
    { entity: "Ski Lodge", type: "Car Loan", make: "Ford", model: "Raptor", vin: 23451736102, expires: "Dec 31, 2017", insured: "true" },
    { entity: "Eagle Tower", type: "Car Loan", make: "Ford", model: "Explorer", vin: 49282345236, expires: "Dec 1, 2017", insured: "true" },
    { entity: "Denver Basecamp", type: "Car Loan", make: "Ford", model: "Excursion", vin: 9245235736102, expires: "Dec 13, 2017", insured: "true" }
  ];
}

// import { POST_ASSET } from '../actions/types';
//
// export default function(state = {}, action) {
//   switch (action.type) {
//     case "persist/REHYDRATE":
//       return { ...state, assets: action.payload.assets }
//     case POST_ASSET:
//       return { ...state, assets: action.payload }
//     default:
//       return state;
//   }
// }
