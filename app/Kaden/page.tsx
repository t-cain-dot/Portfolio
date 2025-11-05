"use client"
 
import {Button} from "@/components/ui/button"
import { useState } from 'react';


export default function Kaden(){
    const [goonCount, setGoonCount] = useState(0);
    function count(){
        setGoonCount(goonCount + 1);
        
    }
const data = 
    {
      "name": "John Doe",
      "age": 30,
      "isStudent": false,
      "courses": [
        {"title": "History 101", "credits": 3},
        {"title": "Math 202", "credits": 4}
      ], 
      "Goop": () => {
        console.log("Goop");
      }
    }
data.Goop();

const zombie = {
    "health": 90,
    "items": ["Infinity Gauntlet", "Kameekameehahaahah", "Ancient Magics", "Deagle from CS", "Gold deagle from cod4",],
    "active-effects": {
        "Heroin": "Crash Out, steal from your mom",
        "Cocaine": "Speed Boost, Might chop your foot off",
        "Marijuana": "Get cracked at rl and skateboarding but never go pro cause its too hard, kinda bs",
    },
    "Walk": () => {
        console.log("your dasher is arriving")
    },
    "Speak": (ggg: string) => {
        console.log(ggg);
    },

    

}
zombie.Speak("");




    return <div>
        <h1>
            Hi Kaden, im watching you :D 
        </h1>
        <Button onClick = {count}>
            Goon!
        </Button>

        <p>
            Gooned this many times today! {goonCount}
        </p>
    </div>
}
