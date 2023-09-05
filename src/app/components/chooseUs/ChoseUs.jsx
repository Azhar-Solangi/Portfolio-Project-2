import React from "react";
import './chose.css';
import 'bootstrap/dist/css/bootstrap.css';
import Image from "next/image";
import sphear from '../../assets/images/Sphear-chosoe.svg';
import marketp from '../../assets/images/card1.png';
import datap from '../../assets/images/card2.png';
import money from '../../assets/images/card3.png';
import secure from '../../assets/images/card41.png'




const ChoseUs = () => {


    return (

        <div className="cosebg">
            <div className="row rowcss rounded-end-circle">
                <div className="col-md-6 choseCol" >
                    <div className="d-flex"> <Image src={sphear} className="img-fluid" />
                        <h1 className="choseTxt">Why Choose Us?</h1>
                    </div>
                    <p className="chosePara">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Aliquam orci lacus, tempor nec <br /> accumsan ac, luctus ut sem. Mauris pretium <br /> lacus eget vulputate rhoncus. Vivamus egestas,<br /> orci eu lobortis pulvinar.<br /> <br />
                        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Aliquam orci lacus, tempor nec <br /> accumsan ac, luctus ut sem.</p>
                </div>
                <div className="col-md-6 row pt-0 mt-0" >
                    <div className="col-md-2"></div>
                    <div className="col-md-5">
                        <a href="#"> <Image src={marketp} className="img-fluid cardall" /> </a>
                        <a href="#"><Image src={datap} className="img-fluid ms-5 cardall cardp" /> </a>
                    </div>
                    <div className="col-md-5 mt-5 pt-3">
                        <a href="#"> <Image src={money} className="img-fluid cardall " /> </a>
                        <a href="#"> <Image src={secure} className="img-fluid lastcard mt-2 ms-5" /> </a>
                    </div>
                </div>


            </div>


        </div>
    )
};
export default ChoseUs;