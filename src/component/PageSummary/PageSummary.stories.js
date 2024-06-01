// PageSummary.story.js
import StoryBookPaddedWrapper from 'component/StoryBookPaddedWrapper/StoryBookPaddedWrapper'



import PageSummary from './PageSummary';

export default {
  component: PageSummary,
};

export const Primary = {
  render: () => {
    return (
      <StoryBookPaddedWrapper>
        <PageSummary />
      </StoryBookPaddedWrapper>
    )
  }
};
