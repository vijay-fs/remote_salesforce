import { useEffect, useState } from "react";
import CardDesign from "../components/CardDesign";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { data } from "../data/blogdata";

//   {
//     id: 1,
//     title: "SALESFORCE",
//     date: "2021-07-01",
//     duration: "1:00",
//     status: "LIVE",
//     category: "Marketing",
//     image: img,
//   },
//   {
//     id: 2,
//     title: "MARKETING CLOUD",
//     date: "2021-07-01",
//     duration: "1:00",
//     status: "LIVE",
//     category: "Marketing",
//     image: img1,
//   },
//   {
//     id: 3,
//     title: "ANALYTICS CLOUD",
//     date: "2021-07-01",
//     duration: "1:00",
//     status: "ARCHIVED",
//     category: "Marketing",
//     image: img,
//   },
//   {
//     id: 4,
//     title: "SOCIAL CLOUD",
//     date: "2021-07-01",
//     duration: "1:00",
//     status: "DRAFT",
//     category: "Sales",
//     image: sales,
//   },
//   {
//     id: 5,
//     title: "SOCIAL CLOUD",
//     date: "2021-07-01",
//     duration: "1:00",
//     status: "LIVE",
//     category: "Sales",
//     image: sales1,
//   },
//   {
//     id: 6,
//     title: "SOCIAL CLOUD",
//     date: "2021-07-01",
//     duration: "1:00",
//     status: "DRAFT",
//     category: "Sales",
//     image: sales2,
//   },
//   {
//     id: 7,
//     title: "Top tricks to Bargaraining",
//     date: "2021-07-01",
//     duration: "1:00",
//     status: "LIVE",
//     category: "Sales",
//     image: sales,
//   },
// ];
const Knowledge = () => {
  const location = useLocation();
  console.log("pathname", location.pathname);
  const pathname = location.pathname;
  const catKey = pathname.replace("/", " ").toUpperCase();

  console.log(catKey);
  const [value, setValue] = useState([]);

  function Draftdata() {
    const filteredDraft = data.filter((user) => {
      return user.status === "DRAFT";
    });
    return setValue(filteredDraft);
  }
  function ARCHIVEDdata() {
    const filteredARCHIVE = data.filter((user) => {
      return user.status === "ARCHIVED";
    });
    return setValue(filteredARCHIVE);
  }

  function LIVEdata() {
    const filteredLIVE = data.filter((user) => {
      return user.status === "LIVE";
    });
    return setValue(filteredLIVE);
  }
  function all() {
    setValue(data);
  }

  useEffect(() => {
    all();
  }, []);

  return (
    <>
      <Header Header={catKey} />
      <div className="ml-56 mt-20">
        <ul className="flex gap-8 mx-20 font-semibold">
          <li
            className="hover:bg-violet-600 hover:text-white active:bg-violet-700 rounded-md px-2 py-1 cursor-pointer"
            onClick={all}
          >
            ALL
          </li>
          <li
            className="hover:bg-violet-600 hover:text-white active:bg-violet-700 rounded-md px-2 py-1 cursor-pointer"
            onClick={LIVEdata}
          >
            LIVE
          </li>
          <li
            className="hover:bg-violet-600 hover:text-white active:bg-violet-700 rounded-md px-2 py-1 cursor-pointer"
            onClick={Draftdata}
          >
            DRAFT
          </li>
          <li
            className="hover:bg-violet-600 hover:text-white active:bg-violet-700 rounded-md px-2 py-1 cursor-pointer"
            onClick={ARCHIVEDdata}
          >
            ARCHIVED
          </li>
        </ul>
        <>
          <div className="flex flex-wrap px-12 pt-6 gap-8">
            {value.map((item) => (
              <CardDesign
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                date={item.date}
                duration={item.duration}
                category={item.category}
              />
            ))}
          </div>
        </>
      </div>
    </>
  );
};
export default Knowledge;
