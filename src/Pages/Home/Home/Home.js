import React from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import HomeProduct from '../HomeProduct/HomeProduct';
import Collection from '../Collection/Collection';
import './Home.css'
import WareHouseSystem from '../WareHouseSystem/WareHouseSystem';
const Home = () => {
    return (
        <>
            <PageTitle title="Home"></PageTitle>
            <Banner></Banner>
            <Collection></Collection>
            <HomeProduct></HomeProduct>
            <WareHouseSystem></WareHouseSystem>
        </>
    );
};

export default Home;