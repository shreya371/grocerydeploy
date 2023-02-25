import { useState } from 'react';
import './Searchbar.css'
import M from "materialize-css/dist/js/materialize.min.js";
import axios from 'axios';
const Searchbar = () => {
    const [phrase, setPhrase] = useState("")

    const search = () => {
        const url = `http://localhost:9999/ms1/search/${phrase}`;
        axios.get(url).then(res => {
            console.log(res.data)

            // setProducts(res.data)


        }).catch(err => M.toast({ html: 'Products Not Found!', classes: "red" }));
        alert("clicked search")
    }
    return (<div>

        <div id="search-form">
            <input type="search" id="query" name="q" placeholder='Search by brand' onChange={e => setPhrase(e.target.value)}></input>
            <button id="search-button" onClick={() => { search() }}> <i class="material-icons">search</i></button>
        </div>



    </div>);
}

export default Searchbar;