function areaChartData(state = [], action) {
  switch(action.type) {
    case 'UPDATE_AREA_CHART':
      return [
        {
            year: action.year,
            month: action.month,
            lastYear: action.lastYear,
            thisYear: action.thisYear
        }
      ];
    default:
      return state;
  }
}

export default areaChartData;
