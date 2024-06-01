import { keys } from 'ramda'

/***********************************/
/*
 * Common / General
 */
export const I18N_ERROR_KEY = 'ErrorList'
export const PRECISION = 6

export const RIGHT_EAST_KEY = 39
export const LEFT_WEST_KEY = 37
export const UP_NORTH_KEY = 38
export const DOWN_SOUTH_KEY = 40

export const DEFAULT_DARK_GREY = '#333'
export const DEFAULT_MEDIUM_GREY = '#aaa'
export const DEFAULT_LIGHT_GREY = '#eee'

export const TECH_STACK_COUNT = 24


/***********************************/
/*
 * Histogram
 */
export const HISTOGRAM_BAR_LIST_COUNT = 1
export const HISTOGRAM_BAR_LIST_MARGIN = 1
export const HISTOGRAM_BAR_WIDTH = 1
export const HISTORGRAM_HEIGHT = 74.0 // vh units
export const TOP_SPACER = 1.1 // Add a bit of space above the largest bar, in YAxis units


/***********************************/
/*
 * Hue
 */
export const CONTRAST_TOGGLE_MINIMUM = 11 // contrast toggling doesn't work with small numbers that
                                         // naturally contrast when spread around the wheel
export const USE_HUE_WHEEL = false
export const USE_HUE_CONTRAST_TOGGLE = false


/***********************************/
/*
 * Mistakes
 */
export const DATA_ADJUSTER_BUTTON_LIST = [
  0,
  3,
  5,
  7,
  11,
  17,
  23,
  31,
  41,
  53,
  67,
  87,
  113,
  143,
]


/***********************************/
/*
 * Predictive histogram
 */
export const PREDICTIVE_HISTOGRAM_BAR_LIST_MAP = {
   0: [],  5: [], 10: [], 15: [],
  20: [], 25: [], 30: [], 35: [],
  40: [], 45: [], 50: [], 55: [],
  60: []
}
export const PREDICTIVE_HISTOGRAM_MINIMUM_COUNT = 5
export const PREDICTIVE_HISTOGRAM_BUTTON_SET = [
  -12,
  -3,
  -1,
  +1,
  +3,
  +12
]
const barListCount = keys(PREDICTIVE_HISTOGRAM_BAR_LIST_MAP).length
export const PREDICTIVE_HISTOGRAM_BLOCK_SIZE = (
  100
  -
  (
    barListCount
    -
    1
  )
)
/
(
  barListCount
  *
  2
)
export const PREDICTIVE_HISTOGRAM_HEIGHT = 56


/***********************************/
/*
 * Gantt Bars
 */
export const GANTT_BAR_HEIGHT = 44
export const GANTT_BAR_SPACER = 29
export const QUANTILE_LIST = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
export const QUANTILE_LIST_LONG = QUANTILE_LIST
export const QUANTILE_LIST_SHORT = [
  QUANTILE_LIST[1],
  QUANTILE_LIST[4],
  QUANTILE_LIST[7],
]
export const QUANTILE_DETAIL_THRESHOLD = 5
export const GANTT_SCALE_DEFAULT = {
  firstStep: 0,
  lastStep: 12,
  totalSteps: 12,
  stepDivision: 30,
}
export const TONE_KEY_LIST = [
  'good',
  'notGood',
  'bad',
  'veryBad',
  'neutral',
]
export const GANTT_TOGGLE_LIST = {
  deviation: true,
  label: true,
  statList: true,
  quantile: true,
  quantileNumber: false,
  mean: true,
  median: true,
  range: true,
  fatLines: false,
}


/***********************************/
/*
 * SVG
 */
export const SVG_SCALE = 500
export const SVG_SCALE_RADIUS = SVG_SCALE / 2
export const SVG_OFFSET = 0
export const GRAPH_LEGEND_LABEL_VALUE_SPACING = 3
export const GRAPH_LEGEND_HEIGHT = 20
export const GRAPH_LEGEND_STROKE_WIDTH = 2
export const GRAPH_LEGEND_WIDTH = 180
export const OUTCOME_MULTIPLIER = 2
export const OUTCOME_START = 15

/*
 * Block graph
 */
export const BLOCK_GRAPH_SVG_WIDTH = 500
export const BLOCK_GRAPH_SVG_HEIGHT = BLOCK_GRAPH_SVG_WIDTH
export const BLOCK_GRAPH_PERC_FACTOR = BLOCK_GRAPH_SVG_WIDTH / 100

/*
 * Drag graph
 */
