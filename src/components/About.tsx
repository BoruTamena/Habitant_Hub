import { Box, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";

type Props = {
    description:string,
    amenities:string[]
}

const About = (props: Props) => {

  const {description,amenities}=props

  return (
    <>
    <Typography variant="h5" mt={3} fontWeight="bold" textTransform="capitalize"> about this place</Typography>
    <Typography fontSize="1.1rem" pt={2} textAlign="justify">{description}</Typography>
    <Typography variant ="h6" pt={5}> What This Place Offer </Typography>

      <Stack direction="row" alignItems="center" spacing={3} useFlexGap flexWrap="wrap" p={3}>
        {
          amenities.map((item,index)=><Box key={index}>
            <Typography >{item}</Typography>
          </Box>)
        }

      </Stack>
    </>
  )
};

export default About;