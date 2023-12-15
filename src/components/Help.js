import {useState} from "react";

const Section = ({General,description,isVisible,setIsVisible}) => { 
    return (
        <>
           <div className="p-2 border-2 border-black m-3">
               <h3>{General}</h3>
               <button className="font-black" onClick={() => {
                   if(isVisible === true){
                    setIsVisible(false)
                   }
                   else{
                    setIsVisible(true);
                   } 
                }}>
                {isVisible ? "Hide" : "Show"}
                </button>
                {isVisible && <p>{description}</p>}
           </div>
        </>
    )
}
const Help = () => {
    const[visibleSection,setVisibleSection] = useState(null);
    return (
        <>
           <Section 
             General={"About"} description = {"We build innovative products & solutions that deliver unparalleled convenience to urban consumers.The best part? Every bit of your work at Swiggy will help elevate the lives of our users across India."}
             isVisible={visibleSection === "About"}
             setIsVisible={() => {
              if(visibleSection === "About"){
                setVisibleSection(null);
              }
              else{
                setVisibleSection("About");
              }
            }} />
           <Section 
             General={"Contact"} description = {"Email Us: swiggy@contact@gmail.com"} 
             isVisible={visibleSection === "Contact"}
             setIsVisible={() => {
              if(visibleSection === "Contact"){
                setVisibleSection(null)
              }
              else{
                setVisibleSection("Contact");
              }
            }} />
           <Section 
             General={"FAQs"} description = {"Are you better than zomato ? -> Just try us and compare yourself :)"}
             isVisible={visibleSection === "FAQs"}
             setIsVisible={() => {
              if(visibleSection === "FAQs"){
                setVisibleSection(null)
              }
              else{
                setVisibleSection("FAQs");
              }
            }} />
        </>
    );
}

export default Help;