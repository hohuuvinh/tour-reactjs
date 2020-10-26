import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import TopItem from './TopItem';
// import GoodItem from './GoodItem';
import ToturialItem from './ToturialItem';
import LocationItem from './LocationItem';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <Header />
                    {/* --------------- */}
                    <Banner />
                    {/* ---------------------- */}
                    <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n  .card-text{\n    font-size: 14px;\n  }\n" }} />
                    <TopItem />
                    {/* <GoodItem /> */}
                    <div className="container">
                        <ToturialItem />
                    </div>
                    <div className="container mt-3 mb-5">
                        <LocationItem />
                    </div>
                </div>
            </div>
        )
    }
}
