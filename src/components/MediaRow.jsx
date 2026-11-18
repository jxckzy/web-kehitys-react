import {Link} from 'react-router';

const MediaRow = ({item, selectedItem, setSelectedItem}) => {
  return (
    <tr onClick={() => setSelectedItem(item)}>
      <td>
        <button
          type="button"
          aria-pressed={selectedItem?.media_id === item.media_id}
          onClick={(event) => {
            event.stopPropagation();
            setSelectedItem(item);
          }}
        >
          <img src={item.thumbnail} alt={item.title} />
        </button>
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>
        <Link to="/single" state={item}>
          Display
        </Link>{' '}
      </td>
    </tr>
  );
};

export default MediaRow;
