 import React from "react";

import { useSearchParams } from "react-router-dom";
import { Card } from "../components";
import { useFetch, useTitle } from "../hooks";


export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams( ) ;
  const queryTerm = searchParams.get("q"); ;

  const { data: movies } = useFetch(apiPath, queryTerm);
  /* For page title custom hook  */
 const pageTitle = useTitle(`Search Result For ${queryTerm} /Moviesverse`);
  
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0 ? `Not result Found '${queryTerm}'` : `Result for '${queryTerm}'`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center  flex-wrap">
          {movies.map((movie, index) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
