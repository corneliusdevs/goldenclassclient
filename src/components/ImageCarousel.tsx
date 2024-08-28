import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Image from "next/image"

interface ImageCarouselProps {
  imageUrls: string[]
}


export function ImageCarousel({imageUrls}:ImageCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {imageUrls.map((imageSrc, index) => (
          <CarouselItem key={"imageiii" + index} className="">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div>
                    <Image src={imageSrc} alt="laptop" width={300} height={300} key={index + "laptop"} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}

export default ImageCarousel
