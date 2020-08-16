import React, {lazy, Suspense} from "react";
import ShimmerCard from "../component/Card/shimmer";
import './styles.scss';

const Card = lazy(() => import('../component/Card'));

const Home = () => {
    return (
        <div className="content-home">
            <Suspense fallback={<ShimmerCard/>}>
                <Card/>
            </Suspense>
        </div>
    )
}

export default Home