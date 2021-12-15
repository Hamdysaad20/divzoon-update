import ReusedHeader from '../components/reusedHeader'
import Team from '../components/team'
import Footer from '../components/footer'
import { motion } from "framer-motion"
const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };
function hireDev() {
    return (
        <div>
            <ReusedHeader 
           H1headerGray="Hire The Best Developers... "
           H2headerRed="You Choose ! "  
            pheader="Get dedicated Developers to work on your project and make your development more faster with more developers."
            getStarted="Get Started"
            hrefab="/contactus"
            whatWeDo="See Your Developers" 
            hrefbb="/team"
            imageSrc="/tgfh.png"
            
          />
           <motion.div
    initial="hidden"
    animate="visible"
    variants={variants}
  />
<Team/>

<Footer/>
        </div>
    )
}

export default hireDev
