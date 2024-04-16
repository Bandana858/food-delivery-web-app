import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";

import { useState, useEffect, useContext } from "react";
import restObj from "../utils/mockData";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //Local state variable- super powerful variable
  const [restObject, setrestObject] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [SearchText, setSearchText] = useState(" ")
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

  console.log("Body Rendered", restObject)
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json();
    console.log(json);
    setrestObject(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(restObject)
    setfilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Looks like you are offline!!! Please check your internet connection</h1>

  const {loggedInUser, setuserInfo} = useContext(UserContext)

  if (restObject.length === 0) {
    return <Shimmer />;
  };
  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="text"
          data-testid= "searchInput"
            className="border border-solid border-black rounded-sm"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="px-4 py-2 bg-orange-100 m-4 rounded-lg font-bold"
            onClick={() => {
              console.log(SearchText)
              console.log(restObject)
              const filteredRestaurants = restObject.filter((res) =>
                res.info.name.toLowerCase().includes(SearchText.toLowerCase())
              )
              setfilteredRestaurants(filteredRestaurants)
            }}
          > Search </button>
        </div>

        <div className="m-4 p-4 flex items-center">
          <button className="px-4 py-4 bg-orange-100 rounded-lg font-bold"
            onClick={() => {
              const filteredList = restObject.filter(
                (res) => res?.info?.avgRating > 4.2
              );
              
              setfilteredRestaurants(filteredList);
              
            }}>Top Rated Restaurants</button>
        </div>
        <div className="m-4 p-4 flex items-center">
            <label className="font-bold">UserName:</label>
            <input className="border border-black p-2 m-2"
            value= {loggedInUser}
            onChange={(e)=> setuserInfo(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {
          filteredRestaurants.map((restaurant) => (
            <Link key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {
                restaurant.info.avgRating > 4.2 ? (
                  <RestaurantCardPromoted restData = {restaurant}/>
                ) : (<RestaurantCard restData={restaurant} />)
              }
              
            </Link>

          ))
        }

      </div>
    </div>
  )
};

export default Body;