import { DepartmentCard } from "./departments/department-card"

export const Departments = () => {
    return(
        <section className="mt-5 mb-5" id="departments">
            <div>
                <h1 className="text-4xl font-bold text-main-color text-center mb-4">
                    Our Departments
                </h1>
                <p className="text-center text-lg">
                    Explore our wide range of departments and services designed to cater to
                </p>
            </div>
            <div className="m-4 flex flex-wrap items-center justify-center gap-6">
                <DepartmentCard
                    src="/departments-section/PDL.jpeg"
                    alt="Precision Diagnostics Lab image"
                    title="Precision Diagnostics Lab"
                    describtion={<p>
                        At <span className="text-primary-color">Precision Diagnostics Lab</span>, we utilize cutting-edge AI technology
                        and advanced
                        medical equipment to provide comprehensive diagnostics and accurate
                        assessments
                    </p>}
                />
                {/*---------------------------------------------------------------------------------------*/}
                <DepartmentCard
                    src="/departments-section/DAA.jpeg"
                    alt="Dermatology & Aesthic image"
                    title="Dermatology & Aesthetics"
                    describtion={<p>
                        Our <span className="text-primary-color">Dermatology & Aesthetics</span> department offers a wide range of services,
                        including skin rejuvenation, acne treatment, and anti-aging solutions.
                    </p>}
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
                />
            </div>
        </section>
    )
}