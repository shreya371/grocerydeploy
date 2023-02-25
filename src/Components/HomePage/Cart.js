import gs7 from '../images/Categories/c1.jpg'
import './Cart.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import M from "materialize-css/dist/js/materialize.min.js";
const Cart = ({ username1 }) => {

    // const cartProductDelete = () => {
    //     alert("function to dlelete the product from cart")
    // }
    const cartProductDelete = (p) => {
        let data = p
        console.log(username1)
        console.log(p)

        fetch(`http://localhost:9092/ms2/cartdelete/${username1}`, {

            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then(response => response.json())
            .then(json => {
                M.toast({ html: 'Product deleted from cart', classes: "red" })

                const url = `http://localhost:9999/ms2/cart/${username1}`;
                axios.get(url).then(res => {
                    let c1 = res.data
                    if (res.data) {
                        if (res.data)
                            setCart(res.data);
                    }
                    else {
                        M.toast({ html: 'Cart Empty', classes: "red" })
                    }


                })
            })


    }

    // const getCart=()=>{
    //     const url = `http://localhost:9999/ms2/cart/${username1}`;
    //     axios.get(url).then(res => {
    //         let c1 = res.data
    //         if (res.data) {
    //             setCart(res.data);
    //         }
    //         else {
    //             M.toast({ html: 'Cart Empty', classes: "red" })
    //         }


    //     })

    // }





    //------------------------displaying cart products---------------------
    const [cart, setCart] = useState([]);
    const url = ` http://localhost:9999/ms2/cart/${username1}`;
    useEffect(() => {
        axios.get(url).then(res => {
            let c1 = res.data

            if (res.data) {
                setCart(res.data);
            }
            else {
                M.toast({ html: 'Cart Empty', classes: "red" })
            }


        })
    }, []);

    //-------------------------------------------------------------------

    const [cartTotal, setCartTotal] = useState(0.0)
    const getCartTotal = (username1) => {
        axios.get(`http://localhost:9999/ms2/total/${username1}`).then(res => {
            let c1 = res.data
            if (res.data) {
                setCartTotal(res.data)
                console.log(res.data)
                setCartSummaryLink(true)

            }
            else {
                M.toast({ html: 'Cart Empty', classes: "red" })
            }


        })

    }

    const [cartSummaryLink, setCartSummaryLink] = useState(false)

    return (<div class="home">
        <h2 id="mycart">My Cart</h2>
        {/* <div class="col s12 m7">

            <div class="card horizontal" id="cart">
                <div class="card-image">
                    <img id="cartimagesizing" src={gs7} />
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <p>Product name <p id="delete" onClick={() => { cartProductDelete() }}><i class="material-icons small" id="deleteicon">delete</i> </p></p>
                        <p>Quantity:1 </p>
                        <p>Rs.50/- </p>

                    </div>
                    <div class="card-action">

                        <p id="delete">Total : Rs.50/-</p>
                    </div>
                </div>
            </div>
        </div> */}
        {cart.map(p => <div class="col s12 m7">

            <div class="card horizontal" id="cart">
                <div class="card-image">
                    <img id="cartimagesizing" src={p.productImageURL} />
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <h6 id="price">{p.productName} <p id="delete" onClick={() => { cartProductDelete(p) }}><i class="material-icons small" id="deleteicon">delete</i> </p></h6>
                        <p id="price">Quantity : {p.productQuantity}</p>
                        <p id="price">₹{p.productPrice}</p>

                    </div>
                    <div class="card-action">

                        <h6 id="delete">Total : ₹{p.productPrice}</h6>
                    </div>
                </div>
            </div>
        </div>)}

        <div><button class="btn large" onClick={() => { getCartTotal(username1) }} id="summaryBtn">Cart Summary</button>
        </div>

        {cart.map(p => <div class="col s12 m7">



        </div>)}


        {cartSummaryLink &&
            <div class="col s12 m7">
                <div class="card horizontal" id="cart">
                    <table class="highlight">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>

                            {cart.map(p =>
                                <tr>
                                    <td>{p.productName}</td>
                                    <td>{p.productQuantity}</td>
                                    <td>₹{p.productPrice}</td>
                                    <td>₹{p.productPrice}</td>
                                </tr>
                            )}
                            <tr >
                                <td></td>
                                <td></td>
                                <th>Grand Total</th>
                                <th>₹{cartTotal}</th>
                            </tr>


                        </tbody>
                    </table>

                </div>
            </div>
        }




    </div>);
}

export default Cart;