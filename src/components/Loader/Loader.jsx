import { ImSpinner9 } from 'react-icons/im';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
const styles = {
  loader: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '40%',
    fontSize: 24,
  },
};
export default function PhotoLoader() {
  return (
    <div style={styles.loader}>
      <ImSpinner9 className="icon-spin" />
      Loading...
    </div>
  );
}
