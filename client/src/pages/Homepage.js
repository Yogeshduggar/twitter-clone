import React from 'react';
import DisplayError from 'components/DisplayError';
import TweetsBoard from 'components/TweetsBoard';
import { Container } from 'shared/layout';
import 'styled-components/macro';
import { useTweets } from 'utils/tweets';
import "./Homepage.css"

function Homepage() {
  const {
    data,
    error,
    status,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useTweets();

  return (
    <Container>
      {error ? (
        <DisplayError error={error} />
      ) : (
        <div
          css={`
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            border: 1px solid #eee;
            background-color: white;
            boder-shadow:5px 10px #D8BFD8;
            boder: solid 10px black;
          `} className='box'
        >
          <TweetsBoard
            queryKey={['tweets', {}]}
            loading={status === 'loading'}
            pages={data?.pages || []}
            isFetching={isFetching}
            isFetchingNextPage={isFetchingNextPage}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
          />
        </div>
      )}
    </Container>
  );
}

export default Homepage;
