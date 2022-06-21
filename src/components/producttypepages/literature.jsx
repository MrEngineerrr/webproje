import React from "react";
import ProductFilter from "./productfilterfunction";
import "./type.css";

function Lİterature(){
    return(
        <div className="container salediv">
            <div className="row">
                <h3 className="ph3">Edebiyat</h3>
                <hr className="hr"/>
                <ProductFilter type="Edebiyat"/>
            </div>
        </div>
    );
}
export default Lİterature;