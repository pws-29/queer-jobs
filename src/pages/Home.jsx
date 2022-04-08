import MainContent from "../components/organisms/home/MainContent";
import PlansContent from "../components/organisms/home/PlansContent";
import NumbersContent from "../components/organisms/home/NumbersContent";
import Spacer from "../components/atoms/Spacer";

function Home() {
  return (
    <>
      <MainContent />
      <Spacer size={100} />
      <PlansContent />
      <Spacer size={100} />
      <NumbersContent />
    </>
  );
};

export default Home