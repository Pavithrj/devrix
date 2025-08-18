import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Navbar />

            <div className="px-6 pt-10 mx-auto max-w-7xl">
                <Hero />

                <Feature />

                <Workflow />

                <Pricing />

                <Testimonials />

                <Footer />
            </div>
        </>
    )
};

export default App;
