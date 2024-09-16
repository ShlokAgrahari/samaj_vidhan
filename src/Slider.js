import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "react-multi-carousel/lib/styles.css";
import './slider.css'

const Slider = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    

    const data=["banner-img3.jpg",
        "G20.png",
        "juGajmc1gOVBUtt5.jpg",
        "Manas_banner_english.jpg"
    ]
  return (
    <div>
        <Carousel
        className='carousel'
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={true}
        showDots={false}
        animation='slide'
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        centerMode={true}
        navButtonsProps={{
            style:{
                color:"#49494"
            }
        }}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        >
              {
                data.map((image,i)=>{
                    return(
                        <>
                        <img src={image}/>
                        </>
                    )
                })
              }
        </Carousel>
    </div>
  )
}

export default Slider