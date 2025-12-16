import UserAvatar from "./UserAvatar";
import { useLocation, useNavigate, useSearchParams } from "react-router";
import { useDebouncedCallback } from "use-debounce";

export default function AdminNav() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const query = searchParams.get("query") || "";

  const debounceFn = useDebouncedCallback((e) => {
    e.preventDefault();
    const value = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (value.length >= 3) {
      params.set("query", value);
      navigate(location.pathname + "?" + params.toString());
    } else {
      navigate(location.pathname);
      params.delete("query");
      setSearchParams(params);
    }
    setSearchParams(params);
  }, 500);

  return (
    <div className="sticky top-0 w-full bg-(--navBg) p-4 z-40">
      <div className="container mx-auto flex items-center justify-between">
        <label className="input text-white bg-zinc-900 rounded-lg w-[90%] md:w-auto">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search"
            className="input-lg"
            defaultValue={query}
            onChange={debounceFn}
          />
        </label>
        <div className="pl-3">
          <UserAvatar />
        </div>
      </div>
    </div>
  );
}
