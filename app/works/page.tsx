// type Props = {
//   searchParams: { [key: string]: string | string[] | undefined };
// };

export default async function Page() {
  return (
    <main>
      <h1>ALL WORKS</h1>
    </main>
  )
}

// export default async function Page({ searchParams }: Props) {
//   const works = await clientFetch<TYPEWorkThumbnail[]>(SANITY_QUERY, {
//     next: { revalidate: 10 },
//   });

//   const paramsSortBy = searchParams.sortby;

//   // EDIT 23/05
//   const sortItemsByTitle = (arr: TYPEWorkThumbnail[]) => {
//     return arr.sort((a, b) => a.title.localeCompare(b.title));
//   };

//   const sortedWorks = () => {
//     if (paramsSortBy === undefined)
//       return sortItemsByTitle(works); // EDIT 23/05
//     else {
//       // Selected filter works
//       let selectedWorks = works.filter(
//         (work) => work.category.slug === paramsSortBy
//       );
//       let alphaSortedSelectWorks = sortItemsByTitle(selectedWorks); // EDIT 23/05
//       // Unselected filter works
//       let otherWorks = works.filter(
//         (work) => work.category.slug !== paramsSortBy
//       );
//       let alphaSortedOtherWorks = sortItemsByTitle(otherWorks); // EDIT 23/05
//       let mergedWorks = alphaSortedSelectWorks.concat(alphaSortedOtherWorks);
//       return mergedWorks;
//     }
//   };
//   return (
//     <main>
//       {searchParams.mode === "alpha" ? (
//         <EntriesList entries={sortedWorks()} />
//       ) : (
//         <Carousel items={works} />
//       )}
//       <ModeToggle mode={searchParams.mode} />
//     </main>
//   );
// }

// const SANITY_QUERY = groq`
//   *[_type == 'workEntry']|order(orderRank){
//     ${WORK_THUMBNAIL}
//   }
// `;
