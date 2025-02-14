import React from "react";

import {
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText,
	CardHeader,
	Col,
	UncontrolledTooltip,
} from "reactstrap";

import Color from "color-thief-react";

import { Fade } from "react-reveal";
import Image from "next/image";
import { Icon } from "@iconify/react";

const ExperienceCard = ({ data }) => {
	return (
		<Col lg="4">
			<Fade left duration={1000} distance="40px">
				<Card
					style={{ flex: 1 }}
					className="shadow-lg--hover shadow border-0 text-center rounded"
				>
					<Color src={data.companylogo} format="hex">
						{(color) => (
							<CardHeader style={{ background: color.data }}>
								<h5 className="text-white">{data.company}</h5>
							</CardHeader>
						)}
					</Color>
					<CardBody className="py-5">
						<div
							className="bg-white rounded-circle mb-3 img-center img-fluid shadow-lg "
							style={{ width: "100px", height: "100px" }}
						>
							<Image
								src={data.companylogo}
								width={data.size || "100%"}
								height={"100%"}
								objectPosition={"relative"}

								alt={data.companylogo}
								// layout="fill"
								objectFit="contain"
							/>
						</div>
						<CardTitle tag="h5">{data.role}</CardTitle>
						<CardSubtitle>{data.date}</CardSubtitle>
						<CardText className="description my-3" tag="div">
							{data.desc}
							<br />




							{data.skills ?
								data.skills.map((skill) => {
									return <React.Fragment key={data.key + skill.skillName} >
										< div
											className="icon icon-lg icon-shape shadow rounded-circle mb-1"
											id={skill.skillName}
										>
											<Icon icon={skill.fontAwesomeClassname} />
											<UncontrolledTooltip
												delay={0}
												placement="bottom"
												target={skill.skillName}
											>
												{skill.skillName}
											</UncontrolledTooltip>
										</div>

									</React.Fragment>
								}) : null}
						</CardText>
					</CardBody>
				</Card>
			</Fade >
		</Col >
	);
};

export default ExperienceCard;
