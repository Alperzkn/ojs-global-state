import { Box, Button, Container } from "@mui/material";
import { useBearStore } from "../stores/counter-store";

export default function BlogPage() {
  const bears = useBearStore((state) => state.bears);

  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const decreasePopulation = useBearStore((state) => state.decreasePopulation);
  const removeAllBears = useBearStore((state) => state.removeAllBears);

  return (
    <>
      <h1>Blog Page</h1>

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

      <Box mt={2}>
        <Container>
          <Button sx={{mr: 2}}
            variant="outlined"
            color="success"
            onClick={increasePopulation}
          >
            increase count
          </Button>
          <Button variant="outlined" color="error" onClick={decreasePopulation}>
            decrease count
          </Button>
          <Box mt={2}>
              <Button variant="outlined" color="error" onClick={removeAllBears}>
                remove bears
              </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
