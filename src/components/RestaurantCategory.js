import ItemList from "./ItemList";
import { useState } from "react"

const RestaurantCategory = ({ data, showItems, setshowIndex, dummy }) => {
    

    const handleClick = () => {
        setshowIndex();
    }
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between"
                    onClick={handleClick}>
                    <span className="font-bold text-lg cursor-pointer">{data.title} ({data.itemCards.length})</span>
                    <span>⬇</span>
                </div>
                {showItems && <ItemList items={data.itemCards} dummy = {dummy}/>}
            </div>
        </div>
    )
}


export default RestaurantCategory