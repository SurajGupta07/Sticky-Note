import { useState } from "react";

export const CreateNewPost = () => {
    let [content, setContent] = useState("");
    const [createPost, setCreatePost] = useState(false);
    const [input, setShowInput] = useState(true);

    return (
        <div>
            {createPost && (
                <div>
                    <div className="p-2 text-lg inline-flex">
                        What's happening?
                    </div>
                    <button
                        onClick={() => {
                            setCreatePost(false);
                            setShowInput(true);
                        }}
                    >
                        Close
                    </button>
                    <div>
                        <textarea
                            style={{ resize: "none" }}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                        <div>{content.length}/100</div>
                    </div>
                    <div></div>
                </div>
            )}
            {input && (
                <input
                    onFocus={() => {
                        setCreatePost(true);
                        setShowInput(false);
                    }}
                ></input>
            )}
        </div>
    );
};
