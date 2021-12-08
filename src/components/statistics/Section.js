import PropTypes from 'prop-types';
import Statistics from './Statistics';
export default function Section({ items }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {items.map(item => (
          <li key={item.id} className="item">
                <Statistics
                    label={item.label}
                    percentage={item.percentage}
                />
          </li>
        ))}
      </ul>
    </section>
  );
}
Section.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
