// FilterButtonList.story.js
import StoryBookPaddedWrapper from 'component/StoryBookPaddedWrapper/StoryBookPaddedWrapper'

import { ORDERED_FILTERS } from 'util/UtilFilter/UtilFilter'

import FilterButtonList from './FilterButtonList';

export default {
  component: FilterButtonList,
  decorators: [
    (Story) => (
      <StoryBookPaddedWrapper>
        <Story />
      </StoryBookPaddedWrapper>
    ),
  ],
};

const baseFilterButtonListProps = {
  currentFilterList: ORDERED_FILTERS,
  currentUrl: 'GanttBarList'
}

export const Primary = {
  render: () => {
    return (<FilterButtonList {...baseFilterButtonListProps} />)
  }
};
