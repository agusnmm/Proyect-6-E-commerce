import React, { useState, useEffect } from 'react'
import { getAllItemsService } from '@/services/itemServices'

const Home = () => {
  const [itemsList, setItemsList] = useState([])

  const handleImageError = (e) => {
    const placeholderImage =
      'https://images.unsplash.com/random'
    e.target.src = placeholderImage
  }

  useEffect(() => {
    const fetchItemsData = async () => {
      try {
        const response = await getAllItemsService()
        if (response.status === 200) {
          setItemsList(response.data)
        }
      } catch (error) {
        console.log('Ocurrió un error en Home', error)
      }
    }
    fetchItemsData()
  }, [])

  return (
    <>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
        {itemsList.map((product) => (
          <div className='card' style={{ width: '18rem', margin: '10px' }} key={product.id}>
            <img
              className='card-img-top'
              style={{ maxHeight: '300px' }}
              src={product.image}
              onError={handleImageError}
              alt={product.product_name}
            />
            <div className='card-body'>
              <h5 className='card-title'>{product.product_name}</h5>
              <p className='card-text'>{product.description}</p>
              <a href='#' className='btn btn-primary'>
                Comprar
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
