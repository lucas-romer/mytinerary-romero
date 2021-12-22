require('dotenv').config()

const Router = require('./routers/Routes')
const express = require("express")
const cors = require("cors")
const passport = require('./config/passport')
const app = express()

require('./config/database')

app.use(cors())
app.use(express.json())
app.use(passport.initialize())
app.use('/api', Router)


const citiesArray = [
    {
        name: "Paris",
        country: "France",
        image: "https://img.delicious.com.au/DGZCHR1s/del/2018/12/paris-france-97370-2.jpg",
        description: "History, culture, food and fashion in one picture-perfect city.",
        id:"1"

    },{
        name: "New York",
        country: "USA",
        image: "https://img.delicious.com.au/ttEaxwsa/del/2018/12/new-york-usa-97371-2.jpg",
        description: "The ever-bustline Big Apple is a must-see for every traveller.",
        id:"2"

    },{
        name: "Rome",
        country: "Italy",
        image: "https://img.delicious.com.au/BTJu9b76/del/2018/12/rome-italy-97372-2.jpg",
        description: "The eternal city is a heartland for food and history lovers.",
        id:'3'

    },{
        name: "London",
        country: "UK",
        image: "https://img.delicious.com.au/ZOmI5Coz/del/2018/12/london-uk-97375-2.jpg",
        description: "An essential destination for every traveller’s bucket list.",
        id:'4'

    },{
        name: "Tokyo",
        country: "Japan",
        image: "https://img.delicious.com.au/ErfAJ_zb/del/2018/12/tokyo-japan-97376-2.jpg",
        description: "The ultimate culture shock experience. ",
        id:5

    },{
        name: "Lisbon",
        country: "Portugal",
        image: "https://img.delicious.com.au/-a6x6DpP/del/2018/12/lisbon-portugal-97377-2.jpg",
        description: "A photogenic European vacation.",
        id:'6'

    },{
        name: "Barcelona",
        country: "Spain",
        image: "https://img.delicious.com.au/wvdCCshN/del/2018/12/barcelona-spain-97378-2.jpg",
        description: "An energetic Spanish city to explore.",
        id:'7'

    },{
        name: "Honolulu",
        country: "Hawaii",
        image: "https://img.delicious.com.au/x0_XXdmh/del/2018/12/honolulu-hawaii-97380-2.jpg",
        description: "For a quintessential Hawaiian holiday.",
        id:'8'

    },{
        name: "Istanbul",
        country: "Turkey",
        image: "https://img.delicious.com.au/WIXeICQZ/del/2018/12/istanbul-turkey-97382-2.jpg",
        description: "A place where the Middle East meets Asia.",
        id:'9'

    },{
        name: "Bangkok",
        country: "Thailand",
        image: "https://img.delicious.com.au/QvcF4Hu0/del/2018/12/bangkok-thailand-97383-2.jpg",
        description: "Follow the scent of street food to this must-see city.",
        id:'10'

    },{
        name: "Agra",
        country: "India",
        image: "https://img.delicious.com.au/2AHRryRu/del/2018/12/agra-india-97385-2.jpg",
        description: "See the Taj Mahal up-close in Agra.",
        id:'11'

    },{
        name: "Cairo",
        country: "Egypt",
        image: "https://img.delicious.com.au/3M0FMB5C/del/2018/12/cairo-egypt-97390-2.jpg",
        description: "An iconic city where history abounds.",
        id:'12'

    },{
        name: "Helsinki",
        country: "Finland",
        image: "https://img.delicious.com.au/zYT2qxH4/del/2018/12/helsinki-finland-97391-2.jpg",
        description: "A winter wonderland for the Christmas enthusiasts.",
        id:'13'

    },{
        name: "Berlin",
        country: "Germany",
        image: "https://img.delicious.com.au/9Ow8JVHu/del/2018/12/berlin-germany-97393-2.jpg",
        description: "The ultimate noir experience for art lovers.",
        id:'14'

    },{
        name: "Shanghai",
        country: "China",
        image: "https://img.delicious.com.au/1ri8bDOT/del/2018/12/shanghai-china-97394-2.jpg",
        description: "Food, fun and an active nightlife awaits.",
        id:'15'

    },
]

app.listen(4000, ()=>{
    console.log('listening...')
})