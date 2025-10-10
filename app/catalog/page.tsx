"use client";
import css from "./catalog.module.css";
import TrackCard from "@/components/TrackCard/TrackCard";
import { getCampers } from "@/lib/api/campers";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment } from "react";
import LoadMoreBtn from "@/components/LoadMoreBtn/LoadMoreBtn";
import ScrollToTopBtn from "@/components/ScrollToTopBtn/ScrollToTopBtn";

import { useFilterStore } from "@/store/filterStore";

export default function Catalog() {
  const { activeFilters } = useFilterStore();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["campers", activeFilters],
    queryFn: ({ pageParam }) => getCampers({ pageParam, activeFilters }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.items.length < 4) {
        return undefined;
      }
      return allPages.length + 1;
    },
  });

  if (status === "pending") {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    console.log(error);
    return <p>Ooops ... Somthing went wrong</p>;
  }

  return (
    <>
      <div className={css.container}>
        {data.pages.map((page, i) => (
          <Fragment key={i}>
            {page.items.map((camper) => (
              <TrackCard key={camper.id} camper={camper} />
            ))}
          </Fragment>
        ))}

        <ScrollToTopBtn />
      </div>
      <LoadMoreBtn
        onClick={() => fetchNextPage()}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </>
  );
}