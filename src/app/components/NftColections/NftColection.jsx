import React from "react";
import './nft.css';
import Image from "next/image";
import nft1 from '../../assets/images/nft1.svg';
import nft2 from '../../assets/images/nft2.svg';
import nft3 from '../../assets/images/nft3.svg';
import nft4 from '../../assets/images/nft4.svg';
import nftbg from '../../assets/images/nftLeftbg.svg'

import sphear from '../../assets/images/Sphear-latest.svg'



const NftsColection = () => {


    return (

        <div>
            <div className="row nftBg py-5 me-0">
                <div className="col-md-6 row nftsm position-relative">
                    <Image src={nftbg} className="img-fluid bggradiant position-absolute top-0 start-0 mb-5" />
                    <div className="col-md-2 "></div>
                    <div className="col-md-4">
                        <Image src={nft1} className="img-fluid" />
                        <Image src={nft2} className="img-fluid mt-4 ms-5" />
                    </div>
                    <div className="col-md-4 mt-5 pt-2 ms-4">
                        <Image src={nft3} className="img-fluid ms-4" />
                        <Image src={nft4} className="img-fluid mt-5 ms-5 " />
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="col-md-6 nftColectionTxt pt-5">
                    <div className="d-flex">  <Image src={sphear} className="img-fluid" />
                        <h1 className="latesttxt">Latest NFT Collections</h1>
                    </div>
                    <div className="">
                        <p className="paratxt mb-5 ms-5 ps-4 paratxtall">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                            Aliquam orci lacus, tempor nec accumsan ac, luctus ut sem. <br />
                            Mauris pretium lacus eget vulputate rhoncus.
                        </p>
                        <a href="#" className="ms-4 paratxtall"><button className="paratxtall px-1 py-2  ms-5 emaiBtn mb-5">View All Collectors</button> </a>
                    </div>
                </div>
            </div>
        </div>


    )
};

export default NftsColection;