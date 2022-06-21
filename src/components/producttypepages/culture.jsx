import React from "react";
import ProductFilter from "./productfilterfunction";
import "./type.css";

function Culture(){
    return(
        <div className="container salediv">
            <div className="row">
                <h3 className="ph3">Kültür</h3>
                <hr className="hr"/>
                <ProductFilter type="Kültür"/>
            </div>
        </div>
    );
}
export default Culture;