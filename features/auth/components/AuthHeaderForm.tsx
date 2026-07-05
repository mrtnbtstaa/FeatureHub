type HeaderProps = {
    title: string;
    content: string;
}

const AuthHeaderForm = ({title, content} :  HeaderProps) => {
  return (
    <div>
      <h2 className="text-custom-text-color tracking-wider font-bold text-2xl md:text-3xl lg:text-4xl">
        {title}
      </h2>
      <p className="tracking-wide text-sm md:text-md lg:text-lg">
        {content}
      </p>
    </div>
  );
};

export default AuthHeaderForm;
