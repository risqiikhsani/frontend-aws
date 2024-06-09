import Image from 'next/image';

export default function Page() {
    return (
        <>
            <div className="pt-24 text-center">
                <div className="relative w-full h-screen">
                    <Image src="/pictures/3d.svg" layout="fill" objectFit="cover" alt="test" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-opacity-80 p-8 rounded-lg shadow-lg bg-emerald-200">
                            <p className="text-2xl md:text-8xl font-bold ">Health4Us</p>
                        </div>
                    </div>
                </div>

                {/* Sections */}
                <div className="flex flex-col justify-center items-center">
                    <Section
                        image="/pictures/girl-with-phone1.png"
                        alt="test"
                        title="Ask questions, help each other, hangout with people"
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
                        title="Maintained by professionals"
                        reverse
                    />
                </div>
            </div>
        </>
    );
}

const Section = ({ image, alt, title, reverse }: { image: string; alt: string; title: string; reverse?: boolean }) => (
    <div className={`flex flex-col md:flex-row justify-center items-center w-screen h-screen bg-cyan-500 ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <div className="w-full md:w-1/2">
            <Image src={image} width={1000} height={1000} alt={alt} className="w-full h-full" />
        </div>
        <p className="text-2xl md:text-8xl font-bold text-center md:text-left md:mx-10">{title}</p>
    </div>
);
