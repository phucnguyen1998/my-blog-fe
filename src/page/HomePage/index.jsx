import React from 'react';
import ListPost from '../ListPost';
import Header from './../../Component/Header';

function Home(props) {
    return (
        <>
            <Header
                heading={"Clean Blog"}
                subHeading={"A Blog Theme by Start Bootstrap"}
                backgroundImage={'img/home-bg.jpg'}
            />
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <ListPost />
                        {/* <!-- Pager --> */}
                        <div className="clearfix">
                            <button className="btn btn-primary float-right" href="#">Older Posts &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;