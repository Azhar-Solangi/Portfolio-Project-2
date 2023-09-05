import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './sell.css';
import Image from "next/image";
import spheare from '../../assets/images/Sphear-Create.svg';
import wallet from '../../assets/images/wallet-one.svg';
import create from '../../assets/images/create1.svg';
import add from '../../assets/images/addnft.svg';
import theme from '../../assets/images/theme1.svg'
import row from '../../assets/images/rowg.svg'



const CreateSell = () => {


    return (

        <div>

            <div className="createSellBg mb-0">
                <div className="row px-5 mx-0"> <div className="sphearimg"> <Image src={spheare} className="img-fluid" /> <h1 className="pb-5 mb-5 createtext">Create And Sell Your NFTs</h1></div>
                    <div className="col-md-3">
                        <Image src={wallet} className="img-fluid pb-3" />
                        <h4 className="popintxt">Set Up Your Wallet</h4>
                        <p className="pt-3 intertxt">Once you’ve set up your <br /> wallet of choice, connect it <br /> to OpenSea by clicking the <br /> wallet icon in the top right <br /> corner. Learn about the <br /> wallets we support.</p>
                    </div>
                    <div className="col-md-3">
                        <Image src={create} className="img-fluid pb-3" />
                        <h4 className="popintxt">Create Your Collection</h4>
                        <p className="pt-3 intertxt">Click My Collections and <br /> set up your collection. Add <br /> social links, a description, <br /> profile & banner images, <br /> and set a secondary sales <br /> fee.</p>
                    </div>
                    <div className="col-md-3">
                        <Image src={add} className="img-fluid pb-3" />
                        <h4 className="popintxt">Add Your NFTs</h4>
                        <p className="pt-3 intertxt">Upload your work (image, <br /> video, audio, or 3D art),<br /> add a title and description, <br /> and customize your NFTs <br /> with properties, stats, and <br /> unlockable content.</p>
                    </div>
                    <div className="col-md-3">
                        <Image src={theme} className="img-fluid pb-3" />
                        <h4 className="popintxt">List Them For Sale</h4>
                        <p className="pt-3 intertxt">Choose between auctions,<br /> fixed-price listings, and <br /> declining-price listings. You <br /> choose how you want to <br /> sell your NFTs, and we help <br /> you sell them!</p>
                    </div>
                </div >
                <Image src={row} className="img-fluid my-5 py-5" />
                <div className="row py-5  mx-0">
                    <div className="col-md-4"></div>
                    <div className="text-ready text-white col-md-4">
                        <h1 className="intertxt">Ready for Next NFT Drop?</h1>
                        <div className="emailDiv mt-5 popintxt"> youremail@xyz.com</div>
                        <a href="#"><button className="px-4 py-2 mt-4 emaiBtn mb-5 popintxt">Send Email</button> </a>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    )
};
export default CreateSell;