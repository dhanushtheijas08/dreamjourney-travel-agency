import img1 from "../../asserts/photo-gallery/gallery-1.jpg";
import img2 from "../../asserts/photo-gallery/gallery-2.jpg";
import img3 from "../../asserts/photo-gallery/gallery-3.jpg";
import img4 from "../../asserts/photo-gallery/gallery-4.jpg";
import img5 from "../../asserts/photo-gallery/gallery-5.jpg";
import img6 from "../../asserts/photo-gallery/gallery-6.jpg";

const PhotoGallery = function () {
  return (
    <section className="bg-primary">
      <div className="text-center">
        <span className="text-purple font-medium tracking-wider text-lg">
          PHOTO GALLERY
        </span>
        <h3 className="text-4xl font-medium">Photo's From Travel</h3>
      </div>

      <div className="flex justify-evenly items-center mt-16">
        <div className="flex flex-col gap-5">
          <div className="flex gap-6 justify-center items-center">
            <img src={img1} alt="gallery" className="h-60 rounded-3xl" />
            <img src={img2} alt="gallery" className="h-60 rounded-3xl" />
          </div>

          <img src={img5} alt="gallery" className="h-48 rounded-3xl" />
        </div>

        <div>
          <img src={img3} alt="gallery" className="w-[23rem] rounded-3xl" />
        </div>

        <div className="flex flex-col gap-5">
          <img src={img4} alt="galaery" className="h-52 rounded-3xl" />
          <img src={img6} alt="galaery" className="h-52 rounded-3xl" />
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
