"use client";

import * as React from "react";
import { Suspense } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

const images = [
  "/assets/images/laptop2.jpg",
  "/assets/images/laptop3.jpg",
  "/assets/images/laptop4.jpg",
  "/assets/images/laptop5.jpg",
  "/assets/images/laptop6.jpg",
];

export function ProductDetailImageCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div>
      <div className="flex p-2">
        <div className="w-[80%]">
          <Carousel setApi={setApi} className="w-full max-w-xs">
            <CarouselContent>
              {/* DO MORE RESEARCH ON SUSPENSE API */}
              <Suspense fallback={<CarouselItem >
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6 h-[300px]">
                      <div>
                        <Skeleton className="w-full h-full"/>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>}>
              {images.map((imageSrc, index) => (
                <CarouselItem key={index + "image 111"}>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6 h-[300px]">
                      <div>
                        <Image
                          src={imageSrc}
                          alt="laptop"
                          width={400}
                          height={400}
                          key={index + "laptop"}
                          />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
              </Suspense>
            </CarouselContent>
            {/* <CarouselPrevious />
        <CarouselNext /> */}
          </Carousel>
        </div>
        <div className="flex flex-col justify-evenly w-[20%]">
          {
            images.map((imageSrc, index)=>{
              return <div key={index + "laptop image"}
              className="flex items-center justify-center w-[60px] h-[60px] border-gray-300 border p-1 rounded-sm"
              onClick={() => {
                api?.scrollTo(index);
              }}
            >
              <Image
                src={imageSrc}
                alt="laptop"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            })
          }

        </div>
      </div>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Image {current} of {count}
      </div>
    </div>
  );
}
