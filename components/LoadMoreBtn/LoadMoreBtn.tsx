import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
}

export default function LoadMoreBtn({
  onClick,
  isFetchingNextPage,
  hasNextPage,
}: LoadMoreBtnProps) {
  return (
    <div className={css.wrapper}>
      <button
        onClick={onClick}
        disabled={!hasNextPage || isFetchingNextPage}
        className={css.button}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : "Nothing more to load"}
      </button>
    </div>
  );
}
