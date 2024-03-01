import React from "react";
import "../../styles/callIcon.css"

export const CallIcon = () => {
	return (
		<div className="container-fluid container-cell-icon">
            <div className="d-grid justify-content-sm-end all-cell-icon">
                <a className="btn btn-light btn-cell-icon rounded-circle" type="button" href="tel:+34650369409"><i className="fa-solid fa-phone cell-icon"></i></a>
            </div>
		</div>
	);
};
