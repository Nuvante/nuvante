'use client'
import React from 'react'
import Link from 'next/link'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

type Props = {}

const Page = (props: Props) => {
    return (
        <>
            <Header />
            <Navbar />
            <div className="p-4">
                <div className='md:mt-6'>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink>
                                    <Link href="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Contact Us!</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className='flex flex-col md:flex-row mt-5 justify-evenly'>
                    <div className='flex flex-col w-full md:w-1/3 h-auto md:h-auto md:mt-16 border rounded-[4px] bg-white p-4'>
                        <div className='w-full md:w-auto md:mt-8 border-b-2'>
                            <h1 className='text-xl font-bold'>Call Us</h1>
                            <p className='pt-3'>We are available 24/7, 7 days a week</p>
                            <p className='pt-3 pb-9'>Phone: +91 9090908080</p>
                        </div>
                        <div className='w-full md:w-auto md:mt-8'>
                            <h1 className='text-xl font-bold'>Write to Us</h1>
                            <p className='pt-3'>Fill out the form and we will contact you within 24 hours.</p>
                            <p className='pt-3'>Email: founder@gmail.com</p>
                        </div>
                    </div>
                    <div className='w-full md:w-2/3 h-auto md:h-auto bg-white md:mt-16 lg:ml-5'>
                        <div className='flex flex-col w-full h-auto mt-9'>
                            <div className='flex flex-col md:flex-row justify-evenly'>
                                <div className='w-full md:w-1/3 mb-4 md:mb-0'>
                                    <input className='w-full h-[50px] p-2 bg-slate-200' type="text" placeholder='Your Name *' />
                                </div>
                                <div className='w-full md:w-1/3 mb-4 md:mb-0'>
                                    <input className='w-full h-[50px] p-2 bg-slate-200' type="text" placeholder='Your Email *' />
                                </div>
                                <div className='w-full md:w-1/3'>
                                    <input className='w-full h-[50px] p-2 bg-slate-200' type="tel" placeholder='Your Phone *' />
                                </div>
                            </div>
                            <div className='mt-8'>
                                <textarea className='h-[207px] w-full bg-slate-200' name="message" id="" placeholder='Your Message *'></textarea>
                            </div>
                            <div className='flex justify-center mt-4'>
                                <button className='text-center bg-red-600 h-[56px] w-[215px] mb-10'>Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Page