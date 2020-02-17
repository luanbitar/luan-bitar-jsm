import { Link } from "gatsby"

import "./Header.scss"
import HeaderLogic from "./logic"
import CloseIcon from "assets/close.svg"
import JSMLogo from "assets/jsm-logo.svg"
import SearchIcon from "assets/search.svg"

function Header({
  inputRef,
  withSearch,
  inputClassName,
  onOpenSearchInput,
  onCloseSearchInput,
  onSearchInputChange,
}) {
  return (
    <div className="header-container">
      <div className="container">
        <Link to="/" className="jsm-logo">
          <JSMLogo />
        </Link>
        {withSearch && (
          <SearchIcon className="search-icon" onClick={onOpenSearchInput} />
        )}
        <div className={inputClassName}>
          <input
            className="search-input"
            type="text"
            ref={inputRef}
            onChange={e => onSearchInputChange(e.target.value)}
          />
          <CloseIcon className="close-icon" onClick={onCloseSearchInput} />
        </div>
      </div>
    </div>
  )
}
export default HeaderLogic(Header)
