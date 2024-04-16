import { CDN_URL } from "../utils/constants";   //THIS IS HOW WE IMPORT A NAMED EXPORT
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'


const RestaurantCard = (props) => {
    const { restData } = props;
    const {loggedInUser} = useContext(UserContext)
    console.log(restData)
    
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime
    }= restData.info
    
    return (
      <div className="m-6 p-6 w-[250px] h-[500px] rounded-lg bg-gray-100 hover:bg-orange-100 ">
        <img alt="res-logo" className="rounded-lg" src={CDN_URL + cloudinaryImageId} />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating } <FontAwesomeIcon icon={faStar} className="text-yellow-400"/></h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
        <h4>User: {loggedInUser}</h4>
        
      </div>
    );
  };

  export const withPromotedLabel = (RestaurantCard) => {
    return(props)=> {
      return(
        <div data-testid = "resCard">
          <label className="absolute bg-gray-700 text-white m-2 p-2 rounded-lg">Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }

  export default RestaurantCard;