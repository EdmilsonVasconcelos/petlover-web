import { useEffect, useState } from "react";
import PostWidget from "./PostWidget";

type PostsWidgetProps = {
  petId: number;
  isProfile?: boolean;
};

const PostsWidget = ({ petId, isProfile = false }: PostsWidgetProps) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const response = await fetch("http://localhost:3001/posts", {
      method: "GET",
      headers: { Authorization: `Bearer ` },
    });
    const data = await response.json();
  };

  const getUserPosts = async () => {
    const response = await fetch(`http://localhost:3001/posts/1/posts`, {
      method: "GET",
      headers: { Authorization: `Bearer` },
    });
    const data = await response.json();
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {posts.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <PostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
          />
        )
      )}
    </>
  );
};

export default PostsWidget;
