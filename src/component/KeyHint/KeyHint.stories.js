// KeyHint.story.js
import StoryBookPaddedWrapper from 'component/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import KeyHint from './KeyHint';

export default {
  component: KeyHint,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

export const Primary = {
  render: () => {
    return (
      <KeyHint letter='x' isShown />
    )
  }
};
