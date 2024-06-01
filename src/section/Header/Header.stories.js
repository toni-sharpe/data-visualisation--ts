// Header.story.js
import StoryBookPaddedWrapper from 'component/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import { ORDERED_FILTERS } from 'util/UtilFilter/UtilFilter'

import Header from './Header';

export default {
  component: Header,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseHeaderProps = {
  currentFilterList: ORDERED_FILTERS,
  currentUrl: 'GanttBarList'
}

export const Primary = {
  render: () => {
    return (
      <Header {...baseHeaderProps} />
    )
  }
};
