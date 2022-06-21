import React from "react";
import ProductFilter from "./productfilterfunction";
import "./type.css";

function Child(){
    return(
        <div className="container salediv">
            <div className="row">
                <h3 className="ph3">Çocuk</h3>
                <hr className="hr"/>
                <ProductFilter type="Çocuk"/>
            </div>
        </div>
    );
}
export default Child;