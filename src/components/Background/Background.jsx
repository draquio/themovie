import React from "react";
import { ENV } from "../../utils";

export function Background(props) {
    const {movie} = props;
  if (!movie) return ""
  return (
    <div className="bgtop" style={{ opacity: 0.2 }}>
      <img src={`${ENV.Api_image_url_backgroud}${movie.backdrop_path}`} />
    </div>
  );
}
