import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import {setProducts} from '../redux/actions/productActions'
const ProductListing = () =>{

const state = useSelector(state => state);

const dispatch = useDispatch()

const fetchProducts = async () => {
  const response = await axios
  .get('https://fakestoreapi.com/products')
  .catch(err=>console.log(err))

   console.log(response.data)

  dispatch(setProducts(response.data))

}

useEffect(() => {
  fetchProducts()
}, [])

console.log('state',state)

  return(
    <div className="ui grid container">
        <ProductComponent/>
    </div>
  )
}

export default ProductListing