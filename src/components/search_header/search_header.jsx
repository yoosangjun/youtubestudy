import React, { memo, useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(value);
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };
  const onEnter = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="" className={styles.img} />
          <h1 className={styles.title}>Youtube</h1>
        </div>
        <input
          type="search"
          placeholder="검색어를 입력하세요"
          className={styles.input}
          onKeyDown={onEnter}
          ref={inputRef}
        />
        <button type="submit" className={styles.button} onClick={onClick}>
          <img src="/images/search.png" alt="" className={styles.buttonimg} />
        </button>
      </header>
    </>
  );
});
export default SearchHeader;
