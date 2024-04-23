import { useEffect, useState } from 'react';
import { getAllCamper } from '../../services/api';
import { CampersList } from '../../components/CampersList/CampersList';

import { LoadMoreBtn } from './CatalogPage.styled';

export default function CatalogPage() {
  const [campers, setCampers] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleCamperCount, setVisibleCamperCount] = useState(4);

  useEffect(() => {
    async function getCamper() {
      try {
        const data = await getAllCamper();
        setCampers(data);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getCamper();
  }, []);

  const loadMoreCamper = () => {
    setVisibleCamperCount(prevCount => prevCount + 4);
  };

  return (
    <div>
      {error && (
        <p>Oops! Something went wrong! Please try reloading this page.</p>
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <CampersList campers={campers.slice(0, visibleCamperCount)} />

          {campers.length > visibleCamperCount && (
            <LoadMoreBtn onClick={loadMoreCamper}>Load more</LoadMoreBtn>
          )}
        </>
      )}
    </div>
  );
}
