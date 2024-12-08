import React from 'react'
import Image from 'next/image'
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
const prodicon = '/product-icon.svg'


type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="p-4">
                <div className='mt-6 ml-4 lg:ml-32'>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='/'>
                                    Home
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Wishlist</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className='xl:flex xl:flex-col xl:w-[1170px] xl:h-[840px] mt-8 xl:ml-28'>
                    <div className='xl:flex xl:flex-col xl:w-[1170px] xl:h-[436px] xl:justify-evenly '>
                        <div className='xl:flex xl:flex-row xl:items-center xl:justify-between xl:h-[72px] xl:w-[1170px] border rounded-sm bg-white'>
                            <h1 className='xl:pl-4'>
                                Product
                            </h1>
                            <h1>
                                Price
                            </h1>
                            <h1>
                                Quantity
                            </h1>
                            <h1 className='xl:pr-4'>
                                Subtotal
                            </h1>
                        </div>
                        <div className='xl:flex xl:flex-row xl:items-center xl:justify-between xl:h-[72px] xl:w-[1170px] border rounded-sm bg-white'>
                            <div className='xl:flex xl:flex-row xl:items-center xl:pl-4'>
                                <div>
                                    <Image src={prodicon} alt='prodicon' width={41} height={34}></Image>
                                </div>
                                <div>
                                    <h1 className='font-normal xl:pl-2'>Kaze GA Fuku</h1>
                                </div>
                            </div>
                            <div className='xl:mr-14 xl:pr-9'>
                                <h1>Rs.999</h1>
                            </div>
                            <div className='xl:pr-20'>
                                <input className='xl:h-[44px] xl:w-[72px] xl:text-center' type="number" placeholder='01' />
                            </div>
                            <div className='xl:pr-5'>
                                <h1>Rs.999</h1>
                            </div>
                        </div>
                        <div className='xl:flex xl:flex-row xl:items-center xl:justify-between xl:h-[72px] xl:w-[1170px] border rounded-sm bg-white'>
                            <div className='xl:flex xl:flex-row xl:items-center xl:pl-4'>
                                <div>
                                    <Image src={prodicon} alt='prodicon' width={41} height={34}></Image>
                                </div>
                                <div>
                                    <h1 className='font-normal xl:pl-2'>Kaze GA Fuku</h1>
                                </div>
                            </div>
                            <div className='xl:mr-14 xl:pr-9'>
                                <h1>Rs.999</h1>
                            </div>
                            <div className='xl:pr-20'>
                                <input className='xl:h-[44px] xl:w-[72px] xl:text-center' type="number" placeholder='01' />
                            </div>
                            <div className='xl:pr-5'>
                                <h1>Rs.999</h1>
                            </div>
                        </div>
                        <div className='xl:flex xl:flex-row xl:justify-between xl:h-[56px] xl:w-[1170px]'>
                            <div>
                                <button className='xl:w-[218px] xl:h-[56px] border rounded-sm border-black'>Return to Home</button>
                            </div>
                            <div>
                                <button className='xl:w-[218px] xl:h-[56px] border rounded-sm border-black'>Update Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className='xl:flex xl:flex-row xl:justify-between xl:w-[1170px] xl:h-[324px] xl:mt-20'>
                        <div className='xl:flex xl:flex-row'>
                            <div className='xl:pr-5'>
                                <input className='xl:w-[300px] rounded-sm xl:h-[56px] text-center border border-black' type="text" placeholder='Coupon Code' />
                            </div>
                            <div>
                                <button className='xl:w-[211px] rounded-sm xl:h-[56px] text-white bg-[#DB4444]'>Apply Coupon</button>
                            </div>
                        </div>
                        <div className='xl:w-[470px] xl:h-[324px] border rounded-sm border-black'>
                            <div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default page