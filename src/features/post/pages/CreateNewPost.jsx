import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../postSlice";
import Draggable from "react-draggable";
import { Feed } from "./Feed";
import plus from "../../../common/assets/plus.png";
import cancel from "../../../common/assets/cancel.png";
import bin from "../../../common/assets/bin.png";
import listn from "../../../common/assets/listn.png";
import list from "../../../common/assets/list.png";
import clean from "../../../common/assets/clean.png";

export const CreateNewPost = () => {
    const dispatch = useDispatch();
    // eslint-disable-next-line
    const [content, setContent] = useState("");
    const [createNewPost, setCreateNewPost] = useState(false);
    const [input, setShowInput] = useState(true); // eslint-disable-next-line
    const [selectImage, setSelectedImage] = useState(null); // eslint-disable-next-line
    const [listItem, setListItem] = useState("");
    const [color, setColor] = useState("#ffffff");

    const changeColor = () => {
        color === "yellow" ? setColor("white") : setColor("yellow");
    };
    const handleUpload = (e) => {
        e.preventDefault();
        setSelectedImage(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <Draggable>
            <div className="post_container">
                {createNewPost && (
                    <div style={{ cursor: "move" }}>
                        <div className="p-2 text-lg inline-flex">
                            <button
                                className="icon-btn"
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(
                                        createPost({ content, selectImage })
                                    );
                                    setCreateNewPost(false);
                                    setShowInput(true);
                                }}
                            >
                                <img
                                    src={plus}
                                    alt="plus"
                                    height="15"
                                    width="15"
                                />
                            </button>
                            <span className="text-hero">What's happening?</span>
                            <button
                                className="icon-btn"
                                onClick={() => {
                                    setCreateNewPost(false);
                                    setShowInput(true);
                                }}
                            >
                                <img
                                    src={cancel}
                                    alt="add"
                                    height="15"
                                    width="15"
                                />
                            </button>
                        </div>
                        <div
                            style={{ marginTop: "1rem", marginBottom: "1rem" }}
                        >
                            <textarea
                                style={{ background: color }}
                                className="text-input"
                                onChange={(e) => setContent(e.target.value)}
                            ></textarea>
                            {selectImage && (
                                <img
                                    src={selectImage}
                                    alt="img"
                                    height="150"
                                    width="150"
                                />
                            )}
                        </div>
                        <button
                            className="icon-btn"
                            onClick={() => {
                                setListItem("ul");
                            }}
                        >
                            <img src={list} alt="list" height="15" width="15" />
                        </button>
                        <button
                            className="icon-btn"
                            onClick={() => {
                                setListItem("ol");
                            }}
                        >
                            <img
                                src={listn}
                                alt="listn"
                                height="15"
                                width="15"
                            />
                        </button>
                        <button className="icon-btn" onClick={changeColor}>
                            <img
                                src={clean}
                                alt="clean"
                                height="15"
                                width="15"
                            />
                        </button>
                        <input
                            type="file"
                            accept=".png, .jpg, .jpeg"
                            onChange={handleUpload}
                        />
                        <button
                            className="icon-btn"
                            onClick={() => {
                                setContent("");
                                setColor("white");
                                setSelectedImage(null);
                                document.querySelector(".text-input").value =
                                    "";
                            }}
                        >
                            <img src={bin} alt="add" height="15" width="15" />
                        </button>
                    </div>
                )}
                {input && (
                    <button
                        className="add-btn"
                        onFocus={() => {
                            setCreateNewPost(true);
                            setShowInput(false);
                            setContent("");
                        }}
                    >
                        Add Note
                    </button>
                )}
                {input && (
                    <div style={{ marginTop: "5rem", marginLeft: "-5rem" }}>
                        <Feed />
                    </div>
                )}
            </div>
        </Draggable>
    );
};
