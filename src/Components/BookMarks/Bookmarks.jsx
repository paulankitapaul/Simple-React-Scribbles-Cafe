import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';

const Bookmarks = ({ bookMarks }) => {
    return (
        <div className="w-1/3 bg-gray-300 ml-4 mt-3">
            <h3 className='text-3xl  text-center '>BookMarked: {bookMarks?.length}</h3>
            {
                bookMarks.map(bookMark =><BookMark bookmark={bookMark}></BookMark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookMarks: PropTypes.array.isRequired
};

Bookmarks.defaultProps = {
    bookMarks: [],
};

export default Bookmarks;
