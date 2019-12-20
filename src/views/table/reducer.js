const tableList = (state = [], action) => {
  switch (action.type) {
    case 'UPDATA_TABLE_RESPONSE':
      return action.data
    default:
      return state
  }
}

export default tableList