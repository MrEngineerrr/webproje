import React from "react";
import * as PRD from "./product.jsx";
import "./mainpage.css";
function Mainpage() {
    return (
        <div>
            <div className="container mlr-0 divFrame">
                <div className="row">
                    <img className="mainpageimg" src={require("./images/books.png")} alt="" /> 
                </div>
                <div className="row">
                    <a className="mar-pad-0 underLineNone productFrames  pFBG1" href="/child">
                        <div className="categorysframe fitContent margin-auto">
                            <img className="categorys" src={require("./images/children.png")} alt="" />
                        </div>
                        <div className="mpdiv fitContent">
                            <p>Çocuk</p>
                        </div>
                    </a>
                    <a className="mar-pad-0 underLineNone productFrames pFBG2" href="/culture">
                        <div className="categorysframe fitContent margin-auto">
                            <img className="categorys" src={require("./images/culture.png")} alt="" />
                        </div>
                        <div className="mpdiv fitContent">
                            <p>Kültür</p>
                        </div>
                    </a>
                    <a className="mar-pad-0 underLineNone productFrames pFBG3" href="/history">
                        <div className="categorysframe fitContent margin-auto">
                            <img className="categorys" src={require("./images/history.png")} alt="" />
                        </div>
                        <div className="mpdiv fitContent">
                            <p>Tarih</p>
                        </div>
                    </a>
                    <a className="mar-pad-0 underLineNone productFrames pFBG4" href="/literature">
                        <div className="categorysframe fitContent margin-auto">
                            <img className="categorys" src={require("./images/literature.png")} alt="" />
                        </div>
                        <div className="mpdiv fitContent">
                            <p>Edebiyat</p>
                        </div>
                    </a>
                    <a className="mar-pad-0 underLineNone productFrames pFBG5" href="/philosophy">
                        <div className="categorysframe fitContent margin-auto">
                            <img className="categorys" src={require("./images/philosophy.png")} alt="" />
                        </div>
                        <div className="mpdiv fitContent">
                            <p>Felsefe</p>
                        </div>
                    </a>
                    <a className="mar-pad-0 underLineNone productFrames pFBG6" href="/psychology">
                        <div className="categorysframe fitContent margin-auto imgs">
                            <img className="categorys" src={require("./images/psychology.png")} alt="" />
                        </div>
                        <div className="mpdiv fitContent">
                            <p>Psikoloji</p>
                        </div>
                    </a>
                    <a className="mar-pad-0 underLineNone productFrames pFBG7" href="/self-improvement">
                        <div className="categorysframe fitContent margin-auto">
                            <img className="categorys" src={require("./images/self-improvement.png")} alt="" />
                        </div>
                        <div className="mpdiv fitContent">
                            <p>Kişisel Gelişim</p>
                        </div>
                    </a>
                    <a className="mar-pad-0 underLineNone productFrames pFBG8" href="/law-book">
                        <div className="categorysframe fitContent margin-auto">
                            <img className="categorys" src={require("./images/law-book.png")} alt="" />
                        </div>
                        <div className="mpdiv fitContent">
                            <p>Hukuk</p>
                        </div>
                    </a>
                </div>
            </div>
            <div className="container prodiv">
                <div className="row">
                    <h3 className="protitle">En çok görüntülenen ürünler</h3>
                </div>
                <div className="row">
                    {PRD.MVProducts()}
                </div>
            </div>
        </div>
    );
}
export default Mainpage;