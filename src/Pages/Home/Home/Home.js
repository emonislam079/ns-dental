import React from 'react';
import Bannar from '../Bannar/Bannar';
import DoctorsDatas from '../DoctorSliceData/DoctorsDatas';
import SliceDatas from '../SliceData/SliceDatas';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <SliceDatas></SliceDatas>
            <DoctorsDatas></DoctorsDatas>
        </div>
    );
};

export default Home;