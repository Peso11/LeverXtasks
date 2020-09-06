function caseInsensitiveSearch(str, searchStr) {
  if(str.toLowerCase().includes(searchStr.toLowerCase())){
    return 'Matched'
  } else {
    return 'Not matched'
  }
}