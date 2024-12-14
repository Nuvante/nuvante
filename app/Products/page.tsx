import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import React from 'react'
import Heading from '@/components/Heading'
import Card from '@/components/Card'

type Props = {}

const page = (props: Props) => {
    return (
        <div>
            <Header />
            <Navbar />
            <div className='p-4'>
                <div className='mt-6 ml-4 xl:ml-32'>
                    <div className="flex flex-col gap-6">
                        <div className="flex w-full justify-between items-center">
                            <Heading
                                message="Products"
                                secondaryMessage=""
                            ></Heading>

                        </div>
                        <div className="flex flex-col gap-12">
                            <div className="cards flex flex-wrap justify-around sm:w-auto w-[100%] gap-y-10">
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
                                <Card
                                    productName="Kaze Ga Fuku"
                                    productPrice={999}
                                    cancelledPrice={1500}
                                    reviews={65}
                                    stars={4}
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
                                <Card
                                    productName="Kaze Ga Fuku"
                                    productPrice={999}
                                    cancelledPrice={1500}
                                    reviews={65}
                                    stars={4}
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
                                <Card
                                    productName="Kaze Ga Fuku"
                                    productPrice={999}
                                    cancelledPrice={1500}
                                    reviews={65}
                                    stars={4}
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
            <Footer />
        </div>
    )
}

export default page