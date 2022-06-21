import React from "react";
import ProductFilter from "./productfilterfunction";
import "./type.css";

function LawBook(){
    return(
        <div className="container salediv">
            <div className="row">
                <h3 className="ph3">Hukuk</h3>
                <hr className="hr"/>
                <ProductFilter type="Hukuk"/>
            </div>
        </div>
    );
}
export default LawBook;