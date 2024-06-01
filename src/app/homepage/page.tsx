
import Image from 'next/image'
export default function Page() {
    return (
        <>
            <div className="pt-24 pb-8 text-center bg-cyan-400">
                <Image src="/pictures/3d.svg" width={1000} height={1000} className='w-full h-screen' alt="test" />
                <p className="text-8xl font-bold">Health4Us</p>
                <div className='flex justify-center items-center'>
                    <Image src="/pictures/1.svg" width={1000} height={1000} className='w-full h-screen' alt="test" />
                    <p className="text-8xl font-bold">Integrated with AI powered feature</p>
                </div>
                <div className='flex justify-center items-center'>
                    <p className="text-8xl font-bold">Integrated with smart personal assistance</p>
                    <Image src="/pictures/2.svg" width={1000} height={1000} className='w-full h-screen' alt="test" />
                </div>
            </div>
        </>
    )
}