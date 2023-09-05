import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './footer.css';
import Image from "next/image";
import flogo from '../../assets/images/logo.svg';
import socialLinks from '../../assets/images/social-all.svg';




const Footer = () => {
    return (
        <div>
            <div className="copright mt-0 ">
                <div className="row pt-2 pb-2 mx-0">
                    <div className="col-md-6 text-white  ">
                        <div className="alignItems"> <Image src={flogo} className="img-fluid logow" /></div>
                        <div className="alignItems ps-5 intertxt"> <h4>Amazing NFTs marketplace, Authentic and unique <br />
                            digital creation.</h4></div> <br />
                        <a href="#" className="centr ps-5">  <Image src={socialLinks} className="img-fluid pb-5 centr" /> </a>
                    </div>
                    <div className="col-md-6 row mt-5 features intertxt">
                        <div className="col-md-4 text-white ">
                            <h4>Marketplace</h4> <br />
                            <p>Explore <br /> <br />NFTs <br /> <br />Collectibles <br /><br />Virtual Reality</p>
                        </div>
                        <div className="col-md-4 text-white ">
                            <h4>Resources</h4> <br />
                            <p>Help Center <br /> <br />Partners<br /> <br />Blog<br /><br />Newsletter</p>
                        </div>
                        <div className="col-md-4 text-white">
                            <h4>Company</h4> <br />
                            <p>About Us <br /> <br />Careers <br /> <br />Support <br /><br />Newsletter</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row copright1 py-3 mx-0 ">
                <div className="col-md-6 ps-5 copyright intertxt">
                    <p className=" " >Copyright 2022 sapphire, All right reserved.</p>
                </div>
                <div className="col-md-6 row policy intertxt">
                    <div className="col-md-4"></div>
                    <div className="col-md-4"> <p>Privacy Policy</p> </div>
                    <div className="col-md-4 terms"> <p>Terms & Conditions</p> </div>
                </div>
            </div>
        </div >


    )
};
export default Footer;
