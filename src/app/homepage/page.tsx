import TransitionLeftToRight from '@/components/animation/transition-left-to-right';
import Image from 'next/image';

export default function Page() {
    return (
        <>
            <div className="pt-18 text-center">
                <div className="relative w-full h-screen">
                    <Image src="/pictures/people2.png" layout="fill" objectFit="cover" alt="test" priority/>
                    <div className="absolute inset-0 flex md:flex-row flex-col items-center justify-center">
                        
                            <Image src="/pictures/logo_text.png" width={300} height={300} alt="test" className='mx-auto' />
                            <TransitionLeftToRight>
                            <div className="bg-opacity-80 p-8 rounded-lg shadow-lg bg-green-500 ">
                            <p className="text-2xl md:text-8xl font-bold text-slate-600">Health For Us</p>
                            <p className="text-md md:text-2xl font-bold text-slate-600">Improved Healthcare Community for Millions</p>
                            </div>
                            </TransitionLeftToRight>
                            
                            <Image src="/pictures/logo.png" width={300} height={300} alt="test" className='mx-auto' />
                        
                    </div>
                </div>
                <div className="relative w-full h-screen">
                    <Image src="/pictures/3d.svg" layout="fill" objectFit="cover" alt="test" priority/>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-opacity-50 p-8 rounded-lg shadow-lg bg-cyan-300">
                            <Image src="/pictures/logo_text.png" width={300} height={300} alt="test" className='mx-auto' />
                            <p className="text-mc md:text-2xl font-bold">Improvement Resources</p>
                            <p className="text-sm md:text-xl font-bold">Explore and contribute to a growing collection of recent improvement resources as well as resources focused on health delivery system transformation.</p>
                            <Image src="/pictures/logo.png" width={300} height={300} alt="test" className='mx-auto' />
                        </div>
                    </div>
                </div>

                {/* Sections */}
                <div className="flex flex-col justify-center items-center">
                    <Section
                        image="/pictures/girl-with-phone1.png"
                        alt="test"
                        title="Community Sharing, Ask questions, help each others"
                    />
                    <Section
                        image="/pictures/2.svg"
                        alt="test"
                        title="Integrated with smart personal assistance"
                        reverse
                    />
                    <Section
                        image="/pictures/1.svg"
                        alt="test"
                        title="Integrated with AI powered feature"
                    />
                    <Section
                        image="/pictures/doctor1.png"
                        alt="test"
                        title="Maintained by Professionals"
                        reverse
                    />
                </div>
            </div>
        </>
    );
}

const Section = ({ image, alt, title, reverse }: { image: string; alt: string; title: string; reverse?: boolean }) => (
    <div className={`flex flex-col md:flex-row justify-center items-center w-screen h-screen  ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <div className="w-full md:w-1/2">
            <Image src={image} width={1000} height={1000} alt={alt} className="w-full h-full" />
        </div>
        <p className="text-2xl md:text-8xl font-bold text-center md:text-left md:mx-10">{title}</p>
    </div>
);
