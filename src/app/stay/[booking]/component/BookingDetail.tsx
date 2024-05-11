import { Box ,Typography,Stack} from "@mui/material";

type Props = {

    adult:string,
    childrens:string,
    infant:string,
    pit:string,



}

const BookingDetail = (props: Props) => {
  return (
    <Box mt={3} bgcolor={"primary.light"} p={3} borderRadius={3}>

    <Typography fontWeight={"bold"}>Booking Detail </Typography>
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Typography mt={3}>Adult</Typography>
        <Typography mt={3}>{props.adult}</Typography>
    </Stack>

    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Typography mt={3}>Childrens</Typography>
        <Typography mt={3}>{props.childrens}</Typography>
    </Stack>

    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Typography mt={3}>Infant</Typography>
        <Typography mt={3}>{props.infant}</Typography>
    </Stack>

    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Typography mt={3}>Pit</Typography>
        <Typography mt={3}>{props.pit}</Typography>
    </Stack>

</Box>
  )
};

export default BookingDetail;