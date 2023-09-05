import React from "react";
import './mape.css';
import Image from "next/image";
import sphear from '../../assets/images/Sphear-top.svg';
import mape from '../../assets/images/mapeg.svg'





const MapeLocation = () => {
    return (


        <>
            <div className="mapebg row py-3 ms-0 mx-0">
                <div className="images px-0"><Image src={sphear} className=" img-fluid " />
                    <h1 className="toptxt">Top Creators</h1>
                </div>
                <div className="images"> <Image src={mape} className=" img-fluid" /> </div>
                <div className="images px-0"> <a href="#"><button className="px-2 py-2 mt-2 emaiBtn btn mb-5">View All Collectors</button> </a>
                </div>
            </div>
        </>
    )
}
export default MapeLocation;