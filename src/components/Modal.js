import React from "react";

function Modal(props) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            props.setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "50px" }}>
                        <img src={"../img/" + props.img} style={{ height: "100px", width: "150px" }} alt="" />
                    </div>
                    <div>
                        <h4 style={{ margin: "0px" }}>{props.title}</h4>
                        <small>{props.title}</small>
                        <p>{props.content}</p>
                        <div style={{ display: "flex" }}>
                            <p>Website</p>
                            <a href={props.link} style={{ textDecoration: "none", margin: "1rem", marginLeft: "50%" }}>{props.title}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;