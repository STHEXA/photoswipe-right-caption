import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import type { ImageData } from "../types";

export type PhotoSwipeGalleryProps = {
  galleryID: string;
  images: ImageData[];
};

export default function PhotoSwipeGallery({
  galleryID,
  images,
}: PhotoSwipeGalleryProps) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      // @ts-expect-error: 型定義が提供されていないため、一時的に無視
      lightbox = null;
    };
  }, [galleryID]);

  return (
    <div className="pswp-gallery" id={galleryID}>
      {images.map((image, index) => (
        <a
          href={image.src}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          key={galleryID + "-" + index}
          target="_blank"
          rel="noreferrer"
        >
          <img src={image.thumbnail} alt="" />
        </a>
      ))}
    </div>
  );
}
