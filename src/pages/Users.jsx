import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

function NewUsers() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <p>
        Please write all your real data carefully and do not share it with others.
      </p>
      <SignupForm />
    </>
  );}

export default NewUsers;
