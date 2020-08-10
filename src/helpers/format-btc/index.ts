const formatBtc = (satoshiValue: number): string => {
  return (satoshiValue / 100000000).toFixed(8);
}

export default formatBtc;
