import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './HomePage.css'
import logoimg from "../../assets/images/logo.svg";
import Image from "next/image";
import handpic from '../../assets/images/firstCardPic.svg';
import herobgpic from '../../assets/images/bg gradient.svg';
import video from '../../assets/images/icon-video.svg';
import toggler from '../../assets/images/toggler.svg';


const HomePage1 = () => {




  return (

    <div>

      <div className="herobg ">
        <div className="row radiusbg mx-0 position-relative ">
          <Image src={herobgpic} className="img-fluid imgaeSize position-absolute top-0 start-0" />
          <nav class="navbar navbar-expand-lg nav-bg py-2 ">
            <div class="container-fluid  ">
              <Image src={logoimg} className="" />
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="true" aria-label="Toggle navigation">
                <span class=""><Image src={toggler} className="img-fluid" /> </span>
              </button>
              <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll bs-scroll-height:100px meuesNav">
                  <li class="nav-item">
                    <a class="nav-link active text-white" aria-current="page" href="#">MARKETPLACE</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">ABOUT</a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      RESOURCES</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled text-white" aria-disabled="true">FAQ</a>
                  </li>
                </ul>
                <div className="btn-div">
                 <span className="btnsg"> <button className="nav-btn">Log In</button> </span>
                  <button className="nav-btn">Sign Up</button>
                </div>
              </div>
            </div>
          </nav>

          <div className="col-md-6 text-white ps-4  calmtxtDiv">
            <h1 className="calmtxt">Keep Calm & <br /> Collect Your NFTs.</h1> <br />
            <p className=""> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci lacus, tempor nec <br /> accumsan ac, luctus ut sem. Mauris pretium lacus eget vulputate rhoncus. Vivamus <br /> egestas, orci eu lobortis pulvinar.</p> <br />

            <div className=" d-flex mt-4  videoDiv">
              <Image src={video} className="img-fluid" />
              <div> <h5><b>Let’s get started!</b> </h5>
                <p>Watch this quick  demo video to see <br /> how to get started.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Image src={handpic} className="img-fluid heroImage" />
          </div>
        </div>
      </div>



    </div>



  )
}
export default HomePage1;
