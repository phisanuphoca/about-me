import Image from "next/image";
import data from "./data/data.json";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Home() {
	return (
		//<div className="h-screen w-full flex items-center justify-center  font-[family-name:var(--font-geist-sans)]  bg-gray-200">
		//	<div className="h-full max-w-screen-lg w-full bg-white shadow-md">
		//		{/* Content */}
		//	</div>
		//</div>
		<div className=" font-[family-name:var(--font-geist-sans)] bg-[#FFF2E1]">
			<main className="flex flex-col gap-8 row-start-2 max-w-screen-lg m-auto h-full text-black">
				<div className="flex flex-col gap-3">
					<div className="max-w-[800px] h-[200px] m-auto flex justify-center items-center gap-6 mb-10 mt-14">
						<div className="w-[150px] h-[150px]  border-2 border-black overflow-hidden 	shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]">
							<Image
								className="dark:invert"
								src="/about-me/profile.jpeg"
								alt="Profile"
								width={400} // กำหนด aspect ratio โดยรวม
								height={400}
								layout="responsive" // ให้ภาพ responsive ตาม container
								priority
							/>
						</div>
						<div className="h-[150px] w-[5px] bg-black"></div>
						<div className=" flex flex-col ">
							<div className="">
								<div className="inline-block text-4xl uppercase border-4 border-b-0 border-black p-2 text-black shadow-[7px_7px_0px_0px_rgba(0,0,0,1)]">
									Phisanu Phoca
								</div>
							</div>
							<div className="text-4xl  p-2 bg-black text-white shadow-gradient">
								Full Stack / Backend Developer
							</div>
						</div>
					</div>
					<div className="mb-10">
						<div className="flex justify-center gap-10 flex-wrap">
							<div className="bg-black text-white p-2 flex shadow-[4px_4px_0px_0px_rgba(32,255,194,1)]">
								<EnvelopeIcon className="size-6 mr-2" /> phisanuphoca@gmail.com
							</div>
							<div className="bg-black text-white p-2 flex items-center  shadow-[4px_4px_0px_0px_rgba(32,220,255,1)]">
								<div className="w-[25px] h-[25px] mr-2">
									<Image
										className=""
										src="/about-me/linkedin-icon-free-png.webp"
										alt="logo-medium"
										width={20}
										height={20}
										layout="responsive" // ให้ภาพ responsive ตาม container
										priority
									/>
								</div>

								<a href="https://www.linkedin.com/in/phisanu/">
									linkedin.com/in/phisanu
								</a>
							</div>
							<div className="bg-black text-white p-2 flex items-center shadow-[4px_4px_0px_0px_rgba(255,196,32,1)]">
								<div className="w-[20px] h-[20px] mr-2">
									<Image
										className="inverted"
										src="/about-me/logo-medium.png"
										alt="logo-medium"
										width={20}
										height={20}
										layout="responsive" // ให้ภาพ responsive ตาม container
										priority
									/>
								</div>

								<a href="https://medium.com/@phisanu.p">
									medium.com/@phisanu.p
								</a>
							</div>
						</div>
						{/*<EnvelopeIcon className="size-6" />*/}
					</div>
					<div className="mb-5">
						<div className="inline-block border px-4 py-2 border-black text-2xl font-medium	shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] mb-3">
							Summary
						</div>
						<div className="pl-4">
							<div className="text-lg">
								<p className="indent-8">
									With 6 years of professional experience, I specialize in
									full-stack development, backend architecture, microservices
									and cloud solutions. Skilled in technologies such as NestJS,
									ReactJS, and AWS, I excel at building scalable systems and
									seamless user interfaces that deliver impactful results. I am
									also passionate about self- learning and exploring new
									technologies, with a particular interest in Golang and Rust.
								</p>
							</div>
							<div className="space-y-4"></div>
						</div>
					</div>
					<div className="flex mb-5">
						<div className="w-[40%]">
							<div className="inline-block border px-4 py-2 border-black text-2xl font-medium	shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] mb-3">
								Education
							</div>
							<div className="text-lg pl-4">
								<div className=" font-medium">
									2017 | KASETSART UNIVERSITY <br />
									First-Class Honors
								</div>
								<div>
									Bachelor of Engineering Program in Computer Engineering
								</div>
							</div>
						</div>
						<div className="w-[60%] ">
							<div className="inline-block border px-4 py-2 border-black text-2xl font-medium	shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] mb-3">
								Certifications
							</div>
							<div className="pl-4">
								<div className="text-lg ">
									<ul className="list-disc ml-4">
										<li>Outsystems Associate Reactive Developer</li>
										<li>Outsystems Associate Traditional Web Developer</li>
										<li>Outsystems Mobile Developer Specialist</li>
									</ul>
								</div>
								<div className="space-y-4"></div>
							</div>
						</div>
					</div>
					<div className="mb-5">
						<div className="">
							<div className="inline-block border px-4 py-2 border-black text-2xl font-medium	shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] mb-3">
								Skills
							</div>
							<div className=" flex-1 pl-4">
								<div className="text-lg">
									<ul className="list-disc ml-4 inline-flex flex-wrap gap-x-10">
										<li>React</li>
										<li>NodeJs Express</li>
										<li>NestJs Microservices</li>
										<li>Typescript Javascript</li>
										<li>HTML CSS Tailwind</li>
										<li>React Native IOS Android</li>
										<li>mongoDB MySQL</li>
										<li>Kafka, RabbitMQ</li>
										<li>AWS</li>
										<li>Outsystems</li>
									</ul>
								</div>
								<div className="space-y-4"></div>
							</div>
						</div>
					</div>
					<div className="mb-5">
						<div className="">
							<div className="inline-block border px-4 py-2 border-black text-2xl font-medium	shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] mb-3">
								Experience
							</div>
							<div className="pl-4">
								{data.experience.map((item, index) => {
									return (
										<div key={index} className="mb-7">
											<div className="relative">
												<div className="absolute border-l-2 border-black	h-[50px] top-[-10px]"></div>

												<div
													className={`absolute border-l-2 border-black top-[40px] ${
														index == data.experience.length - 1
															? "h-[85%]"
															: "h-[100%]"
													}`}
												></div>

												<div className="pl-5">
													<div className="relative inline-block border border-t-0 border-l-0 px-4 py-2 border-black	shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-3">
														<div className="absolute w-[15px] h-[15px] bg-black top-1/2 left-[-26px] rounded-[15px] transform  translate-y-[-50%]"></div>
														<div className="font-bold">{item.position}</div>
														<div className="font-medium">
															{item.company} | {item.period}
														</div>
													</div>

													<div className="pl-4">
														<div className="text-lg ">
															<ul className="list-disc ml-4">
																{item.achievements.map((achievement, index) => {
																	if (typeof achievement === "string") {
																		return <li key={index}>{achievement}</li>;
																	} else {
																		return (
																			<li key={index}>
																				{achievement.text}
																				<ul className="list-disc ml-6">
																					{achievement.subAchievements.map(
																						(sub, subIndex) => (
																							<li key={subIndex}>{sub}</li>
																						)
																					)}
																				</ul>
																			</li>
																		);
																	}
																})}
															</ul>
														</div>
														<div className="space-y-4"></div>
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<div className="h-[100px] w-screen bg-black flex justify-center items-center">
					<div className="text-white flex items-start">
						Developed with
						<div className="ml-2 w-[100px] invert">
							<Image
								className="dark:invert"
								src="/about-me/Nextjs-logo.png"
								alt="Nextjs-logo"
								width={400} // กำหนด aspect ratio โดยรวม
								height={400}
								layout="responsive" // ให้ภาพ responsive ตาม container
								priority
							/>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
