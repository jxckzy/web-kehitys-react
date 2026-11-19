import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const location = useLocation();
  const item = location.state;
  console.log('Location', location);
  console.log('Location state', location.state);

  const navigate = useNavigate();

  return (
    <>
      <h2>Single media file</h2>
      <h3>{item.title}</h3>
      {item.media_type.startsWith('image') ? (
        <img src={item.filename} alt={item.description} />
      ) : (
        <video className="single-media-video" controls>
          <source src={item.filename} />
        </video>
      )}
      <p>{item.description}</p>
      <p>Owner: {item.username}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};

export default Single;
