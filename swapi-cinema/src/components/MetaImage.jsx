import { useEffect, useState } from 'react';

const baseUrl =
  'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI';
const apiKey = process.env.REACT_APP_WEB_SEARCH_KEY;
const host = 'contextualwebsearch-websearch-v1.p.rapidapi.com';

export const MetaImage = ({ term }) => {
  const [busy, setBusy] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const refinedSearchTerm = encodeURIComponent(`star wards ${term}`);
    const random = Math.floor(Math.random() * 7500) + 1;

    setTimeout(() => {
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

          setImageUrl(imageUrl);
          setBusy(false);
        });
    }, random);
  }, []);

  return (
    <>
      {busy === true ? (
        'loading'
      ) : (
        <img className="img-fluid" src={imageUrl}></img>
      )}
    </>
  );
};

export default MetaImage;
