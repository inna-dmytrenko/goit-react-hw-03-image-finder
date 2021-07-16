import { ImSpinner9 } from 'react-icons/im';
import { Loader } from './Loader.styled';

export default function PhotoLoader() {
  return (
    <Loader>
      <ImSpinner9 className="icon-spin" />
      Loading...
    </Loader>
  );
}
