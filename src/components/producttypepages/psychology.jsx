import React from "react";
import ProductFilter from "./productfilterfunction";
import "./type.css";

function Psychology(){
    return(
        <div className="container salediv">
            <div className="row">
                <h3 className="ph3">Psikoloji</h3>
                <hr className="hr"/>
                <ProductFilter type="Psikoloji"/>
            </div>
        </div>
    );
}
export default Psychology;