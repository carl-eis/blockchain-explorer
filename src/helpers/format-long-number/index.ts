const formatLongNumber = (item?: number): string => {
  if (typeof item !== 'number') {
    return '-';
  }
  return item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default formatLongNumber;
