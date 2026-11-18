// write "rafce" to generate a React component template
// home.jsx for future use
import MediaRow from '../components/MediaRow';
import SingleView from '../components/SingleView';
import {useState, useEffect} from 'react';
import {fetchData} from '../utils/fetchData';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // ensimmäisessä renderöinnissä dataa ei ole vielä haettu
  // siksi tyhjä array
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      const json = await fetchData('test.json');
      setMediaArray(json);
    };
    getMedia();
  }, []);

  console.log(mediaArray);

  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
      {selectedItem && (
        <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
      )}
    </>
  );
};

export default Home;
