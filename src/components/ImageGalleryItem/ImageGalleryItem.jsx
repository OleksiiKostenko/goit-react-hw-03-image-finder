import css from '../../css/Styles.module.css'

export const ImageGalleryItem = ({ images }) => {
  return (
    <>
    {images&&images.map((image) => <li key={image.id} className={css.ImageGalleryItem}>
        <img className={css.ImageGalleryItem_image} src={image.webformatURL
} alt={image.tags} />
      </li>)}</>
    )
};
 