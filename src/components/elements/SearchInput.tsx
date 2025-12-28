interface SearchInputProps {
  defaultValue?: string;
}

export default function SearchInput({ defaultValue = '' }: SearchInputProps) {
  return (
    <div className="relative border border-white flex">
      <svg className="absolute top-1/2 -translate-y-1/2 left-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#svg-a569c57c2371d97aff5702b1d52a7c91__a)"><path d="M17 17L22.7499 22.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M1 10.25C1 12.7033 1.97455 15.056 3.70926 16.7907C5.44397 18.5254 7.79675 19.5 10.25 19.5C12.7033 19.5 15.056 18.5254 16.7907 16.7907C18.5254 15.056 19.5 12.7033 19.5 10.25C19.5 7.79675 18.5254 5.44397 16.7907 3.70926C15.056 1.97455 12.7033 1 10.25 1C7.79675 1 5.44397 1.97455 3.70926 3.70926C1.97455 5.44397 1 7.79675 1 10.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="svg-a569c57c2371d97aff5702b1d52a7c91__a"><rect width="24" height="24" fill="white"></rect></clipPath></defs></svg>
      <input
      type="text"
      name="search"
      placeholder="Search for games"
      defaultValue={defaultValue}
      className="w-full pl-10 pr-3 py-3 outline-none font-bold"
    />
    </div>
  );
}