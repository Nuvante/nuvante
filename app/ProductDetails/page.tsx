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

                    <div className='flex xl:flex-row flex-col xl:justify-between xl:w-[1170px] xl:h-[600px] border'>
                        <div className='flex flex-col justify-between h-[600px] w-[170px] border'>
                            <div>

                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                        <div className='h-[600px] w-[500px] border'>

                        </div>
                        <div className='h-[600px] w-[500px] border'>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page