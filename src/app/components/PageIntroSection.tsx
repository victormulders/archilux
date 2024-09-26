import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/20/solid';

export default function PageIntroSection({title, image}: {title: string, image: StaticImageData}) {
    return <section className="h-screen lg:h-[65svh]">
        <div
            className="relative w-full h-full lg:[clip-path:inset(0_0_0_0)]"
        >
            <div className="relative lg:fixed h-full w-full left-0 top-0">
                <Image
                    fill
                    className="object-center object-cover pointer-events-none brightness-75"
                    src={image}
                    alt={"Living room"}
                    priority
                />
            </div>
            <div
                className="absolute lg:relative top-0 z-1 container flex flex-col gap-4 md:gap-8 items-center justify-center h-full text-center">
                <h1 className="text-4xl md:text-7xl font-medium text-white mt-0">
                    {title}
                </h1>
                <p className="text-xl leading-normal text-gray-200 lg:text-xl xl:text-2xl">
                    With every project we undertake, we are committed to turning
                    houses into homes, one design at a time.
                </p>
                {/*<HeroContent />*/}
                <div className="flex flex-col items-start gap-4 sm:gap-2 sm:items-center sm:flex-row">
                    <Link
                        href={"/contact"}
                        className="primary-button arrow-button flex w-fit items-center"
                    >
                        Explore Our Projects{" "}
                        <ArrowUpRightIcon className="ml-2 h-6 w-6"/>
                    </Link>
                </div>
            </div>
        </div>
    </section>

}
