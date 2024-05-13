import { Star } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export type reviewProps = {
    "id":number,
    "review":string,
    "count":number
}

const ReviewCard = ({data}:{data:reviewProps}) => {

    const {review,id}=data
  return (
    <Box bgcolor="secondary.main" mt={1} p={1} borderRadius={2}>
        <Typography fontWeight="bold">full-name </Typography>
        <Typography textAlign="justify">{review}</Typography>

    </Box>
  )
};

export default ReviewCard;