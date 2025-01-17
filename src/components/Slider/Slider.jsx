import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronRight,
	faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import "./Slider.css";

export default (props) => {
	const [activeSlide, setactiveSlide] = useState(props.activeSlide);

	const next = () => activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);


	const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

	const getStyles = (index) => {
		if (activeSlide === index)
			return {
				opacity: 1,
				transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
				zIndex: 10
			};
		else if (activeSlide - 1 === index)
			return {
				opacity: 1,
				transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
				zIndex: 9
			};
		else if (activeSlide + 1 === index)
			return {
				opacity: 1,
				transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
				zIndex: 9
			};
		else if (activeSlide - 2  === index)
			return {
				opacity: 1,
				transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
				zIndex: 8
			};
		else if (activeSlide + 2 === index)
			return {
				opacity: 1,
				transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
				zIndex: 8
			};
		else if (index < activeSlide - 2)
			return {
				opacity: 0,
				transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
				zIndex: 7
			};
		else if (index > activeSlide + 2)
			return {
				opacity: 0,
				transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
				zIndex: 7
			};
	};

	return (
		<>
			<div className="center">
				<div className="bodySlide">
					{/* Carousel */}
					<div className="slideC">
						{props.data.map((item, i) => (
							<React.Fragment key={item.id}>
								<div
									className="slide"
									style={{
										background: item.bgColor,
										boxShadow: `0 5px 20px ${item.bgColor}30`,
										...getStyles(i)
									}}
								>
									<SliderContent {...item} />
								</div>
								<div 
									className="reflection"
									style={{
										background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
										...getStyles(i)
									}}
								/>
							</React.Fragment>
						))}
					</div>
					{/* Carousel */}

					<div className="btns">
						<FontAwesomeIcon
							className="btn"
							onClick={prev}
							icon={faChevronLeft}
							color="#fff"
							size="2x"
						/>
						<FontAwesomeIcon
							className="btn"
							onClick={next}
							icon={faChevronRight}
							color="#fff"
							size="2x"
						/>
					</div>
				</div>
			</div>	
		</>
	);
};

const SliderContent = (props) => {
	return (
		<div className="sliderContent">
			{props.icon}
			<h2>{props.title}</h2>
			<p>{props.desc}</p>
		</div>
	);
};