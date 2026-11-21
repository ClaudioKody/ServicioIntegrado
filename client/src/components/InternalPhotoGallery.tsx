import type { ServicePhoto } from "../lib/service-content";

type InternalPhotoGalleryProps = {
  photos: ServicePhoto[];
  label: string;
};

export default function InternalPhotoGallery({ photos, label }: InternalPhotoGalleryProps) {
  const galleryPhotos = photos.slice(1);
  if (galleryPhotos.length === 0) return null;

  return (
    <div className={`internal-photo-grid ${galleryPhotos.length === 1 ? "single-photo" : ""}`} aria-label={label}>
      {galleryPhotos.map((item) => (
        <figure key={item.file}>
          <img src={item.file} alt={item.alt} loading="lazy" decoding="async" width="900" height="650" />
          <figcaption>{item.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}
