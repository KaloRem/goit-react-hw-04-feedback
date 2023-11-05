export const Section = ({ title, children }) => {
  return (
    <section className="feedbackForm">
      <h2 className="feedbackFormTitle">{title}</h2>
      {children}
    </section>
  );
};