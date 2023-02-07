import {Button} from "@mui/material";

const FomButton = ({name,validate}) => {

    return (
        <>
            <Button type="submit" variant="contained" disabled={!validate}>{name}</Button>
        </>
    )

}

export default FomButton;