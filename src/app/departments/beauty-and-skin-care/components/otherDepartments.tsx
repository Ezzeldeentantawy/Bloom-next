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
                    src="/departments-section/DAA.jpeg"
                    alt="Dermatology & Aesthic image"
                    title="Dermatology & Aesthetics"
                    describtion={<p>
                        Our <span className="text-primary-color">Dermatology & Aesthetics</span> department offers a wide range of services,
                        including skin rejuvenation, acne treatment, and anti-aging solutions.
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
                    src="/departments-section/DAA.jpeg"
                    alt="Dermatology & Aesthic image"
                    title="Dermatology & Aesthetics"
                    describtion={<p>
                        Our <span className="text-primary-color">Dermatology & Aesthetics</span> department offers a wide range of services,
                        including skin rejuvenation, acne treatment, and anti-aging solutions.
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
                    src="/departments-section/DAA.jpeg"
                    alt="Dermatology & Aesthic image"
                    title="Dermatology & Aesthetics"
                    describtion={<p>
                        Our <span className="text-primary-color">Dermatology & Aesthetics</span> department offers a wide range of services,
                        including skin rejuvenation, acne treatment, and anti-aging solutions.
                    </p>}
                />
            </div>
        </section>
    )
}