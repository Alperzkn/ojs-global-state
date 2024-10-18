import { Box, Button, Grid2, TextField } from "@mui/material";
import { useUserStore } from "../stores/user-store";
import { ChangeEvent } from "react";

export default function HomePage() {
  /*   const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((oldCount) => oldCount + 1);
  };

  const decreaseCount = () => {
    setCount((oldCount) => oldCount - 1);
  };
 */

  const firstName = useUserStore((state) => state.firstName);
  const lastName = useUserStore((state) => state.lastName);
  const age = useUserStore((state) => state.getAge());
  const height = useUserStore((state) => state.height);
  const weight = useUserStore((state) => state.weight);
  const bmi = useUserStore((state) => state.getBmi());
  const bmiResult = useUserStore((state) => state.getBmiResult());
  const birthDate = useUserStore((state) => state.birthDate);
  const setFirstName = useUserStore((state) => state.setFirstName);
  const setLastName = useUserStore((state) => state.setLastName);
  const setBirthDate = useUserStore((state) => state.setBirthDate);
  const setHeight = useUserStore((state) => state.setHeight);
  const setWeight = useUserStore((state) => state.setWeight);

  const clearFirstName = useUserStore((state) => state.clearFirstName);
  const clearLastName = useUserStore((state) => state.clearLastName);
  const clearHeight = useUserStore((state) => state.clearHeight);
  const clearWeight = useUserStore((state) => state.clearWeight);

  //const userStore = useUserStore();
  console.log("result " + bmiResult);

  const handleChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleChangeBirthDate = (e: ChangeEvent<HTMLInputElement>) => {
    setBirthDate(e.target.valueAsDate!);
  };

  const handleChangeHeight = (e: ChangeEvent<HTMLInputElement>) => {
    setHeight(e.target.valueAsNumber || undefined);
    console.log("Height: " + e.target.valueAsNumber);
  };

  const handleChangeWeight = (e: ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.valueAsNumber || undefined);
    console.log("Weight: " + e.target.valueAsNumber);
  };

  return (
    <>
      <h1>Home Page</h1>
      <Box mb={2}>First Name: {firstName}</Box>
      <Box mb={2}>Last Name: {lastName}</Box>
      <Box mb={2}>Age: {age}</Box>
      <Box mb={2}>Height: {height}</Box>
      <Box mb={2}>Weight: {weight}</Box>
      <Box mb={2}>Bmi Score: {bmi}</Box>
      <Box mb={5}>Bmi: {bmiResult}</Box>

      <Box>
        <Grid2 container spacing={2}>
          <Grid2 size={4}>
            <TextField
              sx={{ pr: 2 }}
              id="firstNameText"
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={handleChangeFirstName}
            />
            <Button
              variant="outlined"
              color="error"
              sx={{ mt: 2, width: 0.7 }}
              onClick={clearFirstName}
            >
              Clear First Name
            </Button>
          </Grid2>
          <Grid2 size={4}>
            <TextField
              id="lastNameText-basic"
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={handleChangeLastName}
            />
            <Button
              variant="outlined"
              color="error"
              sx={{ mt: 2, width: 0.7 }}
              onClick={clearLastName}
            >
              Clear Last Name
            </Button>
          </Grid2>
          <Grid2 size={4}>
            <TextField
              sx={{ pr: 2 }}
              id="dateInput"
              variant="outlined"
              type="date"
              value={
                birthDate ? birthDate!.toLocaleDateString("en-CA") : undefined
              }
              onChange={handleChangeBirthDate}
            />
          </Grid2>
        </Grid2>
      </Box>
      <Box>
        <Grid2 container spacing={2} mt={4}>
          <Grid2 size={4}>
            <TextField
              sx={{ pr: 2 }}
              id="height"
              label="Height"
              variant="outlined"
              value={height}
              onChange={handleChangeHeight}
              type="number"
            />
            <Button
              variant="outlined"
              color="error"
              sx={{ mt: 2, width: 0.7 }}
              onClick={clearHeight}
            >
              Clear Height
            </Button>
          </Grid2>
          <Grid2 size={4}>
            <TextField
              sx={{ pr: 2 }}
              id="weight"
              label="Weight"
              variant="outlined"
              type="number"
              value={weight}
              onChange={handleChangeWeight}
            />
            <Button
              variant="outlined"
              color="error"
              sx={{ mt: 2, width: 0.7 }}
              onClick={clearWeight}
            >
              Clear First Name
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}

{
  /*       <Box textAlign={"center"}>
</Box>
<Box
  sx={{
    ...(count < 0 && {
      color: "error.main",
      transition: "0.5s ease-out",
    }),
    ...(count > 0 && {
      color: "success.main",
      transition: "0.5s ease-out",
    }),
    ...(count == 0 && {
      color: "warning.main",
      transition: "0.5s ease-in",
    }),
  }}
>
  <Container>Counter: {count}</Container>
</Box> */
}

{
  /*       <Box mt={2}>
  <Container>
    <Button variant="outlined" color="success" onClick={increaseCount}>
      increase count
    </Button>
    <Button variant="outlined" color="error" onClick={decreaseCount}>
      decrease count
    </Button>
  </Container>
</Box> */
}
