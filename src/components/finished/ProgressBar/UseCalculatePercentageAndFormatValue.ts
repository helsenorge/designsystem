import {useState, useEffect} from 'react';

interface CalculatePercentageAndFormatValueProps {
  min: number;
  max: number;
  value: number;
}

export function useCalculatePercentageAndFormatValue({
  min,
  max,
  value,
}: CalculatePercentageAndFormatValueProps): [number, number] {
  const [[percentage, formatValue], setPercentageAndFormatValue] = useState([0, 0]);
  useEffect(() => {
    if (value <= min) {
      setPercentageAndFormatValue([0, min]);
    } else if (value >= max) {
      setPercentageAndFormatValue([100, max]);
    } else {
      setPercentageAndFormatValue([((value - min) / (max - min)) * 100, value]);
    }
  }, [min, max, value]);
  return [percentage, formatValue];
}
