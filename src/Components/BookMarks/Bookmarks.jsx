import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';

const Bookmarks = ({ bookMarks, markAsRead }) => {
    return (
        <div className="w-1/3 ml-4 mt-3"><h2>Spending-Time:{markAsRead}</h2>
            <div className=' bg-gray-300' >

                <h3 className='text-3xl  text-center '>BookMarked: {bookMarks?.length}</h3>
                {
                    bookMarks.map((bookMark,idx) => <BookMark key={idx} bookmark={bookMark} ></BookMark>)
                }
            </div>
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
