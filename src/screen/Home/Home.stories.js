// Home.story.js
import StoryBookPaddedWrapper from 'component/StoryBookPaddedWrapper/StoryBookPaddedWrapper'



import Home from './Home';

export default {
  component: Home,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper isScreenWidth>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

export const Primary = {
  render: () => {
    return (
      <Home />
    )
  }
};
