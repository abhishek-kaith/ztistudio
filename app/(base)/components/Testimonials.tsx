'use client'
import * as React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel'
import Section from '@/components/Section'
import { testimonials } from '@/data/testimonials'
import Image from 'next/image'

export default function Testimonials() {
    return (
        <Section backgroundType="secondary" fullWidth>
            <div>
                <h4 className="text-xl uppercase tracking-widest text-center font-semibold bg-clip-text text-transparent bg-grt">
                    What Our Customers Say
                </h4>
            </div>
            <Carousel
                className="w-full"
                opts={{
                    align: 'center',
                    inViewThreshold: 0.5,
                }}
            >
                <CarouselContent className="">
                    {testimonials.map((t, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-[90%] md:basis-[38%] lg:basis-[29%]"
                        >
                            <div className="space-y-3 scale-95">
                                <div className="rounded relative space-y-3 p-[3px]  bg-grt">
                                    <div className="flex flex-col justify-between min-h-[200px] h-full bg-secondary rounded p-4">
                                        <p className="text">{t.testimony}</p>
                                        <div className="space-y-1">
                                            <h4 className="text-lg font-semibold">
                                                {t.name}
                                            </h4>
                                            <h5 className="text text-lg">
                                                {t.position}
                                            </h5>
                                        </div>
                                    </div>
                                    <span className="bg-gr-red absolute h-6 w-6 rotate-45 bottom-0 left-3 -z-10" />
                                </div>
                                <div className="relative h-14 w-14">
                                    <Image
                                        src={
                                            'https://zerotoinfinite.com' +
                                            t.image
                                        }
                                        alt={t.name}
                                        fill={true}
                                        className="rounded-full object-cover"
                                    />
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </Section>
    )
}
