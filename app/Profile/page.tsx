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
                                <BreadcrumbLink>
                                    <Link href="/">Home</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Profile</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <div className='flex flex-col lg:flex-row ml-4 lg:ml-32 mt-8 lg:mt-24'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col'>
                            <h1 className='font-medium'>Manage My Account</h1>
                            <div className='flex flex-col ml-4 lg:ml-10 pt-4 font-normal'>
                                <div className='text-[#DB4444] font-normal'>
                                    My Profile
                                </div>
                                <div className='pt-3 font-normal'>
                                    Address Book
                                </div>
                                <div className='pt-3 font-normal'>
                                    My Payment Option
                                </div>
                            </div>
                        </div>
                        <div className='pt-10'>
                            <h1 className='font-medium'>My Orders</h1>
                            <div className='flex flex-col ml-4 lg:ml-10 pt-4 font-normal'>
                                <div className='font-normal'>
                                    My Returns
                                </div>
                                <div className='pt-3 font-normal'>
                                    My Cancellations
                                </div>
                            </div>
                        </div>
                        <div className='pt-10 font-normal'>
                            <h1 className='font-medium'>My Wishlist</h1>
                        </div>
                    </div>

                    <div className='flex flex-col h-auto lg:h-[630px] w-full lg:w-[870px] rounded-sm border ml-4 lg:ml-32 bg-[#FFFFFF]'>
                        <div className='mt-8 lg:mt-[40px] ml-4 lg:ml-[80px] h-[28px] w-[155px]'>
                            <h1 className='font-medium text-[#DB4444]'>Edit Your Profile</h1>
                        </div>
                        <div className='flex flex-col lg:flex-row ml-4 lg:ml-[80px] w-full lg:w-[710px] h-auto lg:h-[82px] mt-8'>
                            <div className='w-full lg:w-[330px] h-[62px]'>
                                <h1 className='font-normal'>
                                    First Name
                                </h1>
                                <input className='mt-1 w-full lg:w-[330px] h-[50px] bg-[#F5F5F5] rounded-sm placeholder:pl-3' type="text" placeholder='Daksh' />
                            </div>
                            <div className='w-full lg:w-[330px] h-[62px] mt-4 lg:mt-0 lg:ml-10'>
                                <h1 className='font-normal'>
                                    Last Name
                                </h1>
                                <input className='mt-1 w-full lg:w-[330px] h-[50px] bg-[#F5F5F5] rounded-sm placeholder:pl-3' type="text" placeholder='XYZ' />
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row ml-4 lg:ml-[80px] w-full lg:w-[710px] h-auto lg:h-[82px] mt-8'>
                            <div className='w-full lg:w-[330px] h-[62px]'>
                                <h1 className='font-normal'>
                                    Email
                                </h1>
                                <input className='mt-1 w-full lg:w-[330px] h-[50px] bg-[#F5F5F5] rounded-sm placeholder:pl-3' type="text" placeholder='xyz@gmail.com' />
                            </div>
                            <div className='w-full lg:w-[330px] h-[62px] mt-4 lg:mt-0 lg:ml-10'>
                                <h1 className='font-normal'>
                                    Address
                                </h1>
                                <input className='mt-1 w-full lg:w-[330px] h-[50px] bg-[#F5F5F5] rounded-sm placeholder:pl-3' type="text" placeholder='Delhi' />
                            </div>
                        </div>
                        <div className='flex flex-col ml-4 lg:ml-[80px] w-full lg:w-[710px] h-auto lg:h-[214px] mt-8'>
                            <h1 className='font-normal'>
                                Password Changes
                            </h1>
                            <input className='w-full lg:w-[710px] h-[50px] bg-[#F5F5F5] rounded-sm mt-1 placeholder:pl-3' type="text" placeholder='Current Password' />
                            <input className='w-full lg:w-[710px] h-[50px] bg-[#F5F5F5] rounded-sm mt-2 placeholder:pl-3' type="text" placeholder='New Password' />
                            <input className='w-full lg:w-[710px] h-[50px] bg-[#F5F5F5] rounded-sm mt-2 placeholder:pl-3' type="text" placeholder='Confirm New Password' />
                        </div>
                        <div className='flex flex-row justify-end mt-4 lg:mt-0'>
                            <button className='mr-4 lg:mr-6'>Cancel</button>
                            <button className='bg-[#DB4444] w-full lg:w-[214px] h-[56px] font-medium rounded-sm text-white mr-4 lg:mr-[80px]'>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default page