import { Grid2 } from "@mui/material"
import { useMediaQuery } from "@mui/system"
import '../styles/page.style.scss';
import LeftIconsGroup from "@/app/components/page/logo/LeftIconsGroup";
import RightIconsGroup from "@/app/components/page/logo/RightIconsGroup";

const Logo = () => {
    const isMediaQueryMatch = useMediaQuery('(min-width:1199px)');

    return (
        <Grid2 container spacing={3} justifyContent={'center'}>
            {isMediaQueryMatch && (<Grid2 size={{ lg: 3 }}>
                <LeftIconsGroup />
            </Grid2>)}

            <Grid2 size={{ lg: 6, xl: 6, md: 12 }} display={'flex'} justifyContent={'center'}>
                <div className="circle-default-outer">
                    <div className="circle-default-inner"></div>
                </div>

                <div className="spacer-horizontal"></div>
                <div className="logo"></div>

                <div className="circle-primary"></div>
            </Grid2>

            {isMediaQueryMatch && (<Grid2 size={{ lg: 3 }}>
                <RightIconsGroup />
            </Grid2>)}
        </Grid2>
    )
}

export default Logo