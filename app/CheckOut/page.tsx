import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'

type Props = {}

const page = (props: Props) => {
    return (
        <>
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
                                <BreadcrumbPage>Products</BreadcrumbPage>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem >
                                <BreadcrumbLink href='/Cart'>
                                    <BreadcrumbPage>Cart</BreadcrumbPage>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>CheckOut</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className='mt-16 ml-4 lg:ml-32'>
                    <div>
                        <h1 className='text-[36px] font-medium'>
                            Billing Details
                        </h1>
                    </div>
                    <div className='xl:w-[1170px] xl:h-[814px] flex xl:flex-row flex-col xl:justify-between border mt-10'>
                        <div className='xl:w-[470px] h-full border'>

                        </div>
                        <div className='xl:w-[527px] xl:h-[548px] border'>

                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default page