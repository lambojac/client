import './Landing.css'
import land from '../../asset/brand/men2.png'
import { Link } from "react-router-dom"
import { Button } from "@mui/material";

const Landing = () => {
    return ( 
        <div className="landing__container">
            <div className="landing__header__container">
                <div className="landing__header">
                    <h3 className="landing__header__main">Mix reality with Meta Quest 3</h3>
                    <h1 className="landing__header">Get Asgard's Wrath 2 free ($59.99 USD value)—and receive a 6-month trial to Meta Quest+ ($47.94 USD value) when you upgrade to 512GB.** </h1>
                    <Link to="/shop">
                        <Button variant='outlined' sx={[ {width: '190px', height: '50px', borderRadius: '20px' , fontWeight: '700', backgroundColor: 'none', borderColor: 'black', color: 'black' }, {'&:hover': {  backgroundColor: "black" , color: "#FFE26E", borderColor: 'black'}}]}>Add to bag</Button>
                    </Link>
                </div>
            </div>
            <div className="landing__image__container">
    
            </div>
        </div>
     );
}
 
export default Landing;