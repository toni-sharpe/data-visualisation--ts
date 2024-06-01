// KeyHintToggle.story.js
import StoryBookPaddedWrapper from 'component/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import KeyHintToggle from './KeyHintToggle';

export default {
  component: KeyHintToggle,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

export const Selected = {
  render: () => {
    return (
      <KeyHintToggle />
    )
  }
};
