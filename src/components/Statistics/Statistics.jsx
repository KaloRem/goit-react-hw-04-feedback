export const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <ul>
      {options.map(option => {
        return (
          <li key={option[0]}>
            <p>
              {option[0]}: {option[1]}
            </p>
          </li>
        );
      })}
      <li key="total">
        <p>total: {total}</p>
      </li>
      <li key="positivePercentage">
        <p>Positive feedback: {positivePercentage}%</p>
      </li>
    </ul>
  );
};