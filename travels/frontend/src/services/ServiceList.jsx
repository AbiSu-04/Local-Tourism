import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Weather`,
      desc: `Get to know more about the weather.`,
   },
   {
      imgUrl: guideImg,
      title: `Tour Guide`,
      desc: `Our top rated tour giudes`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `Choose the locations you want to visit.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList