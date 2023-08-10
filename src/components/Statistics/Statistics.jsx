import {
  StatisticsGood,
  StatisticsNeutral,
  StatisticsBad,
  StatisticsTotal,
  StatisticsPercentage,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <StatisticsGood> Good: {good} </StatisticsGood>
      <StatisticsNeutral> Neutral: {neutral} </StatisticsNeutral>
      <StatisticsBad> Bad: {bad} </StatisticsBad>
      <StatisticsTotal>Total: {total}</StatisticsTotal>
      <StatisticsPercentage>
        Positive feedback: {positivePercentage}%
      </StatisticsPercentage>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
