const EMAIL = "viktorkhotimchenko@gmail.com";

const EmailContactLink = (): JSX.Element => {
  return (
    <a className="text-logo-orange" href={`mailto:${EMAIL}`}>
      {EMAIL}
    </a>
  );
};

export default EmailContactLink;
