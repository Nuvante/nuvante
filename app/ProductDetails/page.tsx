import React from 'react'
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
import Image from 'next/image'
import Card from '@/components/Card'
import Heading from '@/components/Heading'

const smallProduct = '/product.png'
const bigProduct = '/Big-Product.png'

type Props = {}

const page = (props: Props) => {
    return (
        <>
            <Header />
            <Navbar />
            <div className="p-4">
                <div className='mt-6 ml-4 xl:ml-32'>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href='/'>
                                    Home
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem >
                                <BreadcrumbLink href='/'>
                                    <BreadcrumbPage>T-Shirt</BreadcrumbPage>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Kaze GA Fuku</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <div className='flex flex-col xl:flex-row justify-between gap-4 xl:gap-8'>
                        <div className='flex xl:flex-col md:flex-row flex-col justify-between xl:h-[600px] w-full xl:w-[170px] items-center'>
                            <div className='h-[138px] w-[170px] md:w-full bg-[#F5F5F5]'>
                                <Image className='mt-2 ml-3' src={smallProduct} alt='' height={120} width={133}></Image>
                            </div>
                            <div className='h-[138px] w-[170px] md:w-full bg-[#F5F5F5]'>
                                <Image className='mt-2 ml-3' src={smallProduct} alt='' height={120} width={133}></Image>
                            </div>
                            <div className='h-[138px] w-[170px] md:w-full bg-[#F5F5F5]'>
                                <Image className='mt-2 ml-3' src={smallProduct} alt='' height={120} width={133}></Image>
                            </div>
                            <div className='h-[138px] w-[170px] md:w-full bg-[#F5F5F5]'>
                                <Image className='mt-2 ml-3' src={smallProduct} alt='' height={120} width={133}></Image>
                            </div>
                        </div>
                        <div className='h-[400px] xl:h-[600px] w-full lg:ml-52 md:ml-24 xl:ml-0 md:w-[500px] bg-[#F5F5F5]'>
                            <Image className='xl:ml-4 md:ml-6 md:mt-0 mt-10 xl:mt-16' src={bigProduct} alt='' height={437} width={458}></Image>
                        </div>
                        <div className='h-[400px] xl:h-[600px] w-full xl:w-[400px]'>

                        </div>
                    </div>

                    <div className='w-full xl:w-[1170px] h-auto'>
                        <div className="mt-12 xl:mt-36 flex flex-col gap-6">
                            <div className="flex w-full justify-between items-center">
                                <Heading
                                    message="Related Items"
                                    secondaryMessage=""
                                ></Heading>

                            </div>
                            <div className="flex flex-col gap-12">
                                <div className="cards flex flex-wrap justify-around sm:w-auto w-full gap-y-10">
                                    <Card
                                        productName="Kaze Ga Fuku"
                                        productPrice={999}
                                        cancelledPrice={1500}
                                        reviews={65}
                                        stars={5}
                                        src={"./product.png"}
                                        status="old"
                                    ></Card>
                                    <Card
                                        productName="Kaze Ga Fuku"
                                        productPrice={999}
                                        cancelledPrice={1500}
                                        reviews={65}
                                        stars={5}
                                        src={"./product.png"}
                                        status="old"
                                    ></Card>
                                    <Card
                                        productName="Kaze Ga Fuku"
                                        productPrice={999}
                                        cancelledPrice={1500}
                                        reviews={65}
                                        stars={5}
                                        src={"./product.png"}
                                        status="old"
                                    ></Card>
                                    <Card
                                        productName="Kaze Ga Fuku"
                                        productPrice={999}
                                        cancelledPrice={1500}
                                        reviews={65}
                                        stars={4}
                                        src={"./product.png"}
                                        status="old"
                                    ></Card>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default page
