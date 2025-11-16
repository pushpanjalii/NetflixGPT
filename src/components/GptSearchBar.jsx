import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import {genAI} from "../utils/gemini";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef("");

  const handleGptSearchClick = async () => {
    try {
      console.log("GPT Search Clicked! Search Text:", searchText.current.value);

      const gptQuery =
        "Act as a movie recommendation engine. Suggest 5 movies similar to " +
        searchText.current.value +
        ". Provide titles only, comma separated.";

      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });

    //   if(!gptResults.choices){
    //     console.error("No choices found in GPT response");
    //     return;
    //   }

    //   console.log("GPT Choices:", gptResults.choices?.[0]?.message?.content);

    //   const gptMovies = gptResults.choices[0].message.content.split(",");

      const result = await model.generateContent(gptQuery);

      const text = await result.response.text();

      console.log("Gemini Movies:", text);
    } catch (error) {
      console.error("Gemini ERROR →", error);
 
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].getSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
