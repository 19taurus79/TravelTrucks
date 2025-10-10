"use client";
import css from "./catalog.module.css";
import TrackCard from "@/components/TrackCard/TrackCard";
import { getCampers } from "@/lib/api/campers";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment } from "react";
import LoadMoreBtn from "@/components/LoadMoreBtn/LoadMoreBtn";
import ScrollToTopBtn from "@/components/ScrollToTopBtn/ScrollToTopBtn";

export default function Catalog() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["campers"],
    queryFn: getCampers,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 4) {
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
            {page.map((camper) => (
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
