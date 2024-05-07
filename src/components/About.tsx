import { Typography } from "@mui/material";

type Props = {
    description:string
}

const About = (props: Props) => {

  const {description}=props

  return (
    <>
    <Typography variant="h5" mt={2} fontWeight="bold" textTransform="capitalize"> about this place</Typography>
    <Typography fontSize="1.1rem" pt={1} textAlign="justify">{description}</Typography>
    </>
  )
};

export default About;