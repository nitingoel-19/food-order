

function Offers(){
    return (
        <div className="flex flex-col items-center mt-24">
            <div className="border border-blue-400 w-80 flex h-10 items-center justify-center rounded-2xl hover:scale-105 shadow-md">
                <strong>50% off on Yes Bank Credit card</strong>
            </div>
            <div className="border border-blue-400 w-80 flex h-10 mt-3 items-center justify-center rounded-2xl hover:scale-105 shadow-md">
                <strong>20% off on Kotak Bank Credit card</strong>
            </div>
            <div className="border border-blue-400 w-80 flex h-10 mt-3 items-center justify-center rounded-2xl hover:scale-105 shadow-md ">
                <strong>10% off on Axis Bank Credit card</strong>
            </div>
            <div className="border border-blue-400 w-80 flex h-10 mt-3 items-center justify-center rounded-2xl hover:scale-105 shadow-md">
                <strong>Upto 50% cashback on UPI </strong>
            </div>
        </div>
    );
}

export default Offers;