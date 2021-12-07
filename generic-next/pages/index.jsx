import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { Films } from '../components/Films';
import { decrement, increment } from '../store/ui/uiSlice';

export default function Home({ hello, films }) {
  const count = useSelector(({ ui }) => {
    return ui.count;
  });

  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>Hello world</title>
      </Head>

      <div className="flex flex-col">
        <header className="container mx-auto py-4">
          Menu
          {hello}
        </header>

        <main className="container mx-auto py-4 flex-grow">
          insert forms
          <button
            onClick={() => {
              dispatch(decrement());
            }}
          >
            Decrement
          </button>
          <div>{count}</div>
          <button
            onClick={() => {
              dispatch(increment());
            }}
          >
            Increment
          </button>
        </main>

        <footer className="container mx-auto py-4">Footer</footer>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  // const response = await fetch('https://swapi.dev/api/films');
  // const data = await response.json();

  return {
    props: {
      hello: 'world',
      films: [],
    },
  };
};
