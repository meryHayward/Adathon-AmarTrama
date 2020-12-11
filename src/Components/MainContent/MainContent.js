import React from "react";
import './MainContent.scss';
import Header from "../Header/Header";
import Search from "../Search/Search";

const MainContent = () => {
    return (
        <React.Fragment>
            <Header />
            <Search />
        </React.Fragment>
    )
};

export default MainContent;
