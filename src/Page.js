import React from 'react';
import Box from '@mui/material/Box';
import {TextField,Button} from '@mui/material';



const MyBox = () => {
    return (
        <form>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '90%' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" label="Standard" variant="standard" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
                <input variant="contained" type="submit" value="send" />
            </Box>
        </form>
        
    )
}

const Page = () => {
    const data = [
        {}
    ]
    return (
        <MyBox/>
    );
};
  
export default Page;
