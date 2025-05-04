import { DepartmentCard } from "./departments/department-card"

export const Departments = () => {
    return(
        <section className="mt-5 mb-5" id="departments">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-2xl sm:text-[26px] md:text-[28px] font-bold text-main-color mb-4">
                    Our Departments
                </h1>
                <p className="text-black text-xl sm:text-[22px] md:text-[24px] mb-4">
                    Explore our wide range of departments and services designed to cater to
                </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6">
                {/*---------------------------------------------------------------------------------------*/}
                <DepartmentCard
                    src="/departments-section/PDL.jpeg"
                    alt="Precision Diagnostics Lab image"
                    title="Precision Diagnostics Lab"
                    describtion={<p>
                        PreCare SmartPlan Diagnostics – Smart pre-diagnostics for an optimal treatment plan.
                    </p>}
                    list={
                        <>
                            <p>Visia AI Skin Analysis</p>
                            <p>Foto Finder AI Hair Analysis</p>
                            <p>InBody Body Composition Analysis</p>
                            <p>3D Digital Dental Scan</p>
                        </>
                    }
                />
                <DepartmentCard
                    src="/departments-section/DAA.jpeg"
                    alt="Dermatology & Aesthic image"
                    title="Dermatology & Aesthetics"
                    describtion={<p>
                        Our <span className="text-primary-color">Dermatology & Aesthetics</span> department offers a wide range of services,
                        including skin rejuvenation, acne treatment, and anti-aging solutions.
                    </p>}
                    list={
                        <div>
                            <p>Skin Rejuvenation</p>
                            <p>Face Contouring</p>
                        </div>
                    }
                />
                    <DepartmentCard
                        src="/departments-section/LAHR.jpeg"
                        alt="Laser hair removal and laser treatment"
                        title="Laser hair removal and laser treatment"
                        describtion={<p>
                            Our {" "}
                            <span className="text-primary-color">
                                Laser Hair Removal Department
                            </span>  
                            {" "}is dedicated to providing safe, effective, and long-lasting hair reduction treatments using state-of-the-art laser technology. Staffed by trained professionals, we offer personalized care tailored to different skin types and hair textures. Whether you&#39;re looking for treatment on the face, legs, arms, or other areas, our goal is to deliver smooth, hair-free results in a comfortable and hygienic environment. We prioritize client safety, privacy, and satisfaction in every session.
                        </p>}
                        list={
                            <div>
                                <p>Tattoo & Lesion Removal</p>
                                <p>Skin Rejuvenation & Tightening</p>
                                <p>Duetto MT EVO</p>
                            </div>
                        }
                    />
                <DepartmentCard
                    src="/departments-section/BASC.jpeg"
                    alt="Beauty and skin care image"
                    title="Beauty and Skin Care"
                    describtion={<p>
                        At our <span className="text-primary-color">beauty clinic</span>, we believe that skincare is more than a routine, it&#39;s a journey to confidence and lasting radiance.
                        Our expert treatments are designed to nourish, rejuvenate, and reveal your skin&#39;s
                        natural beauty. Using the latest techniques and high-quality products, we personalize every
                        service to suit your unique needs. Whether you&#39;re seeking a glowing complexion, anti-aging
                        solutions, or simply a moment of self-care, our clinic is your trusted destination for healthy,
                        beautiful skin.
                    </p>}
                    list={
                        <div>
                            <p>Deep Cleansing & Revitalization</p>
                            <p>Face & Neck Tightening</p>
                            <p>Rejuvenation facial</p>
                            <p>Skin Brightening</p>
                        </div>
                    }
                />
                <DepartmentCard 
                src="/departments-section/SAWLP.jpeg"
                alt="Slimming and weight loss program"
                title="Slimming and weight lose program"
                describtion="Transform your body with our proven slimming & weight loss program! Burn fat, boost metabolism, and achieve lasting results. Start your journey today!"
                list={
                    <div>
                        <p>Body Contouring</p>
                        <p>Muscle Building</p>
                        <p>Skin Tightening</p>
                        <p>Diet & Exercise</p>
                    </div>
                }
                />
                <DepartmentCard
                title="ActiveStride Therapy & Hijama department"
                src="/departments-section/ASTAH.jpeg"
                alt="ActiveStride Therapy & Hijama department"
                describtion="Revitalize your health with ActiveStride Therapy & Hijama cupping! Natural pain relief, improved circulation & detox. Book your session today for holistic healing!"
                list={
                    <div>
                        <p>Boosted Circulation</p>
                        <p>Enhanced Flexibilty & Mobility</p>
                        <p>Detoxification & Stress Relif</p>
                    </div>
                }
                />
                <DepartmentCard
                title="Dental"
                src="/departments-section/D.png"
                alt="Dental"
                describtion="Get top-quality dental care! Our expert dentists offer teeth whitening, implants, braces & pain-free treatments. Book your appointment today for a brighter smile!"
                list={
                    <>
                        <p>Teeth Whitening</p>
                        <p>Crowns & Brides</p>
                        <p>Fillings & Extractions</p>
                        <p>Zoom/Nano Whitening</p>
                    </>
                }
                />
                <DepartmentCard
                title="Wellness and Iv Drips"
                src="/departments-section/WAID.jpeg"
                alt="Wellness and Iv Drips"
                describtion="Revitalize your body with our medical-grade IV drip therapy! Combat fatigue, enhance immunity & accelerate recovery."
                list={
                    <>
                        <p>Hair Generate IV</p>
                        <p>Immune Boost</p>
                        <p>Wellness Massage</p>
                        <p>Spinal Decompression</p>
                    </>
                }
                />
            </div>
        </section>
    )
}