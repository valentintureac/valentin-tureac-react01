// import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { patchGameLost } from '../actions/creators/profile';
import { Authorize } from '../components/auth/Authorize';
import { Creature } from '../components/profile';
import { Button } from '../components/ui';
import { gameEnded, gameStarted } from './../actions/creators/game';

export const GamePage = () => {
  const dispatch = useDispatch();
  const { playing } = useSelector(({ game }) => {
    return game;
  });

  useEffect(() => {
    return () => {
      if (playing) {
        dispatch(gameEnded());
      }
    };
  }, [dispatch, playing]);

  return (
    <div className="p-4 container flex mx-auto">
      <Authorize roles={['admin', 'super-admin', 'trainer']} className="flex">
        <div className="w-full mb-2 mb:w-8/12 flex items-center justify-around">
          {playing ? (
            <>
              <Button
                title="Win game"
                type="button"
                onClick={() => {
                  dispatch(gameEnded());
                }}
              >
                Win Game
              </Button>
              <Button
                title="Lose game"
                type="button"
                skin="dangerInverted"
                onClick={() => {
                  dispatch(patchGameLost());
                  dispatch(gameStarted());
                }}
              >
                Lose Game
              </Button>
              <Button
                title="Quit"
                type="button"
                skin="danger"
                onClick={() => {
                  dispatch(gameEnded());
                }}
              >
                Quit
              </Button>
            </>
          ) : (
            <Button
              title="Start Game"
              type="button"
              onClick={() => {
                dispatch(patchGameLost());
                dispatch(gameStarted());
              }}
            >
              Start Game
            </Button>
          )}
        </div>

        <div className="w-full flex flex-col items-center justify-center md:w-4/12">
          <Creature></Creature>
        </div>
      </Authorize>
    </div>
  );
};

export default GamePage;
