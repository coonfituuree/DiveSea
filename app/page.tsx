import Container from "@/shared/ui/Container";
import TopCollecitonGrid from "@/shared/ui/forHomePage/TopCollecitonGrid";
import TopCollection from "@/shared/ui/forHomePage/TopCollection";

export default function Home() {
  return (
    <div>
      <Container>Home</Container>
      {/* <TopCollection /> */}
      <TopCollecitonGrid />
    </div>
  );
}
