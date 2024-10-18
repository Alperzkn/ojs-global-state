import { Box, Container } from "@mui/material";
import { useBearStore } from "../stores/counter-store";

export default function AboutPage() {
  /*   const [data, setData] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  if (!data) <h1>Blog Post</h1>; */

  const bears = useBearStore((state) => state.bears);

  return (
    <>
      <h1>About Page</h1> {/* <pre>{JSON.stringify(data)}</pre> */}
      <Box
        sx={{
          ...(bears < 0 && {
            color: "error.main",
            transition: "0.5s ease-out",
          }),
          ...(bears > 0 && {
            color: "success.main",
            transition: "0.5s ease-out",
          }),
          ...(bears == 0 && {
            color: "warning.main",
            transition: "0.5s ease-in",
          }),
        }}
      >
        <Container>There are {bears} bears</Container>
      </Box>
    </>
  );
}