export const DRAG_GRAPH_LABEL_SIZE = 52
export const DRAG_GRAPH_MINIMUM_SELECTED_RADIUS = 6
export const DRAG_GRAPH_SVG_SCALE = 640
export const DRAG_GRAPH_SVG_SCALE_RADIUS = DRAG_GRAPH_SVG_SCALE / 2
export const DRAG_GRAPH_SVG_VIEWBOX = `${SVG_OFFSET} ${SVG_OFFSET} ${DRAG_GRAPH_SVG_SCALE} ${DRAG_GRAPH_SVG_SCALE}`
export const DRAG_GRAPH_SVG_ZOOM_LIST = [1, 2, 3, 5, 10, 15, 20, 30, 50]
export const DRAG_GRAPH_ZOOM_DEFAULT = 2

/*
 * Line graph
 */
export const LINE_GRAPH_HORIZONTAL_SPACE = 200
export const LINE_GRAPH_LABEL_WIDTH = 90
export const LINE_GRAPH_LEGEND_TOP_OFFSET = 100
export const LINE_GRAPH_TOP_PADDING = 30
export const LABEL_LINE_GRAPH_GAP = 110

/*
 * Scatter graph
 */
export const SCATTER_SVG_SCALE = 700
export const SCATTER_DEFAULT_X_Y = {
  x: 'ms_2',
  y: 'ms_1',
}
export const SCATTER_SCALE_HIGHLIGHT = 5
export const SCATTER_SCALE_LABEL_OFFSET = 50
export const SCATTER_SCALE_NUMBER_OFFSET = 12
export const SCATTER_AXIS_LABEL_OFFSET = 36

/*
 * World map
 */
export const NON_ISLAND_TINY_TERRIROTORIES = [
  'Azerbaijan',
  'Bahrain',
  'Kosovo',
  'Luxembourg',
  'Oman',
  'Palestine',
]
export const TINY_TERRIROTORY_MAX = 1
export const WORLD_MAP_ON_SCREEN_HEIGHT = 77 // vh
export const WORLD_MAP_ON_SCREEN_WIDTH = 99 // vw
const LONGITUDE_SOUTH_FROM_EQUATOR = 90
const LONGITUDE_NORTH_FROM_EQUATOR = 90
const LONGITUDE_SHOWN =
  LONGITUDE_SOUTH_FROM_EQUATOR
  +
  LONGITUDE_NORTH_FROM_EQUATOR
const LATITUDE_SHOWN = 360
export const LATITUDE_BUFFER = 3 // gives a little room so places like Fiji are not right on the edge
const MAP_RATIO = LONGITUDE_SHOWN / LATITUDE_SHOWN
export const WORLD_MAP_SVG_SCALE_WIDTH = 950 + LATITUDE_BUFFER * 2
export const WORLD_MAP_SVG_SCALE_HEIGHT =
  WORLD_MAP_SVG_SCALE_WIDTH
  *
  MAP_RATIO
export const WORLD_MAP_SVG_CENTER_X = WORLD_MAP_SVG_SCALE_WIDTH / 2
export const WORLD_MAP_SVG_CENTER_Y = WORLD_MAP_SVG_SCALE_HEIGHT / 2
export const WORLD_MAP_SVG_SCALE = `0 0 ${WORLD_MAP_SVG_SCALE_WIDTH} ${WORLD_MAP_SVG_SCALE_HEIGHT}`
export const WORLD_MAP_ZOOM_LIST = [1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25, 30, 40]
export const WORLD_MAP_SVG_ZOOM_DEFAULT = 1
export const CIRCLE_COUNTRY_RADIUS = 1.3
export const WORLD_MAP_FOCUS_ZONE = false



/***********************************/
/*
 * Time-line heatmap
 */
export const CROSSOVER_TO_SERIOUS = 20

export const DATA_POINT_SUM_LIST = [
  'op_rating',
  'path_sev',
  'cel',
]

export const MONTH_TYPE_LIST = [
  null,
  'event-free',
  'future',
  'this-month',
]

// This number, higer than 255 restricts the increments to a reduced range that stays above black
// 510, double 255, drops in increments of 0.5
export const COLOR_RANGE_RESTRICTOR = 510

// null is just the regular severity reflecting month
export const TIME_LINE_FILTER_LIST = {
  clear: [null, null],
  i: ['condr', 'i'],
  viii: ['condr', 'viii'],
  vii: ['condr', 'vii'],
  F: ['outcome_type', 'F'],
  C: ['outcome_type', 'C'],
  B: ['outcome_type', 'B'],
  NSV: ['outcome', 'NSV'],
  UNK: ['outcome', 'UNK'],
}

export const TIME_LINE_FIRST_MONTH = '2005-01-01'



/***********************************/
/*
 * Year slider
 */
// in %
export const YEAR_SLIDER_BUTTON_WIDTH = 5
export const YEAR_SLIDER_END_PADDING = 0.5

