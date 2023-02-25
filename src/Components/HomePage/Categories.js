import './Categories.css';
import './Searchbar.css';

import c1 from '../images/Categories/c1.jpg'
import c2 from '../images/Categories/c2.webp'
import c3 from '../images/Categories/c3.webp'
import c4 from '../images/Categories/c4.png'
import c5 from '../images/Categories/c5.webp'

import { useState, useEffect } from 'react'
import axios from 'axios'

import M from "materialize-css/dist/js/materialize.min.js";

const Categories = ({ username1 }) => {




    const searchByCategory = (type) => {
        const url = `http://localhost:9999/ms1/products/${type}`;
        axios.get(url).then(res => {

            setProducts(res.data)


        }).catch(err => M.toast({ html: 'Products Not Found!', classes: "red" }));
    }


    const [products, setProducts] = useState([]);
    const url = 'http://localhost:9999/ms1/products';
    useEffect(() => {
        axios.get(url).then(res => {
            setProducts(res.data);

        })
    }, []);

    const searchall = () => {
        const url = 'http://localhost:9999/ms1/products';
        axios.get(url).then(res => {
            setProducts(res.data);

        })

    }



    const addToCart = (p) => {
        let data = p
        console.log(username1)
        console.log(p)

        fetch(`http://localhost:9092/ms2/customerup/${username1}`, {

            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(response => response.json())
            .then(json => { M.toast({ html: 'Product added to cart', classes: "green" }) })


    }
    const sayhi = () => {
        alert("hi add")
    }

    const [phrase, setPhrase] = useState("")

    const search = () => {
        const url = `http://localhost:9999/ms1/search/${phrase}`;
        axios.get(url).then(res => {
            if (res.data) {

                setProducts(res.data)
                if (products.length < 1) {
                    M.toast({ html: 'Products Not Found!', classes: "red" })


                }

            }





        }).catch(err => M.toast({ html: 'Products Not Found!', classes: "red" }));

    }


    return (
        <div>
            <div class="row" id="categoriesbox">
                {/* <h4>shop by category</h4> */}
                <div class="col s2" id="cardmargins">
                    <img id="imagesizing" src={c1} onClick={() => searchByCategory("Dairy")} />
                    <h5>Dairy</h5>
                </div>
                <div class="col s2" id="cardmargins">
                    <img id="imagesizing" src={c2} onClick={() => searchByCategory("veggies")} />
                    <h5>Vegetables</h5>
                </div>
                <div class="col s2" id="cardmargins">
                    <img id="imagesizing" src={c3} onClick={() => searchByCategory("fruits")} />
                    <h5>Fruits</h5>
                </div>
                <div class="col s2" id="cardmargins">
                    <img id="imagesizing" src={c4} onClick={() => searchByCategory("Cookies")} />
                    <h5>Cookies</h5>
                </div>
                <div class="col s2" id="cardmargins">
                    <img id="imagesizing" src={c5} onClick={() => searchByCategory("Cleaning")} />
                    <h5>Cleaning</h5>
                </div>
            </div>
            <div id="search-box-align">

                <ul>
                    <li><div id="search-form-all1">
                        <input type="search" id="query" name="q" placeholder='Search by brand,name,category' onChange={e => setPhrase(e.target.value)}></input>
                        <button id="search-button" onClick={() => { search() }}> <i class="material-icons">search</i></button>
                    </div>

                    </li>
                    <li>
                        {/* <button class="btn" id="search-form-all">All Products</button> */}
                        <div id="search-form-all2">

                            <button class='btn' id="query-all" onClick={() => searchall()}>All Products</button>
                        </div></li>

                </ul>


            </div>








            {products.map(p => <div id="mycard">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" id="mycardimg" src={p.productImageURL
                        } />
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4"><h6>{p.productName}</h6><i class="material-icons right">more_vert</i></span>
                        <h6 id="price">₹{p.productPrice}</h6>
                    </div>
                    <div class="card-action text-black">
                        {/* <a><span id="text1" onClick={() => {addToCart()}}> Buy<i class="material-icons " id="icon">shopping_basket</i></span></a> */}

                        {/* <a href="#">Add to cart</a> */}
                        <a onClick={() => addToCart(p)}><span id="textadd">Add to Cart<i class="material-icons" id="icon" >shopping_cart</i> </span></a>

                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4" id="price">{p.productName}<i class="material-icons right">close</i></span>
                        <p><ul>
                            <li><h6 id="price">Price : ₹{p.productPrice}</h6></li>
                            <li><h6 id="price">Brand : {p.productBrand}</h6></li>
                            <li><h6 id="price">Category : {p.productCategory}</h6></li>

                        </ul></p>
                    </div>
                </div>

            </div>)}



        </div>
    );
}

export default Categories;