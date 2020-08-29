import React from "react";
import Tag from "./Tag.component";

export const Card = (props) => {
	return (
		<div className="card-wrapper">
			<div className={props.featured ? "card featured-card" : "card"}>
				<div className="logo-container">
					<img src={props.logo} alt={props.company} />
				</div>
				<div className="details">
					<div>
						<h5 className="name">{props.company}</h5>
						{props.new ? <h5 className="btn new">NEW!</h5> : ""}
						{props.featured ? <h5 className="btn featured">FEATURED</h5> : ""}
					</div>
					<h3 className="position">{props.position}</h3>
					<div className="day-time-locate">
						<h5>{props.postedAt}</h5>
						<h5>{props.contract}</h5>
						<h5>{props.location}</h5>
					</div>
				</div>
				<div className="tags">
					{[props.role, props.level, ...props.languages].map((value, index) => (
						<Tag text={value} key={index} />
					))}
				</div>
			</div>
		</div>
	);
};
