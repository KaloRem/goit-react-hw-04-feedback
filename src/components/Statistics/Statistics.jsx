export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li>
        <p>
          Good:
          <span> {good}</span>
        </p>
      </li>
      <li>
        <p>
          Neutral:
          <span> {neutral}</span>
        </p>
      </li>
      <li>
        <p>
          Bad:
          <span> {bad}</span>
        </p>
      </li>
      <li>
        <p>
          total: <span> {total}</span>
        </p>
      </li>
      <li>
        <p>
          Positive feedback:
          <span> {positivePercentage}%</span>
        </p>
      </li>
    </ul>
  );
};