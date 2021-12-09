import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/ui/uiSlice';

export default function Home({ hello, films }) {
  const count = useSelector(({ ui }) => {
    return ui.count;
  });

  const { authenticated } = useSelector(({ auth }) => {
    return auth;
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
          <div className="mt-4">
            User is {authenticated ? 'logged in' : 'logged out'}
          </div>
        </header>

        <main className="container mx-auto py-4 flex-grow">
          insert forms
          <div className="mt-16">
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
          </div>
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
      initialReduxState: {
        ui: {
          count: 42,
        },
      },
    },
  };
};
