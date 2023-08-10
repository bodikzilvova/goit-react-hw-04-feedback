import { StatisticsContainer } from './Container.styled';
import PropTypes from 'prop-types';

export const Container = props => (
  <StatisticsContainer>{props.children}</StatisticsContainer>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
