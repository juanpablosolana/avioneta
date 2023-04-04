import ProductCard from './ProductsCard'

function ProductsCardContainer () {
  return (
    <div className='flex flex-row justify-center bg-white border border-gray-200 shadow bg sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
      <ProductCard
        name='Copiloto'
        price='1,500'
        psy={null}
      />
      <ProductCard
        name='Copiloto + Terapia quincenal'
        price='3,000'
        psy='2 / mes'
      />
      <ProductCard
        name='Copiloto + Terapia semanal'
        price='4,500'
        psy='4 / mes'
      />
    </div>
  )
}

export default ProductsCardContainer
