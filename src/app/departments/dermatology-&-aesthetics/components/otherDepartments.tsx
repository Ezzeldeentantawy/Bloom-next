import { DepartmentCard } from "../../../components/departments/department-card"

export const Departments = () => {
    return(
        <section className="mt-5 mb-5" id="departments">
            <div>
                <h1 className="text-4xl border-b pb-2 border-orange-300 font-bold text-center text-main-color mb-4">
                    Explore other departments
                </h1>
            </div>
            <div className="m-4 flex items-center justify-center py-4 overflow-auto gap-6">
                {/*---------------------------------------------------------------------------------------*/}
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
                <DepartmentCard
                    src="/departments-section/LAHR.jpeg"
                    alt="Laser hair removal and laser treatment"
                    title="Laser hair removal and laser treatment"
                    describtion={<p>
                        Our {" "}
                        <span className="text-primary-color">
                            Laser Hair Removal Department
                        </span>
                        {" "}is dedicated to providing safe, effective, and long-lasting hair reduction treatments using state-of-the-art laser technology. Staffed by trained professionals, we offer personalized care tailored to different skin types and hair textures. Whether you're looking for treatment on the face, legs, arms, or other areas, our goal is to deliver smooth, hair-free results in a comfortable and hygienic environment. We prioritize client safety, privacy, and satisfaction in every session.
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
                <DepartmentCard
                    src="/departments-section/LAHR.jpeg"
                    alt="Laser hair removal and laser treatment"
                    title="Laser hair removal and laser treatment"
                    describtion={<p>
                        Our {" "}
                        <span className="text-primary-color">
                            Laser Hair Removal Department
                        </span>
                        {" "}is dedicated to providing safe, effective, and long-lasting hair reduction treatments using state-of-the-art laser technology. Staffed by trained professionals, we offer personalized care tailored to different skin types and hair textures. Whether you're looking for treatment on the face, legs, arms, or other areas, our goal is to deliver smooth, hair-free results in a comfortable and hygienic environment. We prioritize client safety, privacy, and satisfaction in every session.
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