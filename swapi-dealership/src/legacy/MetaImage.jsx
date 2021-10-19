import { useEffect, useState } from 'react';

const baseUrl =
  'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI';
const apiKey = process.env.REACT_APP_WEB_SEARCH_KEY;
const host = 'contextualwebsearch-websearch-v1.p.rapidapi.com';

export const MetaImage = ({ term }) => {
  const [busy, setBusy] = useState(true);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const refinedSearchTerm = encodeURIComponent(`star wars ${term}`);
    const random = Math.floor(Math.random() * 2000) + 1;

    const timeoutId = setTimeout(() => {
      fetch(
        `${baseUrl}?q=${refinedSearchTerm}&pageNumber=1&pageSize=1&autoCorrect=true`,
        {
          headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': host,
            useQueryString: true,
          },
        },
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const imageUrl = data.value[0].url;

          setBusy(false);
          setImageUrl(imageUrl);
        });
    }, random);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  return (
    <>
      {busy === true ? (
        '...loading'
      ) : (
        <img className="img-fluid" src={imageUrl} alt={term}></img>
      )}
    </>
  );
};

export default MetaImage;
