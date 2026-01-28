import Dot from './Dot';

interface DotListProps {
  allowedValues: number[];
  currentValue: number;
  distanceBetweenDots: number;
}

const Dots: React.FC<DotListProps> = ({ allowedValues, currentValue, distanceBetweenDots }) => (
  <>
    {allowedValues.map((value, index) => (
      <Dot index={index} key={value} completed={value < currentValue} distanceBetweenDots={distanceBetweenDots} />
    ))}
  </>
);

export default Dots;
