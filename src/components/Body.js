
import { useEffect, useState } from "react";
import RestaurantList,{RestaurantCard} from "./Restraunts";
import ShimmerEffect from "./Shimmer";
import Error from "./Error";
import { Link } from "react-router-dom"
import { Res_API } from "../../config";
import useOnline from "../utils/useOnline";

const filterData = (searchText,restList) => {
    return restList.filter((res) => res?.info?.name?.toUpperCase()?.includes(searchText.toUpperCase()));
}

const Body = () => {

    const[restList,setRestList] = useState([]);
    const[filterList,setFilterList] = useState([]);
    const[searchText,setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async function(){
        const data = await fetch(Res_API);
        const json = await data.json();
        setRestList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants);
        setFilterList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants);  
    };

    const textValue = (e) => {
        const val = e.target.value;
        setSearchText(val);
    }
    
    const searchList = () => {
        
        const restData = filterData(searchText,restList);
        setFilterList(restData);
    }
    const onCheck = useOnline();
    if(!onCheck){
        return <h1>❌ You are offline !!</h1>
    }
    if(restList === null){
        return <ShimmerEffect />;
    }
    return restList?.length === 0 ? <ShimmerEffect /> : (
        <div className="">
           <div className="flex p-5 bg-gray-200 pl-36 md-flex-grow flex-row justify-center space-x-4">
               <input className="block w-96 p-4 ps-8 text-base rounded-lg dark:placeholder-gray-400 dark:text-black focus:outline-purple-500 bg-gray-300 hover:scale-105" type="text" placeholder="Search..."  value={searchText} onChange={textValue}/>
               <button className= "p-2 m-2 bg-purple-500 text-white hover:scale-105 rounded-md" type="submit" onClick={searchList}>Search</button>
           </div>
           <div>
               <div className="flex flex-wrap">
                   {filterList?.length === 0 ? <h1>No data found!!</h1> : filterList?.map((res) => (
                     <Link to={"/RestrauntMenu/"+res?.info?.id} key={res?.info?.id}><RestaurantCard {...res?.info}/></Link>
                   ))}
                </div>
           </div>
        </div>
    );
};

export default Body;