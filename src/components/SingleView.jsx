const SingleView = (props) => {
  const {item, setSelectedItem} = props;
  return (
    <dialog open={Boolean(item)}>
      <button
        className="single-view-close"
        type="button"
        onClick={() => setSelectedItem(null)}
      >
        Close
      </button>
      <h3>{item.title}</h3>
      {item.media_type.startsWith('image') ? (
        <img src={item.filename} alt={item.description} />
      ) : (
        <video controls>
          <source src={item.filename} />
        </video>
      )}
      <p>{item.description}</p>
      <p>Owner: {item.username}</p>
    </dialog>
  );
};
export default SingleView;
