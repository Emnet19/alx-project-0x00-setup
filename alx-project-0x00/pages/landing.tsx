import { div } from "framer-motion/client"
import Card from "@/components/Card"

const Landing: React.FC=()=>{
    return(
        <div>
            <Card />

            <h1 className="text-xl font-extralight">Landing Page</h1>
            <button className="border py-4 rounded-md text-2xl">Enter Your title here....</button>
        </div>
    )
}
export default Landing;