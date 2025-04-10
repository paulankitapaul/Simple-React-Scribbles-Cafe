import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleBookMark,handleMarkAsRead }) => {
    const { title, cover, author_img, reading_time, author, posted_date, hashtags } = blog;
    
    return (
        <div className="mb-20 space-y-4">
            <img className="mb-8" src={cover} alt={`cover of the picture is: ${title}`} />
            <div className="flex justify-between mb-4">
                <div className="flex">
                    <img className="w-14 rounded-full h-14 pt-1" src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className="text-3xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button className='ml-2 text-2xl text-red-600' onClick={() => handleBookMark(blog)}>
                        <FaBookmark />
                    </button>
                </div>
            </div>

            <h3 className="text-4xl font-bold">{title}</h3>
            <p>
                {hashtags && hashtags.map((hash, index) => (
                    <span key={index}> <a href="#">{hash}</a> </span>
                ))}
            </p>
            <button className='text-purple-800 font-bold underline' onClick={()=>handleMarkAsRead(reading_time)}>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.shape({
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        author_img: PropTypes.string,
        reading_time: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
        posted_date: PropTypes.string.isRequired,
        hashtags: PropTypes.arrayOf(PropTypes.string)
    }).isRequired,
    handleBookMark: PropTypes.func.isRequired
};

export default Blog;
