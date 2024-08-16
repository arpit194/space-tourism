import Navbar from "./nav/Navbar";

type PageWrapperProps = {
  children: React.ReactNode;
};

const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default PageWrapper;
