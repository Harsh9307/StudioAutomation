import { useState } from "react";
import axios from "axios";

import PropTypes from "prop-types";

export default function LikeDislike({ modelName }) {
  modelName = modelName.name;
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const handleLike = () => {
    setLike(!like);
    axios.post(
      "http://localhost:3000/api/v1/analysis/update",
      {
        modelName: modelName,
        like: true,
      },
      { withCredentials: true }
    );
    if (!like) setDislike(false);
  };

  const handleDislike = () => {
    setDislike(!dislike);
    axios.post(
      "http://localhost:3000/api/v1/analysis/update",
      {
        modelName: modelName,
        like: false,
      },
      { withCredentials: true }
    );
    if (!dislike) setLike(false);
  };

  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={handleLike}
        className={`px-4 py-2 rounded-md ${
          like ? "bg-green-500 text-white" : "bg-gray-300"
        }`}
      >
        👍 Like
      </button>
      <button
        onClick={handleDislike}
        className={`px-4 py-2 rounded-md ${
          dislike ? "bg-red-500 text-white" : "bg-gray-300"
        }`}
      >
        👎 Dislike
      </button>
    </div>
  );
}

LikeDislike.propTypes = {
  modelName: PropTypes.object.isRequired,
};
