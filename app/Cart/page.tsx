import React from 'react';
import Image from 'next/image';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const prodicon = '/product-icon.svg';

type Props = {};

const page = (props: Props) => {
    return (
        <div>
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
                            <BreadcrumbItem>
                                <BreadcrumbPage>Wishlist</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className='flex flex-col w-full xl:w-[1170px] xl:h-auto xl:ml-28'>
                    <div className='flex flex-col w-full xl:w-[1170px] space-y-4'>
                        {/* Header Row */}
                        <div className='hidden md:flex flex-row items-center justify-between h-[72px] w-full border rounded-sm bg-white px-4'>
                            <h1>Product</h1>
                            <h1>Price</h1>
                            <h1>Quantity</h1>
                            <h1>Subtotal</h1>
                        </div>

                        {/* Product Row 1 */}
                        <div className='flex flex-col md:flex-row items-center justify-between border rounded-sm bg-white p-4 space-y-4 md:space-y-0'>
                            <div className='flex items-center'>
                                <Image src={prodicon} alt='prodicon' className="md:w-[41px] md:h-[34px]" height={25} width={30} />
                                <h1 className='text-sm font-normal pl-2'>Kaze GA Fuku</h1>
                            </div>
                            <h1 className='text-center'>Rs.999</h1>
                            <input className='h-[40px] w-[60px] text-center border md:h-[44px] md:w-[72px]' type="number" placeholder='01' />
                            <h1 className='pr-5'>Rs.999</h1>
                        </div>

                        {/* Product Row 2 */}
                        <div className='flex flex-col md:flex-row items-center justify-between border rounded-sm bg-white p-4 space-y-4 md:space-y-0'>
                            <div className='flex items-center'>
                                <Image src={prodicon} alt='prodicon' className="md:w-[41px] md:h-[34px]" height={25} width={30} />
                                <h1 className='text-sm font-normal pl-2'>Kaze GA Fuku</h1>
                            </div>
                            <h1 className='text-center'>Rs.999</h1>
                            <input className='h-[40px] w-[60px] text-center border md:h-[44px] md:w-[72px]' type="number" placeholder='01' />
                            <h1 className='pr-5'>Rs.999</h1>
                        </div>

                        {/* Buttons */}
                        <div className='flex flex-col md:flex-row justify-between space-y-4 md:space-y-0'>
                            <button className='w-full md:w-[218px] h-[40px] md:h-[56px] border rounded-sm border-black'>
                                Return to Home
                            </button>
                            <button className='w-full md:w-[218px] h-[40px] md:h-[56px] border rounded-sm border-black'>
                                Update Cart
                            </button>
                        </div>
                    </div>

                    {/* Coupon Section */}
                    <div className='flex flex-col md:flex-row justify-between w-full xl:w-[1170px] mt-10 space-y-4 md:space-y-0'>
                        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
                            <input
                                className='w-full md:w-[300px] h-[40px] md:h-[56px] rounded-sm text-center border border-black'
                                type="text"
                                placeholder='Coupon Code'
                            />
                            <button className='w-full md:w-[211px] h-[40px] md:h-[56px] rounded-sm text-white bg-[#DB4444]'>
                                Apply Coupon
                            </button>
                        </div>
                        <div className='w-full md:w-[470px] h-auto md:h-[324px] border rounded-sm border-black'>
                            {/* Additional content for totals */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default page;
