import Nav from '../component/CommunityNav';
import communityCss from '../css/Community.module.css';
import Card from '../component/Card';
import data from "../data.js"
import { useState } from "react";

function Community() {
  const [products, setProducts] = useState(data);
  return(
    <div>
      <Nav />
      <section>
        <div className={communityCss.wrapper}>
          {
            products.map((product, index) =>{
            return(
              <Card product = {product} index = {index}/> 
            )})
          }
        </div>
      </section>
    </div>
  )
}

export default Community;