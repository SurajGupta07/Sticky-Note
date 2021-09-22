import { useSelector } from "react-redux";

export const Feed = () => {
    const posts = useSelector((state) => state.post.postList);
  

    return (
        <div>
            {posts?.map((post) => {
                return (
                    <div className="feed-post">
                        <p className="feed-text">{post}</p>
                    </div>
                );
            })}
        </div>
    );
};
