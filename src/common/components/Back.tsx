import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

interface BackProps {
  onClick: () => void;
  className?: string;
}

export const Back = ({ onClick, className = '' }: BackProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200 ${className}`}
    >
      <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
      Back
    </button>
  );
};
