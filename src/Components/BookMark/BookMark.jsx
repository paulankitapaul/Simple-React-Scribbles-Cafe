

const BookMark = ({bookmark}) => {
    const{title} = bookmark
    return (
        <div className="bg-slate-200 p-3 m-3 rounded-xl">
           <h3 className="text-2xl">{title}</h3> 
        </div>
    );
};

export default BookMark;