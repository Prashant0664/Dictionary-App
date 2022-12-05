import axios from "axios"
import React from 'react'
import {MagnifyingGlassIcon, SpeakerWaveIcon} from '@heroicons/react/24/outline'
import categories from "./utils/languages"
import "../index.css"



const Hero = () => {
  
  
  const [category,setcategory]=React.useState("en")
  const [meaning,setmean]=React.useState([]);
  const [word,setword]=React.useState("");
  const [syn,setsyn]=React.useState(false);

  const dictionaryapi=async()=>{
    try{
      // const res = await axios.get(`/utils/Info`, {
			// 	params: {word}
			// });
			// const {data} = res;
			// const {definition} = data;
			// // split the response string into an array using regex
      // console.log("ll-",definition)
			// const newDefinition = definition.split();
			// setmean(newDefinition);
    // const app_id = "Prashant_2022";
    // const app_key = "3323b026";
    // const wordId = "ace";
    // const fields = "pronunciations";
    // const strictMatch = "false";
    // const options = {
    //   host: 'od-api.oxforddictionaries.com',
    //   port: '443',
    //   path: '/api/v2/entries/en-gb/' + wordId + '?fields=' + fields + '&strictMatch=' + strictMatch,
    //   method: "GET",
    //   headers: {
    //     'app_id': app_id,
    //     'app_key': app_key
    //   }
    // };
      // const data=await axios.get(`https://od-api.oxforddictionaries.com/api/v2/entries/'  + ${'en'} + '/'  + ${word}`, (resp) => {
      //   let body = '';
      //   resp.on('data', (d) => {
      //     body += d;
      //   });
      //   resp.on('end', () => {
      //     let parsed = JSON.stringify(body);
      //     console.log(parsed);
      //   })})

      const data=await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`) 
      setmean(data.data)
      // console.log(" m-",meaning);
    } catch(err){
      // console.log("w-",word," m-",meaning);
      // console.log(err)
  }}

  React.useEffect(()=>{
    dictionaryapi();
  },[word,category]);

  const handlec=(lang)=>{
    setcategory(lang);
    // console.log(category)
    setword("");
  }
  
  // const[plays,playa]=React.useState(false);
  // playa(true);
  const playa=(f)=>{
    var audio = new Audio(`${f}`);
    audio.play()
  }
  const [showv,setshowv]=React.useState(false);
  return (
    <>
      <div className='absolute h-full w-full mt-20 ml-0 mr-0 bg-gradient-to-b from-blue-700 '>
        <div className={`  h-[1000px]relative xsm:text-base flex flex-col bg-blue-700 m-10 md:m-6 sm:m-2 xsm:m-0 `}>
          <form className='relative flex m-2 mx-auto w-full mx-4 '>
              <input autoFocus={true}
                     onChange={(e)=>{e.target.value===""?setword(""):setword(e.target.value);e.target.value===""?setshowv(false):setshowv(true);}}
                     type="text"
                     value={word}
                     label="language"
                     className='xsm:text-sm p-2 xsm:text-base h-10 rounded-lg rounded-r-none w-[190%]'
                     placeholder='Search any Word'
                    //  onChange=
              />
              <button className=' sm:mr-4 xsm:text-sm md:px-2 sm:px-0 px-10 rounded-lg active:scale-125 transition-all duration-500 hover:bg-sky-400 rounded-l-none flex bg-blue-800 h-10 text-slate-200 text-lg items-center mr-[1.3%]' >
                <MagnifyingGlassIcon className='h-6 m-2 text-slate-100 mx-0 xsm:m-3'/>
                <p className='xsm:hidden'>Search</p>
              </button>
          </form>
          <div className=" ml-4 sm:text-sm mt-0 flex flex-row items-center justify-between">
            <select
            className="border-solid border border-slate-500 sm:p-0 float-right bg-blue-800 hover:bg-sky-200 hover:text-black text-slate-200 rounded-md mt-0"
              id="standard-select-currency"
              // select
              onChange={(e)=>handlec(e.target.value)}
              value={category}
              // onChange={(e)=>setcategory(e.target.value)}
              label="lang"
            >
              {categories.map((optionss)=>(
                <option key={optionss.label} onClick={()=>setcategory(optionss.label)} value={optionss.label}>{optionss.value}</option>
              ))}
            </select>
            {meaning[0]&&word&&category==="en" &&(<audio className="xsm:hidden sm:h-5 h-6 w-40 rounded-md bg-sky-400 border border-solid border-slate-500" src={meaning[0].phonetics[0]&&meaning[0].phonetics[0].audio} controls>not supported</audio>)}
            {/* {meaning[0]&&word&&category==="en" &&(<audio className="sm:hidden xsm:inline md:hidden hidden h-6 sm:h-6 bg-blue-800 rounded-md border border-solid border-slate-500" src={meaning[0].phonetics[0]&&meaning[0].phonetics[0].audio} controls>not supported</audio>)} */}
            {meaning[0]&&word&&category==="en" &&(<button className="sm:hidden xsm:inline md:hidden hidden h-6 sm:h-6 bg-blue-800 rounded-md border border-solid border-slate-500" onClick={()=>playa(meaning[0].phonetics[0]&&meaning[0].phonetics[0].audio)}><SpeakerWaveIcon className="h-5 mx-2 text-slate-200"/></button>)}
            <button className="sm:text-[12px] sm:p-0 float-right px-4 bg-blue-800 border-solid border border-slate-500 hover:bg-sky-200 hover:text-black text-slate-200 rounded-md mt-0 " type='button' onClick={f=>setsyn(!syn)}>{!syn?"Show Synonyms":"Hide Synonyms"}</button>
          </div>


          <div className='xsm:mt-2 relative from-blue-700 m-2 mt-4 sm:mt-2 xsm:mt-0'>
            <div className={` ${(word.length===0||word==="")?'':'hidden'} sm:text-[13px text-slate-200 m-auto text-3xl mt-10`}>YOUR DICTIONARY MADE YOUR SEARCH EASY</div>
            <div className={`${(word.length===0||word==="")?'hidden':''} ${showv?'':'hidden'}sm:text-[13px]  `}>{meaning.map((dif)=>
                  dif.meanings.map((item)=>
                  item.definitions.map((def)=>(
                      <div key={Math.random()} className="sm:mt-1 rounded-md sm:text-slate-200 bg-blue-200 sm:border-blue-500 border border-solid border-b-black sm:bg-blue-700 text-slate-800">
                        <div className={`bg-blue-200 sm:bg-blue-700 sm:leading-4`}>
                          <div className="sm:font-[300] md:text-[13px] bg-blue-200 sm:bg-blue-700 sm:leading-4 m-3 mb-0 sm:m=0">
                            <b>{def.definition}</b>
                          </div>
                          <div className="sm:text-green-200 md:text-[12px] bg-blue-200 sm:bg-blue-700 sm:leading-4 ml-6 text-[15px] sm:m=0">
                            <i>{def.example&&(<div>Example: {def.example}</div>)}</i>
                          </div>
                          <div className="md:text-[13px] ml-5 text-slate-800">
                            {/* {def.synonyms.length} */}
                            {item.synonyms &&syn&& (<div className="syno sm:text-slate-100">Synonyms: {item.synonyms.map((s) => `${s},`)}</div>)}
                          </div>
                        </div>
                      </div>
                  )))
            )}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;