export const Footer = ({ title }) => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>{title}</strong>.
        </p>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  title: "Copyright",
};
