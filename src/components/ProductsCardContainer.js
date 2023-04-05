import { useState } from 'react'
import ProductCard from './ProductsCard'
import Modal from './Modal'

function ProductsCardContainer () {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className='flex flex-row justify-center bg-white border border-gray-200 shadow bg sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
      <ProductCard
        name='Copiloto'
        price='1,500'
        psy={null}
        setShowModal={setShowModal}
      />
      <ProductCard
        name='Copiloto + Terapia quincenal'
        price='3,000'
        psy='2 / mes'
        setShowModal={setShowModal}
      />
      <ProductCard
        name='Copiloto + Terapia semanal'
        price='4,500'
        psy='4 / mes'
        setShowModal={setShowModal}
      />
      {
        showModal &&
          <Modal
            setShowModal={setShowModal}
          />
      }
    </div>

  )
}

export default ProductsCardContainer
