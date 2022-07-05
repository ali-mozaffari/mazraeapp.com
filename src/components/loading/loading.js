import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../lotties/tractor.json';


const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="d-flex align-items-center" style={{height:'100vh'}}>
            <div className="align-content-center px-5">

                <Lottie
                    options={defaultOptions}
                />
                <p className="text-center mt-5 text-dark-blue" style={{fontWeight:'900'}}>
                    لطفا کمی منتظر باشید ...
                </p>

            </div>
        </div>
    );
};

export default Loading;
