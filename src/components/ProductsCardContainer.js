import { useState } from 'react'
import ProductCard from './ProductsCard'
import Modal from './Modal'

function ProductsCardContainer () {
  const [showModal, setShowModal] = useState(false)
  const [productData, setProductData] = useState({
    name: '',
    price: ''
  })

  return (
    <div className='flex flex-col justify-center bg-white border border-gray-200 shadow sm:flex-row bg sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
      <ProductCard
        name='Copiloto'
        price='1,500'
        psy={null}
        setShowModal={setShowModal}
        setProductData={setProductData}
      />
      <ProductCard
        name='Copiloto + Terapia quincenal'
        price='3,000'
        psy='2 / mes'
        setShowModal={setShowModal}
        setProductData={setProductData}
      />
      <ProductCard
        name='Copiloto + Terapia semanal'
        price='4,500'
        psy='4 / mes'
        setShowModal={setShowModal}
        setProductData={setProductData}
      />
      {
        showModal &&
          <Modal
            setShowModal={setShowModal}
            productData={productData}
          />
      }
    </div>

  )
}

export default ProductsCardContainer
