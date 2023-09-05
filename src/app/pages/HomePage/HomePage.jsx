// import CreateSell from "@/app/components/createAndSell/Create-Sell";
import NftsColection from "@/app/components/NftColections/NftColection";
import ChoseUs from "@/app/components/chooseUs/ChoseUs";
import CreateSell from "@/app/components/createAndSell/Create-Sell";
import Footer from "@/app/components/footer/footer";
import MapeLocation from "@/app/components/mapeSection/mape";
import HomePage1 from "@/app/components/navBar/HomePage";
import React from "react";





const HomePage =()=>{

    return(
        <>
        <HomePage1 />
        <MapeLocation/>
        <NftsColection/>
        <ChoseUs/>
        <CreateSell />
        <Footer />
        </>
    )
};

export default HomePage;