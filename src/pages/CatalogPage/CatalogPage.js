import { useEffect, useState } from 'react';
import { getAllCamper } from '../../services/api';
import { CampersList } from '../../components/CampersList/CampersList';

export default function CatalogPage() {
  const [campers, setCampers] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCamper() {
      try {
        const data = await getAllCamper(); // Забираємо результат напряму
        setCampers(data); // Записуємо дані без деструктуризації
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getCamper();
  }, []);

  return (
    <div>
      <h1>Camper Catalog</h1>
      {error && (
        <p>Oops! Something went wrong! Please try reloading this page.</p>
      )}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        campers.length > 0 && <CampersList campers={campers} />
      )}
    </div>
  );
}
