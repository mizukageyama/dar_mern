import Masonry from '@/components/custom/Masonry';
import Note from '@/components/custom/Note';
import axios from '../api/axios';
import { useEffect, useState } from 'react';

const tempToken = '';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getNotes = async () => {
      try {
        // setLoading(true);
        const response = await axios.get('/api/notes', {
          signal: controller.signal,
        });

        console.log(response.data);
        isMounted && setNotes(response.data.data);
        // setLoading(false);

        return () => {
          isMounted = false;
          controller.abort();
        };
      } catch (error) {
        console.error(error);
      }
    };

    getNotes();
  }, []);

  return (
    <div>
      <Note />
      {/* {loading ? <p>Loading...</p> : <Masonry />} */}
    </div>
  );
};

export default Notes;
