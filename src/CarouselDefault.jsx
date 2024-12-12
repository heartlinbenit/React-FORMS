import { Carousel } from "@material-tailwind/react";
import React from "react";
import './swipper.css'
export function CarouselDefault() {
    return (
        // <div className="flex justify-center items-center">
        //     <Carousel className="rounded-xl w-30 h-40">
        //         <img
        //             src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        //             alt="image 1"
        //             className="h-full w-full object-cover"
        //         />
        //         <img
        //             src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        //             alt="image 2"
        //             className="h-full w-full object-cover"
        //         />
        //         <img
        //             src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        //             alt="image 3"
        //             className="h-full w-full object-cover"
        //         />
        //     </Carousel>
        // </div>


        <>

            <main>
                <swiper-container style={
                    {
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff"
                    }
                }
                    pagination-clickable="true"
                    navigation="true"
                    className="mySwiper">
                    <swiper-slide >
                        <img src="download.jpg" alt="" />
                    </swiper-slide>

                    <swiper-slide >
                        <img src="download.jpg" alt="" />
                    </swiper-slide>

                    <swiper-slide >
                        <img src="download.jpg" alt="" />
                    </swiper-slide>

                    <swiper-slide >
                        <img src="download.jpg" alt="" />
                    </swiper-slide>

                    <swiper-slide >
                        <img src="download.jpg" alt="" />
                    </swiper-slide>
                </swiper-container>
            </main>
        </>
    );
}
