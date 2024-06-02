
import Image from 'next/image'
export default function Page() {
    return (
        <>
            <div className="pt-24 pb-8 text-center">
                <div className="relative w-full h-screen">
                <Image src="/pictures/3d.svg" layout="fill" objectFit="cover" alt="test" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
                            <p className="text-8xl font-bold">Health4Us</p>
                        </div>
                    </div>
                </div>


                <div className='flex justify-center items-center h-screen '>

                    <div>
                    <Image src="/pictures/girl-with-phone1.png" width={1000} height={1000} alt="test" />
                    </div>
                    
                    <p className="text-8xl font-bold">Ask questions,<br/>help each other,<br/>hangout with people</p>
                   
                    

                    
                </div>
                <div className='flex justify-center items-center'>
                    <p className="text-8xl font-bold">Integrated with smart personal assistance</p>
                    <Image src="/pictures/2.svg" width={1000} height={1000} className='w-fit h-screen' alt="test" />
                </div>
                <div className='flex justify-center items-center'>
                    <Image src="/pictures/1.svg" width={1000} height={1000} className='w-full h-screen' alt="test" />
                    <p className="text-8xl font-bold">Integrated with AI powered feature</p>
                </div>
                <div className='flex justify-center items-center'>
                    <p className="text-8xl font-bold">Maintained by professionals</p>
                    <Image src="/pictures/doctor1.png" width={1000} height={1000} className='w-fit h-fit' alt="test" />
                </div>
            </div>
        </>
    )
}