import React from "react";
import productss from "../Lists/products";
import { useState } from "react";

function Form() {
    const [productName, setproductName] = useState();
    const [productPrice, setproductPrice] = useState();
    const [value, setValue] = useState();
    const [productAbout, setproductAbout] = useState();

    function handleSubmit() {
        if (JSON.parse(localStorage.getItem("productlist")) === null) {
            localStorage.setItem("productlist", JSON.stringify(productss));
        }
        if (JSON.parse(localStorage.getItem("LogCheck"))) {
            if (value ===undefined) { alert("Lütfen Seçim Yapınız") }
            else {
                var products = JSON.parse(localStorage.getItem("productlist"));
                products[products.length] = { id: products.length, title: productName, about: productAbout, price: productPrice, type: value, counter: 0, img: "https://i.hizliresim.com/79pomi3.png", dealerid: JSON.parse(localStorage.getItem("id")) }
                localStorage.setItem("productlist", JSON.stringify(products));
                window.location.href = "http://www.w3schools.com";

            }
        }
        else {
            alert("Lütfen Giriş Yapınız")
        }

    }
    return (
        <form class="form-group dplex" onSubmit={handleSubmit} >
            <label for="usr">Ürün Adı:</label>
            <input onChange={(event) => setproductName(event.target.value)} type="text" class="form-control" id="usr" />
            <label for="pwd">Ürün Fiyatı:</label>
            <input onChange={(event) => setproductPrice(event.target.value)} type="text" class="form-control" id="usr" />
            <label for="sel1">Ürün Türü:</label>
            <select onChange={(event) => setValue(event.target.value)} class="form-control" id="sel1">
                <option></option>
                <option value="Çocuk" >Çocuk</option>
                <option value="Kültür">Kültür</option>
                <option value="Tarih">Tarih</option>
                <option value="Edebiyat">Edebiyat</option>
                <option value="Felsefe">Felsefe</option>
                <option value="Psikoloji">Psikoloji</option>
                <option value="Kişisel Gelişim">Kişisel Gelişim</option>
                <option value="Hukuk">Hukuk</option>
            </select>
            <label for="comment">Açıklama:</label>
            <textarea onChange={(event) => setproductAbout(event.target.value)} class="form-control" rows="5" id="comment"></textarea>
            <input class="gndrbt" type="submit" />
        </form>
    );
}

export default Form;