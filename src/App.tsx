import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductCategoryCard from './components/ProductCategoryCard'
import ProductDetail from './components/ProductDetail'
import ProductList from './components/ProductList'
import { categories } from './data/categories'

function App() {
  const pathSegments = window.location.pathname
    .split('/')
    .filter(Boolean)
    .map((segment) => decodeURIComponent(segment))
  const isProductRoute = pathSegments[0] === 'products'

  return (
    <>
      <Navbar />
      {isProductRoute ? (
        <main>
          {pathSegments.length === 2 ? (
            <ProductList categoryId={pathSegments[1]} />
          ) : pathSegments.length === 3 ? (
            <ProductDetail
              categoryId={pathSegments[1]}
              productId={pathSegments[2]}
            />
          ) : (
            <ProductList />
          )}
        </main>
      ) : (
        <main>
          <Hero />
          <section className="section product-categories" id="products">
            <div className="page-container">
              <div className="section-heading">
                <span className="eyebrow">GOSAVE Products</span>
                <h2>Safety &amp; Industrial Products</h2>
                <p>
                  Temukan berbagai kebutuhan safety equipment dan industrial
                  products untuk mendukung pekerjaan yang lebih aman.
                </p>
              </div>
              <div className="category-grid">
                {categories.map((category) => (
                  <ProductCategoryCard
                    key={category.id}
                    category={category}
                  />
                ))}
              </div>
            </div>
          </section>
          <section
            className="section placeholder-section placeholder-section-muted"
            id="about"
          >
            <div className="page-container section-heading">
              <span className="eyebrow">CV. Senia Mandiri Jaya</span>
              <h2>About Us</h2>
              <p>
                Learn more about our company and how we support safer
                workplaces in a later step.
              </p>
            </div>
          </section>
          <section className="section placeholder-section" id="contact">
            <div className="page-container section-heading">
              <span className="eyebrow">Get in touch</span>
              <h2>Contact</h2>
              <p>
                Contact details and enquiry options will be added in a later
                step.
              </p>
            </div>
          </section>
        </main>
      )}
      <Footer />
    </>
  )
}

export default App
