import React from "react";
import './MainContent.scss';
import Header from "../Header/Header";
import Search from "../Search/Search";
import Button from "../Button/Button";

const MainContent = () => {
    return (
        <React.Fragment>
            <Header />
            <Search />
            <Button />
        </React.Fragment>
    )
};

export default MainContent;
