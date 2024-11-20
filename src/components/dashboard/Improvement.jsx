const cards = [
  "Alexander Grahambell",
  "Alexander Grahambell",
  "Alexander Grahambell",
];

const Improvement = () => {
  return (
    <div className="p-8 shadow-xl rounded-2xl ">
      <header className="mb-6 text-3xl font-extrabold ">
        Area's of Improvement
      </header>
      <section className="flex items-center gap-4">
        {cards.map((card) => (
          <div key={card } className="flex flex-col items-center p-2 border rounded-lg border-primary ">
            <div className="bg-[#5C3A7A]  w-32 h-32 max-h-32  rounded-lg max-w-32"></div>
            <p className="mb-2 text-xs font-semibold text-center">{card}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Improvement;
