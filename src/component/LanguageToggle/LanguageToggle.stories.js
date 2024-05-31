// LanguageToggle.story.js
import StoryBookPaddedWrapper from 'component/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import LanguageToggle from './LanguageToggle';

export default {
  component: LanguageToggle,
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
      <LanguageToggle />
    )
  }
};
