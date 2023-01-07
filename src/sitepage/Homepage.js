import Header from "../components/Header";

const Home = () => {
  const catKey = "Home";
  return (
    <>
      <Header Header={catKey} />
      <blockquote class="text-2xl font-semibold italic text-center text-slate-900 ml-56 my-56 px-56">
        This is the place to find all the information you need to get started
        with
        <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
          <span class="relative text-white">Team vijay</span>
        </span>
        You can search for articles, browse by category, or explore the most
        popular articles.
      </blockquote>
    </>
  );
};
export default Home;
