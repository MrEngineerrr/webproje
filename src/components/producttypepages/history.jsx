import React from "react";
import ProductFilter from "./productfilterfunction";
import "./type.css";

function History(){
    return(
        <div className="container salediv">
            <div className="row">
                <h3 className="ph3">Tarih</h3>
                <hr className="hr"/>
                <ProductFilter type="Tarih"/>
            </div>
        </div>
    );
}
export default History;