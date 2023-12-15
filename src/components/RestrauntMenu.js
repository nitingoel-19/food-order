
import { useParams } from "react-router-dom"
import { CDN_Link, MENU_API } from "../../config";
import ShimmerEffect from "./Shimmer";
import ExpandedMenu from "./ExpandedMenu";
import useResMenu from "../utils/useResMenu";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


{/* Different way of writing async function
    const helper = async () => {
        const data = await fetch(MENU_API+id);
        const json = await data.json();
        console.log(json);
    } */}

const RestaurantMenu = () => {
    const params = useParams();
    const {id} = params;
    const resInfo = useResMenu(id);
    
    if(resInfo === null){
        return <ShimmerEffect />;
    }
    const {
        name,
        city,
        areaName,
        avgRating,
        cloudinaryImageId,
        costForTwoMessage,
        cuisines,
        totalRatingsString
    } = resInfo?.cards[0]?.card?.card?.info;
    const { title } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    const dispatch = useDispatch();
    const handleAdd = (food) => {
        dispatch(addItems(food));
    }
    return (
        <>
           <div className="w-48 p-4">
              <img src={CDN_Link+cloudinaryImageId}/>
              <h2>{name}</h2>
              <h3>{avgRating} stars</h3>
              <h3>{totalRatingsString}</h3>
              <h3>{cuisines.join(", ")}</h3>
              <h3>{areaName+", "+city}</h3>
              <h3>{costForTwoMessage}</h3>
           </div>
           <div className="ml-64 absolute inset-x-0 top-32">
              <h1 className="p-2 bg-gray-200 w-24 ">Menu Card</h1>
              {
                <section className="pt-5">
                    <div className="border border-black w-56 mb-3">
                        <h3 className="p-2">Burger</h3>
                        <button type="button" className="p-2 m-2 bg-red-100" onClick={() => handleAdd("Burger")}>Add</button>
                    </div>
                    <div className="border border-black w-56 mb-3 ">
                        <h3 className="p-2">Chole Bhature</h3>
                        <button type="button" className="p-2 m-2 bg-red-100" onClick={() => handleAdd("Chole Bhature")}>Add</button>
                    </div>
                    <div className="border border-black w-56 mb-3">
                        <h3 className="p-2">Pav Bhaji</h3>
                        <button type="button" className="p-2 m-2 bg-red-100" onClick={() => handleAdd("Pav Bhaji")}>Add</button>
                    </div>
                    <div className="border border-black w-56 mb-3">
                        <h3 className="p-2">Chowmein</h3>
                        <button type="button" className="p-2 m-2 bg-red-100" onClick={() => handleAdd("Chowmein")}>Add</button>
                    </div>
                </section>
              }
           </div>
        </>
    );
}

export default RestaurantMenu;