import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../postSlice";
import { Feed } from "./Feed";
import plus from "../../../common/assets/plus.png";
import cancel from "../../../common/assets/cancel.png";
import bin from "../../../common/assets/bin.png";
import image from "../../../common/assets/image.png";
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
    const [listItem, setListItem] = useState('')

    return (
        <div className="post_container">
            {createNewPost && (
                <div>
                    <div className="p-2 text-lg inline-flex">
                        <button
                            className="icon-btn"
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(createPost({ content }));
                                setCreateNewPost(false);
                                setShowInput(true);
                            }}
                        >
                            <img src={plus} alt="plus" height="15" width="15" />
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
                    <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
                        <textarea

                            className="text-input"
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                    </div>
                    <button className="icon-btn" onClick={() => {
                        setListItem('ul')
                    }}>
                        <img src={list} alt="list" height="15" width="15" />
                    </button>
                    <button className="icon-btn" onClick={() => {
                        setListItem('ol')
                    }}>
                        <img src={listn} alt="listn" height="15" width="15" />
                    </button>
                    <button className="icon-btn">
                        <img src={clean} alt="clean" height="15" width="15" />
                    </button>
                    <button className="icon-btn">
                        <img src={image} alt="img" height="15" width="15" />
                    </button>
                    <button
                        className="icon-btn"
                        onClick={() => {
                            setContent("");
                            document.querySelector(".text-input").value = "";
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
                        setContent('')
                    }}
                >
                    Add Note
                </button>
            )}
            {input && <div style={{marginTop: '5rem', marginLeft: '-5rem'}}> <Feed /></div>}
        </div>
    );
};
