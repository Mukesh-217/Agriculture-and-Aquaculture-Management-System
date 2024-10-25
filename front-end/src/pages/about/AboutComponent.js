import React from 'react'
import './AboutComponent.scss'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
function AboutComponent(props) {
    React.useEffect(()=>{
        props.setAnime(false)
    },[])
    console.log(props.theme)
    return (
        <div>
            <Header theme={props.theme} setTheme={props.setTheme} style={{position:'fixed'}} />
            <div className="aboutsection" style={{textAlign: 'left',marginLeft:'5vh',width:'85vw'}}>
                <Fade bottom duration={2000} >
                    <h1 style={{marginTop:'50px'}}>ABOUT AAS </h1>
                </Fade>
                <Fade bottom duration={2000}>
                    <p className="jiljiljiga" style={{marginTop:'15px',color:props.theme.secondaryText,marginLeft:'5vh'}} >
                    Agriculture is the science and art of cultivating plants and livestock. Agriculture was the key development in the rise of sedentary human civilization, whereby farming of domesticated species created food surpluses that enabled people to live in cities.
</p>
                   <p className="jiljiljiga" style={{marginTop:'15px',color:props.theme.secondaryText,marginLeft:'5vh'}}>Aquaculture (less commonly spelled aquiculture), also known as aqua farming, is the farming of fish, crustaceans, mollusks, aquatic plants, algae, and other organisms. Aquaculture involves cultivating freshwater and saltwater populations under controlled conditions; and can be contrasted with commercial fishing, which is the harvesting of wild fish. Mariculture commonly known as marine farming refers to aquaculture practiced in marine environments and in underwater habitats, as opposed to in freshwater. Particular kind of aquaculture includes fish farming, shrimp farming, oyster farming, mariculture, alga culture (such as seaweed farming), and the cultivation of ornamental fish.</p>
                   <p className="jiljiljiga" style={{marginTop:'15px',color:props.theme.secondaryText,marginLeft:'5vh'}}>
Aquaculture is the controlled process of cultivating aquatic organisms, especially for human consumption. It's a similar concept to agriculture, but with fish instead of plants or livestock. Aquaculture is also referred to as fish farming.</p>
                </Fade>
                <Fade bottom duration={2000}>
                    <h1 style={{marginTop:'50px'}}>CULTIVATION OF CROPS</h1>
                </Fade>
                <Fade bottom duration={2000}>
                <p className="jiljiljiga" style={{marginTop:'15px',color:props.theme.secondaryText,marginLeft:'5vh'}}>
                Cultivation of crops often first involves tilling (or plowing) the land. (A machine that does this is called a cultivator). It also involves planting seeds and then watering them and making sure they are growing properly. When crops and plants are cultivated, they are taken care of until they are ready to be harvested.cultivation, in agriculture and aquaculture, the loosening and breaking up (tilling) of the soil or, more generally, the raising of crops.
                </p>
                </Fade>
                <Fade bottom duration={2000}>
                    <h1 style={{marginTop:'50px'}} >LAND SUITABLE FOR CROPS</h1>
                </Fade>
                <Fade bottom duration={2000}>
                <p className="jiljiljiga" style={{marginTop:'15px',color:props.theme.secondaryText,marginLeft:'5vh'}}>Cropland is land used for the cultivation of crops, both temporary (annuals) and permanent (perennials), and may include areas periodically left fallow or used as temporary pasture. Permanent meadows and pastures are land used for livestock grazing.</p>
                <p className="jiljiljiga" style={{marginTop:'15px',color:props.theme.secondaryText,marginLeft:'5vh'}}>
The favourable soil for farming is loamy soil. It has an equal amount of clay, sand, and silt. They are highly productive for the growth of crops.</p>
                </Fade>
                <Fade bottom duration={2000}>
                    <h1 style={{marginTop:'50px'}}>HISTORY OF CROPS</h1>
                </Fade>
                
                <Fade bottom duration={2000}>
                <p className="jiljiljiga" style={{marginTop:'15px',color:props.theme.secondaryText,marginLeft:'5vh'}}>Farming started in the predynastic period at the end of the Paleolithic, after 10,000 BC. Staple food crops were grains such as wheat and barley, alongside industrial crops such as flax and papyrus. In India, wheat, barley and jujube were domesticated by 9,000 BC, soon followed by sheep and goats.</p>
                 <p className="jiljiljiga" style={{marginTop:'15px',color:props.theme.secondaryText,marginLeft:'5vh'}}>
Agricultural communities developed approximately 10,000 years ago when humans began to domesticate plants and animals. By establishing domesticity, families and larger groups were able to build communities and transition from a nomadic hunter-gatherer lifestyle dependent on foraging and hunting for survival.
</p>
                </Fade>
            </div>
            <Footer theme={props.theme} />
        </div>
    )
}

export default AboutComponent
