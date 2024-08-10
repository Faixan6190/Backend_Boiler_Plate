// import { getAll } from "../db/index.js";

// const getData = () => {
//   return getAll();
// };

// export default getData;

// import { getAllPopulated } from "../db/index.js";

// const getData = () => {
//   return getAllPopulated("category");
// };

// export default getData;

import { getAggregate } from "../db/index.js";

const getData = (query) => {
  // const { title } = query;
  console.log("query", query);
  return getAggregate([
    // {
    //   $match: {
    //     title: {
    //       $in: ["shoes", "paint"],
    //     },
    //   },
    // },
  ]);
};

export default getData;
