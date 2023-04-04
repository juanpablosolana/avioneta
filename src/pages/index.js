import SEOHead from '@/components/SEOHead'
import Header from '@/components/Header'
import HomePage from '@/components/HomePage'
import ProductsCardContainer from '@/components/ProductsCardContainer'

export default function Home () {
  return (
    <>
      <SEOHead
        title='Inicio'
        description='Mejora tu relación con el alcohol a partir de hoy. Descubre nuestra suscripción mensual para aprender a moderar tu consumo de alcohol o a sacarlo por completo de tu vida.'
        keywords='Avioneta, Alcohol, Rehabilitación'
      />
      <Header />
      <HomePage />
      <ProductsCardContainer />
    </>
  )
}
