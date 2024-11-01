import { RingLoader } from "react-spinners";
import { Container } from "react-bootstrap";

export const Loader = () => {
  return (
    <Container
      className="ctn d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "var(--background)", height: "100vh" }}
    >
      <RingLoader color="var(--foreground)" />
      <h1 style={{ color: "var(--foreground)" }}>Loading</h1>
    </Container>
  );
};
