
import React from "react";
import { CDN_Link } from "../../config";

export const RestaurantList = [
    {
        cloudinaryImageId: CDN_Link+"023a63cc663b328750810b48abd228b4",
        id : "090",
        name : "Veer Ji Malai Chaap",
        avgRating : "3.9",
        cuisines : ["North Indian","Indo-chinese"]
    },
    {
        cloudinaryImageId: CDN_Link+"rmnzl74nmlldrsv9bnvk",
        id : "091",
        name: "Little Hearts",
        avgRating: "4.2",
        cuisines: ["French","Indian"]
    },
    {
        cloudinaryImageId : CDN_Link+"e33e1d3ba7d6b2bb0d45e1001b731fcf",
        id : "092",
        name : "Burger King",
        avgRating: "4.1",
        cuisines: ["American"]
    },
    {
        cloudinaryImageId: CDN_Link+"dr7zk0fge6mhr6xtsfat",
        id : "093",
        name: "Desi Tadka",
        avgRating: "4.3",
        cuisines: ["North Indian","South Indian","Bengali"]   
    },
    {
        cloudinaryImageId: CDN_Link+"3344b8e498281fdcd461dc1b5f3b44d5",
        id : "094",
        name: "Chillies",
        avgRating: "4.0",
        cuisines: ["North Indian","South Indian","Western","Continental"]   
    },
    {
        cloudinaryImageId: CDN_Link+"89707df532fd993b3d79a1a28038a901",
        id : "095",
        name: "Munchies",
        avgRating: "4.5",
        cuisines: ["French"]   
    }
];

export const RestaurantCard = (props) => {
    return (
        <div className="w-56 p-1 m-8 shadow-lg bg-pink-50 hover:scale-95">
           <img className="image-fit" src={CDN_Link+props?.cloudinaryImageId} />
           <h3 className="font-bold">{props?.name}</h3>
           <h4>{props?.avgRating} stars</h4>
           <h4>{props?.cuisines?.join(", ")}</h4>
           <h4>{props?.areaName}</h4>
           <h4>{props?.sla?.deliveryTime} mins</h4>
        </div>
    );
}

export default RestaurantList;