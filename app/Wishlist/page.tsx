import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Card from '@/components/Card'

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

                <div className='flex flex-col h-[438px] w-[1170px] ml-28 mt-8'>
                    <div className='flex flex-row justify-between'>
                        <div>
                            <h1 className='p-5'>Wishlist (4)</h1>
                        </div>
                        <div>
                            <button className='w-[223px] h-[56px] text-center border border-black'>Move All to bag</button>
                        </div>
                    </div>
                    <div className='flex flex-row justify-evenly w-[1170px] h-[322px] mt-7'>
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
            <div className='h-[438px] w-[1170px]'>

            </div>
            <Footer />
        </div>
    )
}

export default page