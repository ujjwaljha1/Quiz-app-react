import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../navbar/navbar";
import QuizCard from "../../QuizCard/QuizCard";
import "./Home.css";

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await axios.get("http://localhost:3030/categories");
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <Fragment>
      <div>
        <Navbar />
        <main className="main d-flex wrap gap-md align-center justify-center">
          {categories.map((category) => (
            <QuizCard category={category} key={category.id} />
          ))}
        </main>
      </div>
    </Fragment>
  );
}

export default Home;
