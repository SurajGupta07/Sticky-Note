import { useSelector } from "react-redux";

export const Feed = () => {
    const posts = useSelector((state) => state.post.postList);

    return (
        <div>
            {posts?.map((post) => {
                return (
                    <div className="feed-post">
                        <p className="feed-text">{post.content}</p>
                        {post.selectImage  && <img style={{padding:'1rem'}} src={post?.selectImage} alt="img" />}
                    </div>
                );
            })}
        </div>
    );
};
