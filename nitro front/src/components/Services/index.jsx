import "./index.scss";
import ServicesCards from '../ServicesCards';

const Services = () => {
  return (
    <>
    <section id='services'>
        <div className='services_container'>
            <div className='services_content'>
                <div className='services_title'>
                    <h2>Our Services</h2>
                </div>
                <ServicesCards/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Services