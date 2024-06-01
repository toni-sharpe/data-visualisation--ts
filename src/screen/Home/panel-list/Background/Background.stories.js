// Background.story.js
import StoryBookPaddedWrapper from 'component/StoryBookPaddedWrapper/StoryBookPaddedWrapper'



import Background from './Background';

export default {
  component: Background,
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
      <Background />
    )
  }
};
