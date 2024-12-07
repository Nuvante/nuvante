import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type Props = {}

const Page = (props: Props) => {
    return (
        <>
            <Header />
            <Navbar />
            <div className='p-4'>
                <div className='md:mt-6 md:ml-32'>
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
                <div className='flex flex-col items-center mt-10 md:mt-20'>
                    <div className='flex flex-col items-center mt-10 md:mt-40'>
                        <h1 className="text-4xl md:text-8xl font-medium text-center">404 Not Found</h1>
                        <p className='mt-4 md:mt-12 text-center'>Your visited page not found. You may go home page.</p>
                    </div>
                    <div className='mt-10 md:mt-28'>
                        <Link href="/">
                            <button className='h-[56px] w-[200px] md:w-[254px] bg-[#DB4444] rounded-[4px]'>Back to home page</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Page