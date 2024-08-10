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
  const { pageSize, pageNumber } = query;
  const skip = (pageNumber - 1) * pageSize;
  return getAggregate([
    // {
    //   $match: {
    //     title: {
    //       $in: ["shoes", "paint"],
    //     },
    //   },
    // },
    {
      $facet: {
        data: [{ $skip: Number(skip) }, { $limit: Number(pageSize) }],
        metadata: [{ $count: "total" }],
      },
    },
  ]);
};

export default getData;
