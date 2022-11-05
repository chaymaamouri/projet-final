import React, { useState } from "react"
import ProductCard from "./ProductCard";
import products from "../data/products";
export default function  Products ({products}){
  return (
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'50px'}}>
    {products.map(product=><ProductCard {...product}/>) }
    </div>

  );
};

