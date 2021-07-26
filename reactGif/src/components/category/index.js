import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Categoria from "../../services/category"

function Category() {
  /* const data =  [
      {
        "name": "actions",
        "name_encoded": "actions",
        "subcategories": [
          {
            "name": "dancing",
            "name_encoded": "dancing"
          },
          {
            "name": "laughing",
            "name_encoded": "laughing"
          },
          {
            "name": "running",
            "name_encoded": "running"
          },
          {
            "name": "crying",
            "name_encoded": "crying"
          },
          {
            "name": "eating",
            "name_encoded": "eating"
          },
          {
            "name": "cooking",
            "name_encoded": "cooking"
          },
          {
            "name": "drinking",
            "name_encoded": "drinking"
          },
          {
            "name": "singing",
            "name_encoded": "singing"
          },
          {
            "name": "smiling",
            "name_encoded": "smiling"
          },
          {
            "name": "smoking",
            "name_encoded": "smoking"
          },
          {
            "name": "spinning",
            "name_encoded": "spinning"
          },
          {
            "name": "fighting",
            "name_encoded": "fighting"
          },
          {
            "name": "falling",
            "name_encoded": "falling"
          },
          {
            "name": "waiting",
            "name_encoded": "waiting"
          },
          {
            "name": "swimming",
            "name_encoded": "swimming"
          },
          {
            "name": "sleeping",
            "name_encoded": "sleeping"
          },
          {
            "name": "flirting",
            "name_encoded": "flirting"
          },
          {
            "name": "dreaming",
            "name_encoded": "dreaming"
          },
          {
            "name": "finger guns",
            "name_encoded": "finger-guns"
          },
          {
            "name": "pout",
            "name_encoded": "pout"
          },
          {
            "name": "slapping",
            "name_encoded": "slapping"
          },
          {
            "name": "fainting",
            "name_encoded": "fainting"
          },
          {
            "name": "sneezing",
            "name_encoded": "sneezing"
          },
          {
            "name": "breaking up",
            "name_encoded": "breaking-up"
          },
          {
            "name": "tossing drink",
            "name_encoded": "tossing-drink"
          }
        ]
      },
      {
        "name": "adjectives",
        "name_encoded": "adjectives",
        "subcategories": [
          {
            "name": "funny",
            "name_encoded": "funny"
          },
          {
            "name": "cute",
            "name_encoded": "cute"
          },
          {
            "name": "sexy",
            "name_encoded": "sexy"
          },
          {
            "name": "hot",
            "name_encoded": "hot"
          },
          {
            "name": "trippy",
            "name_encoded": "trippy"
          },
          {
            "name": "vintage",
            "name_encoded": "vintage"
          },
          {
            "name": "black and white",
            "name_encoded": "black-and-white"
          },
          {
            "name": "weird",
            "name_encoded": "weird"
          },
          {
            "name": "scary",
            "name_encoded": "scary"
          },
          {
            "name": "pretty",
            "name_encoded": "pretty"
          },
          {
            "name": "creepy",
            "name_encoded": "creepy"
          },
          {
            "name": "dark",
            "name_encoded": "dark"
          },
          {
            "name": "cold",
            "name_encoded": "cold"
          },
          {
            "name": "bright",
            "name_encoded": "bright"
          },
          {
            "name": "hd",
            "name_encoded": "hd"
          },
          {
            "name": "slow motion",
            "name_encoded": "slow-motion"
          }
        ]
      },
      {
        "name": "animals",
        "name_encoded": "animals",
        "subcategories": [
          {
            "name": "bird",
            "name_encoded": "bird"
          },
          {
            "name": "bear",
            "name_encoded": "bear"
          },
          {
            "name": "horse",
            "name_encoded": "horse"
          },
          {
            "name": "chicken",
            "name_encoded": "chicken"
          },
          {
            "name": "wolf",
            "name_encoded": "wolf"
          },
          {
            "name": "monkey",
            "name_encoded": "monkey"
          },
          {
            "name": "unicorn",
            "name_encoded": "unicorn"
          },
          {
            "name": "panda",
            "name_encoded": "panda"
          },
          {
            "name": "butterfly",
            "name_encoded": "butterfly"
          },
          {
            "name": "pig",
            "name_encoded": "pig"
          },
          {
            "name": "lion",
            "name_encoded": "lion"
          },
          {
            "name": "tiger",
            "name_encoded": "tiger"
          },
          {
            "name": "duck",
            "name_encoded": "duck"
          },
          {
            "name": "owl",
            "name_encoded": "owl"
          },
          {
            "name": "goat",
            "name_encoded": "goat"
          },
          {
            "name": "frog",
            "name_encoded": "frog"
          },
          {
            "name": "penguin",
            "name_encoded": "penguin"
          },
          {
            "name": "cow",
            "name_encoded": "cow"
          },
          {
            "name": "mouse",
            "name_encoded": "mouse"
          },
          {
            "name": "elephant",
            "name_encoded": "elephant"
          },
          {
            "name": "pug",
            "name_encoded": "pug"
          },
          {
            "name": "hamster",
            "name_encoded": "hamster"
          },
          {
            "name": "turtle",
            "name_encoded": "turtle"
          },
          {
            "name": "corgi",
            "name_encoded": "corgi"
          },
          {
            "name": "squirrel",
            "name_encoded": "squirrel"
          },
          {
            "name": "sheep",
            "name_encoded": "sheep"
          },
          {
            "name": "bulldog",
            "name_encoded": "bulldog"
          },
          {
            "name": "whale",
            "name_encoded": "whale"
          },
          {
            "name": "chihuahua",
            "name_encoded": "chihuahua"
          },
          {
            "name": "crab",
            "name_encoded": "crab"
          },
          {
            "name": "seal",
            "name_encoded": "seal"
          },
          {
            "name": "raccoon",
            "name_encoded": "raccoon"
          },
          {
            "name": "lizard",
            "name_encoded": "lizard"
          },
          {
            "name": "giraffe",
            "name_encoded": "giraffe"
          },
          {
            "name": "otter",
            "name_encoded": "otter"
          },
          {
            "name": "koala",
            "name_encoded": "koala"
          },
          {
            "name": "poodle",
            "name_encoded": "poodle"
          },
          {
            "name": "kangaroo",
            "name_encoded": "kangaroo"
          },
          {
            "name": "jellyfish",
            "name_encoded": "jellyfish"
          },
          {
            "name": "polar bear",
            "name_encoded": "polar-bear"
          },
          {
            "name": "hippo",
            "name_encoded": "hippo"
          },
          {
            "name": "camel",
            "name_encoded": "camel"
          },
          {
            "name": "ferret",
            "name_encoded": "ferret"
          },
          {
            "name": "red panda",
            "name_encoded": "red-panda"
          },
          {
            "name": "caterpillar",
            "name_encoded": "caterpillar"
          },
          {
            "name": "grumpy cat",
            "name_encoded": "grumpy-cat"
          },
          {
            "name": "meerkat",
            "name_encoded": "meerkat"
          },
          {
            "name": "skunk",
            "name_encoded": "skunk"
          }
        ]
    }] */
  
  const [data,setdata] = useState([])

  useEffect(() => {
    async function datas() {
      const datos = await Categoria()
      setdata(datos)
    }
    datas()

  }, []);

  const [,setSubcategory] = useLocation()
  const handlerclick = (event) => {
    const queryli = event.target.querySelectorAll("li");
    queryli.forEach((element) => {
      if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
      } else {
        element.classList.add("hidden");
      }
    });
  }
  const handlerSearch = (event)=>{
    const search = event.target.textContent
    setSubcategory(`/search/${search}`)
  }
  if (data === undefined) return (<><div>loading</div></>)
  return (
    <>
      <div className="text-center">
        <nav className="bg-gray-200">
          {data.map(cate => {
            const cateName = cate.name
            const subcategory = cate.subcategories
            return (
              <ul key={cateName} onClick={handlerclick} className="text-xl font-mono uppercase border-2 bg-gray-400 odd:bg-green-400 even:bg-purple-400">
                {cateName}
                {subcategory.map(x => {
                  return (
                    <li
                      key={x.name}
                      onClick={handlerSearch}
                      className="text-lg  p-1 hidden bg-green-50 even:bg-yellow-300"
                    >
                      {x.name}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </nav>
      </div>
    </>
  );  

}

export default Category