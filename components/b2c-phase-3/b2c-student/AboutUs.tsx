import Image from "next/image";
import { FC } from "react";
import StudentNavbar from "@/components/student-navbar";
import Newsletter from "@/components/common-components/Newsletter";
import Footer from "@/components/layout/Footer";

const content = {
    heading: "Eduport education theme, built specifically for the education centers which is dedicated to teaching and involve learners.",
    description:
        "Ut eget egestas risus. Mauris sed justo quam. Sed eget porttitor metus. Nam purus arcu, congue sed mi sit amet, bibendum imperdiet mauris. Nunc luctus quis sem volutpat lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec non augue lectus.",
    images: [
        { src: "/b2c-student/aboutImg/about-1.jpg", alt: "Teacher teaching students" },
        { src: "/b2c-student/aboutImg/about-2.jpg", alt: "Kids learning with books" },
        { src: "/b2c-student/aboutImg/about-3.jpg", alt: "Boy raising hand in classroom" },
    ],
};

const aboutSection = {
    title: "About Us",
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s... Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
    bulletPoints: [
        "Phasellus quis nunc sed nulla euismod iaculis.",
        "Phasellus ultricies dui id interdum feugiat.",
        "In id mattis facilisis nisi suscipit dictum.",
        "Aenean dignissim tellus ut dui tincidunt malesuada.",
    ],
    image: "/b2c-student/aboutImg/about-character.png",
};

const benefitSection = {
    title: "Benefits of Online Education",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non magna ac nisl dignissim condimentum eu ac ante. Ut nec dui volutpat, tristique nulla quis, luctus justo.",
    benefits: [
        { icon: "/b2c-student/aboutImg/card-1.png", title: "Title", description: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum Lorem Ipsum" },
        { icon: "/b2c-student/aboutImg/card-2.png", title: "Title", description: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum Lorem Ipsum" },
        { icon: "/b2c-student/aboutImg/card-3.png", title: "Title", description: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum Lorem Ipsum" },
        { icon: "/b2c-student/aboutImg/card-4.png", title: "Title", description: "Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum Lorem Ipsum" },
    ],
};

const EducationSection: FC = () => {
    const headerUser = { name: "Shlok Agheda", role: "Student", avatarSrc: "/placeholder-avatar-student.jpg" };

    return (
        <>
            <StudentNavbar activeState="About" />
            {/* Hero Section */}
            <section className="relative py-16 px-4 md:px-10 lg:px-16 text-white overflow-hidden">
                {/* Background pattern */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url(/pattern.png)",
                        backgroundRepeat: "repeat",
                        backgroundSize: "1500px",
                    }}
                />
                {/* Pink overlay */}
                <div className="absolute inset-0 bg-[#FF3366] opacity-80 z-0" />
                <div className="relative z-10">
                    <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[6rem] items-center">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
                                {content.heading}
                            </h1>
                            <p className="text-white/80 text-sm md:text-base">
                                {content.description}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="col-span-2">
                                <Image
                                    src={content.images[0].src}
                                    alt={content.images[0].alt}
                                    width={600}
                                    height={400}
                                    className="rounded-2xl w-full h-auto"
                                />
                            </div>
                            {content.images.slice(1).map((img, idx) => (
                                <Image
                                    key={idx}
                                    src={img.src}
                                    alt={img.alt}
                                    width={300}
                                    height={200}
                                    className="rounded-2xl w-full h-auto"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="bg-white py-16 px-4 md:px-10 lg:px-12">
                <div className="max-w-8xl px-6 py-8 rounded-2xl bg-gray-100 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
                            {aboutSection.title}
                        </h2>
                        <p className="text-gray-700 mb-4">
                            {aboutSection.description}
                        </p>
                        <ul className="space-y-4">
                            {aboutSection.bulletPoints.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm md:text-base">
                                    <Image
                                        src="/b2c-student/aboutImg/tick.png" // Update to your actual path (e.g., /tick.png or /icons/tick.png)
                                        alt="Tick"
                                        width={18}
                                        height={18}
                                        className="mt-1"
                                    />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className="text-center">
                        <Image
                            src={aboutSection.image}
                            alt="About us illustration"
                            width={400}
                            height={400}
                            className="inline-block max-w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-white rounded-b-3xl pb-4 mb-6 px-4 md:px-10 lg:px-12">
                <div className="max-w-8xl mx-auto text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#FF3366] mb-4">
                        {benefitSection.title}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {benefitSection.description}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:px-8 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
                    {benefitSection.benefits.map((benefit, idx) => (
                        <div
                            key={idx}
                            className="bg-[#f9fafb] border p-2 rounded-2xl"
                        >
                            <Image
                                src={benefit.icon}
                                alt="Benefit icon"
                                width={75}
                                height={75}
                                className="mb-4"
                            />
                            <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                            <p className="text-sm pb-2 pr-2 leading-relaxed text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
                <div className=" mt-4 md:mt-8 rounded-b-2xl ">
                    <Newsletter />
                </div>
            </section>
            <Footer />
        </>
    );
};

export default EducationSection;
