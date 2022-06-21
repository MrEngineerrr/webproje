import React from "react";
import ProductFilter from "./productfilterfunction";
import "./type.css";

function Philosophy(){
    return(
        <div className="container salediv">
            <div className="row">
                <h3 className="ph3">Felsefe</h3>
                <hr className="hr"/>
                <ProductFilter type="Felsefe"/>
            </div>
        </div>
    );
}
export default Philosophy;