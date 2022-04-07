import MainContent from "../components/organisms/home/MainContent";
import PlansContent from "../components/organisms/home/PlansContent";
import Spacer from "../components/atoms/Spacer";

function Home() {
  return (
    <>
      <MainContent />
      <Spacer size={100} />
      <PlansContent />
    </>
  );
};

export default Home